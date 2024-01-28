import { GET_ALL_POKEMON, PokemonQuery } from '@repo/query';
import { Pokemon, PokemonArr } from '@repo/types';
import { Card } from '@repo/ui';
import { useCallback } from 'react';
import { FlatList, ListRenderItem, View, Text } from 'react-native';

export default function Page() {
	// const { data } = PokemonQuery<PokemonArr>('allPokemon', GET_ALL_POKEMON);

	// const pokeballImage = require('../../assets/white-pokeball-bg.png');

	// const renderItem = useCallback<ListRenderItem<Pokemon>>(
	// 	({ item }) => <Card pokemon={item} image={pokeballImage} />,
	// 	[]
	// );

	// if (!data) return;

	return (
		<View>
			<Text>Hello</Text>
			{/* <FlatList
				data={data.pokemon}
				renderItem={renderItem}
				keyExtractor={(item) => item.name}
				showsVerticalScrollIndicator={false}
			/> */}
		</View>
	);
}