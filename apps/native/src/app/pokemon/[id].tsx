import { GET_POKEMON_BY_ID, PokemonQuery } from '@repo/query';
import { Pokemon } from '@repo/types';
import { LoadingSpinner } from '@repo/ui/spinner';
import { useLocalSearchParams } from 'expo-router';
import { Text, View, Image, ActivityIndicator } from 'react-native';

export default function PokemonById() {
	// grab the pokemon id from the url
	const { id } = useLocalSearchParams<{
		id: string;
	}>();

	// if no id is found, early return
	if (!id) return;

	// grab the pokemon data by id
	const { data, isFetching } = PokemonQuery<Pokemon>(
		'pokemonById',
		GET_POKEMON_BY_ID,
		parseInt(id)
	);

	// if no data is found, early return
	if (!data) return;

	// if the page is loading data, show a spinner
	if (isFetching) return <LoadingSpinner />;

	// else show the pokemon details
	return (
		<View>
			<Text>{data.details[0].name}</Text>
			<Image
				className='h-40 aspect-square'
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
				}}
			/>
			<Text></Text>
		</View>
	);
}
