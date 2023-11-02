import { Link } from 'expo-router';
import { memo } from 'react';
import { Image, View, Text } from 'react-native';
import { useQueryClient } from 'react-query';
import { getPokemonById } from '@graphql';

type Props = {
	id: number;
	name: string;
};

export default memo(function ListItem({ id, name }: Props) {
	const clientQuery = useQueryClient();

	return (
		<Link
			href={`/pokemon/${id}`}
			onPress={async () =>
				await clientQuery.prefetchQuery('pokemonById', () => getPokemonById(id))
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
