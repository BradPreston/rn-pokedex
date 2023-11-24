import request from 'graphql-request';
import {
	UseSuspenseQueryResult,
	useSuspenseQuery
} from '@tanstack/react-query';
import { graphql } from '../graphql/gql';
import { PokemonArr } from '@types';

const getPokemonByIdQuery = graphql(`
	query pokemon_details($id: Int!) {
		pokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
			id
			name
			is_legendary
			details: pokemon_v2_pokemons_aggregate(limit: 1) {
				nodes {
					height
					weight
					types: pokemon_v2_pokemontypes {
						type: pokemon_v2_type {
							name
						}
					}
				}
			}
			flavor_text: pokemon_v2_pokemonspeciesflavortexts(
				where: {
					pokemon_v2_language: { name: { _eq: "en" } }
					pokemon_v2_version: { name: { _eq: "red" } }
				}
			) {
				description: flavor_text
			}
		}
	}
`);

export function pokemonByIdQueryFunction(id: number) {
	return request(
		'https://beta.pokeapi.co/graphql/v1beta',
		getPokemonByIdQuery,
		{
			id: id
		}
	);
}

export function usePokemonById(
	id: number
): UseSuspenseQueryResult<PokemonArr, Error> {
	return useSuspenseQuery({
		queryKey: ['pokemonById'],
		queryFn: async () => pokemonByIdQueryFunction(id)
	});
}
