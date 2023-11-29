import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useMutation } from '@tanstack/react-query';
import { party } from '@storage';
import {
	convertMetersToFeetString,
	convertToPounds,
	pokedexNumber
} from '@internal';
import { useState } from 'react';
import { Heading, PokemonImage } from '@components';
import { toast, PartyButton, TypeChip, AreYouSureModal } from '@components';
import { useAllParty, usePokemonById } from '@hooks';
import { typeColors } from '@internal';

export default function PokemonById() {
	const { id } = useLocalSearchParams<{
		id: string;
	}>();

	if (!id) return;

	const [showModal, setShowModal] = useState(false);
	const [removedPokemon, setRemovedPokemon] = useState(false);

	const numId = parseInt(id);
	const { data, isLoading, isError, isSuccess } = usePokemonById(numId);
	const { data: pokemonParty, refetch } = useAllParty();

	const addToPartyMutation = useMutation({
		mutationKey: ['pokemonParty'],
		mutationFn: party.insert,
		onSuccess: () => {
			setRemovedPokemon(false);
			refetch();
		}
	});

	const removeFromPartyMutation = useMutation({
		mutationKey: ['pokemonParty'],
		mutationFn: party.removeOne,
		onSuccess: () => {
			setRemovedPokemon(true);
			refetch();
		}
	});

	if (addToPartyMutation.status === 'error') {
		if (addToPartyMutation.error instanceof Error) {
			toast.error(addToPartyMutation.error.message);
		}
	}

	if (removeFromPartyMutation.status === 'error') {
		if (removeFromPartyMutation.error instanceof Error) {
			toast.error(removeFromPartyMutation.error.message);
		}
	}

	if (isLoading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (isError) {
		return (
			<View>
				<Text>An error ocurred</Text>
			</View>
		);
	}

	if (isSuccess) {
		const species = data.pokemon[0];
		const { id, name, details, flavor_text } = species;
		const { height, weight, types } = details.nodes[0];

		const isInParty = pokemonParty?.filter((pkmn) => pkmn.name === name)[0];

		if (addToPartyMutation.status === 'success') {
			toast.success(addToPartyMutation.data);
		}
		if (removeFromPartyMutation.status === 'success') {
			toast.success(removeFromPartyMutation.data);
		}

		return (
			<View
				className={`${
					typeColors[types[0].type.name]['cardBackground']
				} overflow-hidden`}>
				<View className='flex-row w-full py-20 px-5 gap-5'>
					<View className=' absolute -left-10 top-10 -z-10'>
						<Text
							style={{
								textShadowColor: '#ffffff',
								textShadowRadius: 2
							}}
							className={`${
								typeColors[types[0].type.name]['textColor']
							} text-9xl w-full font-bold uppercase`}>
							{name}
						</Text>
					</View>
					<View>
						<PokemonImage id={id} />
					</View>
					<View className='gap-3'>
						<Text className='font-bold text-gray-700'>
							#{pokedexNumber(id)}
						</Text>
						<Heading title={name} color='light' />

						<View className='flex flex-row gap-2'>
							<TypeChip type={types[0].type.name} />
							{types[1] && <TypeChip type={types[1].type.name} />}
						</View>
					</View>
				</View>
				<View className='bg-white h-full rounded-tr-3xl rounded-tl-3xl px-5 pt-5'>
					{showModal && (
						<AreYouSureModal
							showModal={showModal}
							handleCancel={() => setShowModal(false)}
							handleConfirm={() => {
								removeFromPartyMutation.mutate(name);
								setShowModal(false);
							}}
						/>
					)}
					<View className='flex flex-row justify-between'>
						<View>
							<Text>Height: {convertMetersToFeetString(height)}</Text>
							<Text>Weight: {convertToPounds(weight)} lbs</Text>
						</View>
					</View>
					<Text className='mt-5'>
						{flavor_text[0].description.replace(/\f/g, ' ').replace(/\n/g, ' ')}
					</Text>

					<View className='flex items-center mt-5'>
						{isInParty && !removedPokemon ? (
							<PartyButton
								removeFromParty={() => setShowModal(true)}
								styles='bg-red-700 rounded-md flex items-center justify-center w-full py-3'
							/>
						) : (
							<PartyButton
								addToParty={() => addToPartyMutation.mutate(species)}
								styles='bg-slate-700 rounded-md flex items-center justify-center w-full py-3'
							/>
						)}
					</View>
				</View>
			</View>
		);
	}
}
