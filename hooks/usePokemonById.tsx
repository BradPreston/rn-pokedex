import request from 'graphql-request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { graphql } from '../graphql/gql';
import { SpeciesArr } from '@types';

const getPokemonByIdQuery = graphql(`
	query pokemon_details($id: Int!) {
		species: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
			name
			is_legendary
			pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
				nodes {
					height
					name
					id
					weight
					types: pokemon_v2_pokemontypes {
						slot
						type: pokemon_v2_type {
							name
						}
					}
				}
			}
			flavorText: pokemon_v2_pokemonspeciesflavortexts(
				where: {
					pokemon_v2_language: { name: { _eq: "en" } }
					pokemon_v2_version: { name: { _eq: "red" } }
				}
			) {
				flavor_text
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

export function usePokemonById(id: number): UseQueryResult<SpeciesArr, Error> {
	return useQuery({
		queryKey: ['pokemonById'],
		queryFn: async () => pokemonByIdQueryFunction(id)
	});
}
