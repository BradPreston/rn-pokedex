import { GET_ALL_POKEMON, PokemonQuery } from '@repo/query';
import { AllPokemon } from '@repo/types';
import { Card } from '@repo/ui';
import { FlatList, View } from 'react-native';

export default function Page() {
	const { data } = PokemonQuery<AllPokemon>('allPokemon', GET_ALL_POKEMON);

	const pokeballImage = require('../../../assets/white-pokeball-bg.png');

	if (!data) return;

	return (
		<View>
			<FlatList
				data={data.pokemon}
				renderItem={({ item }) => <Card pokemon={item} image={pokeballImage} />}
				keyExtractor={(pokemon) => pokemon.name}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
