import { Link } from 'expo-router';
import { memo } from 'react';
import { Image, Text } from 'react-native';
import { useQueryClient } from 'react-query';
import getPokemonById from '../graphql/getPokemonById';

type Props = {
	id: number;
	name: string;
};

export default memo(function ListItem({ id, name }: Props) {
	const clientQuery = useQueryClient();

	return (
		<Link
			href={`/pokemon/${id}`}
			className='flex w-full justify-between'
			onPress={async () =>
				await clientQuery.prefetchQuery('pokemonById', () => getPokemonById(id))
			}>
			<Image
				className='w-12 h-12'
				width={48}
				height={48}
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				}}
			/>
			<Text>{name}</Text>
		</Link>
	);
});
