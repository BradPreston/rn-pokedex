import { GET_POKEMON_BY_ID, PokemonQuery } from '@repo/query';
import { Pokemon } from '@repo/types';
import { LoadingSpinner, TypeColors } from '@repo/ui';
import { useLocalSearchParams } from 'expo-router';
import { Header } from '@/components';

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

	const { pokemon_type } = data;

	// if the page is loading data, show a spinner
	if (isFetching)
		return (
			<LoadingSpinner
				color={TypeColors[pokemon_type[0].type.name]['textColor']}
			/>
		);

	// else show the pokemon details
	return (
		<>
			<Header pokemon={data} id={id} />
		</>
	);
}
