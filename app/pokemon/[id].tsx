import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { getPokemonById } from '@graphql';
import { useQuery, useMutation } from 'react-query';
import { party } from '@storage';
import { convertMetersToFeetString, convertToPounds } from '@internal';
import { useState } from 'react';
import {
	toast,
	Container,
	PartyButton,
	TypeChip,
	AreYouSureModal
} from '@components';

export default function PokemonById() {
	const [showModal, setShowModal] = useState(false);
	const { id } = useLocalSearchParams<{
		id: string;
	}>();
	const [removedPokemon, setRemovedPokemon] = useState(false);
	const { data: pokemonParty, refetch } = useQuery(
		'pokemonParty',
		party.getAll
	);
	const addToPartyMutation = useMutation('pokemonParty', party.insert, {
		onSuccess: () => {
			setRemovedPokemon(false);
			refetch();
		}
	});
	const removeFromPartyMutation = useMutation('pokemonParty', party.removeOne, {
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

	if (!id) return;

	const numId = parseInt(id);
	const { data, isLoading, isError, isSuccess } = useQuery('pokemonById', () =>
		getPokemonById(numId)
	);

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
		const pokemon = data[0];
		const pokemonInfo = pokemon.pokemon.nodes[0];
		const { id, name } = pokemonInfo;

		const isInParty = pokemonParty?.filter((pkmn) => pkmn.name === name)[0];
		if (addToPartyMutation.status === 'success') {
			toast.success(addToPartyMutation.data);
		}
		if (removeFromPartyMutation.status === 'success') {
			toast.success(removeFromPartyMutation.data);
		}

		return (
			<Container>
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
				<Image
					className='w-96 h-96 self-center'
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
					}}
				/>
				<Text className='capitalize text-4xl my-2'>{pokemon.name}</Text>
				<View className='flex flex-row justify-between'>
					<View>
						<Text>Height: {convertMetersToFeetString(pokemonInfo.height)}</Text>
						<Text>Weight: {convertToPounds(pokemonInfo.weight)} lbs</Text>
					</View>
					<View className='flex flex-row gap-2'>
						<TypeChip type={pokemonInfo.types[0].type.name} />
						{pokemonInfo.types[1] && (
							<TypeChip type={pokemonInfo.types[1].type.name} />
						)}
					</View>
				</View>
				<Text className='mt-5'>
					{pokemon.flavorText[0].flavor_text
						.replace(/\f/g, ' ')
						.replace(/\n/g, ' ')}
				</Text>

				<View className='flex items-center mt-5'>
					{isInParty && !removedPokemon && (
						<PartyButton
							removeFromParty={() => setShowModal(true)}
							styles='bg-pokemon-red rounded-md flex items-center justify-center w-full py-3'
						/>
					)}
					{isInParty && removedPokemon && (
						<PartyButton
							addToParty={() => addToPartyMutation.mutate({ id, name })}
							styles='bg-pokemon-slate rounded-md flex items-center justify-center w-full py-3'
						/>
					)}
					{!isInParty && !removedPokemon && (
						<PartyButton
							addToParty={() => addToPartyMutation.mutate({ id, name })}
							styles='bg-pokemon-slate rounded-md flex items-center justify-center w-full py-3'
						/>
					)}
					{!isInParty && removedPokemon && (
						<PartyButton
							addToParty={() => addToPartyMutation.mutate({ id, name })}
							styles='bg-pokemon-slate rounded-md flex items-center justify-center w-full py-3'
						/>
					)}
				</View>
			</Container>
		);
	}
}
