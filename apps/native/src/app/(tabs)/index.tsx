import { GET_ALL_POKEMON, PokemonQuery } from '@repo/query';
import { AllPokemon } from '@repo/types';
import { LoadingSpinner } from '@repo/ui';
import { Card } from '@repo/ui';
import { FlatList, View } from 'react-native';

export default function Page() {
	// grab the data for all pokemon
	const { data } = PokemonQuery<AllPokemon>('allPokemon', GET_ALL_POKEMON);
	// if no data is found, early return
	if (!data) return;
	// load the pokeballImage for the card background
	const pokeballImage = require('../../../assets/white-pokeball-bg.png');

	return (
		<View className='px-4'>
			<FlatList
				data={data.pokemon}
				renderItem={({ item }) => <Card pokemon={item} image={pokeballImage} />}
				keyExtractor={(pokemon) => pokemon.name}
				showsVerticalScrollIndicator={false}
			/>
		</View>
	);
}
