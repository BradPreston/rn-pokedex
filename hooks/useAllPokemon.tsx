import request from 'graphql-request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { graphql } from '../graphql/gql';
import { PokemonArr } from '@types';

const getAllPokemonQuery = graphql(`
	query get_all_pokemon {
		pokemon: pokemon_v2_pokemonspecies(limit: 151, order_by: { id: asc }) {
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
export default function useAllPokemon(): UseQueryResult<PokemonArr, Error> {
	return useQuery({
		queryKey: ['pokemon'],
		queryFn: async () =>
			request('https://beta.pokeapi.co/graphql/v1beta', getAllPokemonQuery)
	});
}
