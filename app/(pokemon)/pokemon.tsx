import { View, FlatList, Text, ListRenderItem } from 'react-native';
import getAllPokemon from '../../graphql/getAllPokemon';
import ListItem from '../../components/ListItem';
import { useQuery } from 'react-query';
import { memo, useCallback } from 'react';
import { Pokemon } from '../../types';

export default memo(function AllPokemon() {
	const { data, status } = useQuery('allPokemon', getAllPokemon);

	const renderItem = useCallback<ListRenderItem<Pokemon>>(
		({ item }) => <ListItem id={item.id} name={item.name} />,
		[]
	);

	if (status === 'loading') {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (status === 'error') {
		return (
			<View>
				<Text>An error ocurred</Text>
			</View>
		);
	}

	if (status === 'success') {
		return (
			<View>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={data}
					renderItem={renderItem}
					keyExtractor={(item) => item.name}
				/>
			</View>
		);
	}
});
