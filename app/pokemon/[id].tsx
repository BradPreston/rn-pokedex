import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import getPokemonById from '../../graphql/getPokemonById';
import { useQuery, useMutation } from 'react-query';
import { party } from '../../storage';
import TypeChip from '../../components/TypeChip';

function convertMetersToFeetString(height: number): string {
	const inches = Math.round((height / 10) * 39.37);
	const feet = Math.floor(inches / 12);
	return `${feet}' ${inches % 12}"`;
}

function convertToPounds(weight: number): number {
	const pounds = (weight / 10) * 2.205;
	return parseFloat(pounds.toFixed(1));
}

export default function PokemonById() {
	const { id } = useLocalSearchParams<{ id: string }>();
	const mutation = useMutation('pokemonById', party.insert);

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

		return (
			<View className='flex flex-col'>
				<View className='w-11/12 self-center flex'>
					<Image
						className='w-96 h-96 self-center'
						source={{
							uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
						}}
					/>
					<Text className='capitalize text-4xl my-2'>{pokemon.name}</Text>
					<View className='flex flex-row justify-between'>
						<View>
							<Text>
								Height: {convertMetersToFeetString(pokemonInfo.height)}
							</Text>
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
						<Pressable
							className='bg-slate-700 rounded-md flex items-center justify-center w-full py-3'
							onPress={() => mutation.mutate(pokemon)}>
							<Text className='text-white text-lg'>Add to Party</Text>
						</Pressable>
					</View>
				</View>
			</View>
		);
	}
}
