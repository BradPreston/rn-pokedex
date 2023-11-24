import { gql } from 'graphql-request';

export const ALL_POKEMON = gql`
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
`;

export const POKEMON_BY_ID = gql`
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
`;
