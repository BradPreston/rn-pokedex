import { gql } from 'graphql-request';

export const ALL_POKEMON = gql`
	query getAllPokemon {
		pokemon: pokemon_v2_pokemon(limit: 151) {
			name
			id
		}
	}
`;

export const POKEMON_BY_ID = gql`
	query pokemon_details($id: Int!) {
		species: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
			name
			is_legendary
			is_mythical
			habitat: pokemon_v2_pokemonhabitat {
				name
			}
			pokemon: pokemon_v2_pokemons_aggregate(limit: 1) {
				nodes {
					height
					name
					id
					weight
					abilities: pokemon_v2_pokemonabilities_aggregate {
						nodes {
							ability: pokemon_v2_ability {
								name
							}
						}
					}
					stats: pokemon_v2_pokemonstats {
						base_stat
						stat: pokemon_v2_stat {
							name
						}
					}
					types: pokemon_v2_pokemontypes {
						slot
						type: pokemon_v2_type {
							name
						}
					}
					pokemonSprites: pokemon_v2_pokemonsprites {
						sprites
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
`;
