import { Link } from 'expo-router';
import { memo } from 'react';
import { Image, View, Text } from 'react-native';
import { QueryClient, useQueryClient } from '@tanstack/react-query';
// import { getPokemonById } from '@graphql';
import { usePokemonById } from '@hooks';
import { pokemonByIdQueryFunction } from 'hooks/usePokemonById';

type Props = {
	id: number;
	name: string;
	clientQuery: QueryClient;
};

export default memo(function ListItem({ id, name, clientQuery }: Props) {
	return (
		<Link
			href={`/pokemon/${id}`}
			onPress={async () =>
				await clientQuery.prefetchQuery({
					queryKey: ['pokemonById'],
					queryFn: async () => pokemonByIdQueryFunction(id)
				})
			}>
			<View className='flex justify-left items-center flex-row gap-5 pl-5'>
				<Image
					className='w-16 h-16'
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
					}}
				/>
				<Text className='text-xl capitalize'>{name}</Text>
			</View>
		</Link>
	);
});
