import * as Linking from 'expo-linking';
import { memo } from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import { QueryClient } from '@tanstack/react-query';
import { pokemonByIdQueryFunction } from '@hooks';
import { Pokemon } from '@types';
import pokedexNumber from 'internal/pokedexNumber';
import { TypeChip, PokemonImage } from '@components';
import { typeColors } from '@internal';

type Props = {
	clientQuery: QueryClient;
	pokemon: Pokemon;
};

export default memo(function ListItem({ pokemon, clientQuery }: Props) {
	const { id, name, details } = pokemon;
	const { types } = details.nodes[0];
	const redirectUrl = Linking.createURL('/pokemon/' + id);
	return (
		<View
			className={`${
				typeColors[types[0].type.name]['cardBackground']
			} mt-12 rounded-xl`}>
			<Pressable
				onPress={async () => {
					await clientQuery.prefetchQuery({
						queryKey: ['pokemonById'],
						queryFn: async () => pokemonByIdQueryFunction(id)
					});
					Linking.openURL(redirectUrl);
				}}>
				<View className='w-full overflow-hidden p-5'>
					<Text className='font-bold text-gray-700'>#{pokedexNumber(id)}</Text>
					<Text className='text-4xl font-bold capitalize text-white py-2'>
						{name}
					</Text>
					<View className='flex-row gap-2'>
						{types.map((type) => (
							<TypeChip key={`${id}-${type.type.name}`} type={type.type.name} />
						))}
					</View>

					<View className='absolute items-center justify-center right-0 -z-10'>
						<Image
							style={{ objectFit: 'contain' }}
							className='h-52 aspect-square opacity-10'
							source={require('../assets/white-pokeball-bg.png')}
						/>
					</View>
				</View>
				<View className='absolute right-2 -top-8'>
					<PokemonImage id={id} />
				</View>
			</Pressable>
		</View>
	);
});
