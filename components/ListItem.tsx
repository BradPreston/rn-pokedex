import { Link } from 'expo-router';
import { memo } from 'react';
import { Image, View, Text } from 'react-native';
import { useQueryClient } from 'react-query';
import getPokemonById from '../graphql/getPokemonById';

type Props = {
	id: number;
	name: string;
	inParty?: boolean;
};

export default memo(function ListItem({ id, name, inParty }: Props) {
	const clientQuery = useQueryClient();

	return (
		<View className='flex justify-left items-center flex-row gap-5 ml-5'>
			<Image
				className='w-16 h-16'
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				}}
			/>
			<Link
				href={`/pokemon/${id}${inParty ? '?inParty=true' : ''}`}
				onPress={async () =>
					await clientQuery.prefetchQuery('pokemonById', () =>
						getPokemonById(id)
					)
				}>
				<Text className='text-xl capitalize'>{name}</Text>
			</Link>
		</View>
	);
});
