import { gql } from 'graphql-request';

export const GET_ALL_POKEMON = gql`
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

// export const GET_POKEMON_BY_ID = gql`
// 	query pokemon_details($id: Int!) {
// 		pokemon: pokemon_v2_pokemonspecies(where: { id: { _eq: $id } }) {
// 			id
// 			name
// 			is_legendary
// 			details: pokemon_v2_pokemons_aggregate(limit: 1) {
// 				nodes {
// 					height
// 					weight
// 					types: pokemon_v2_pokemontypes {
// 						type: pokemon_v2_type {
// 							name
// 						}
// 					}
// 				}
// 			}
// 			flavor_text: pokemon_v2_pokemonspeciesflavortexts(
// 				where: {
// 					pokemon_v2_language: { name: { _eq: "en" } }
// 					pokemon_v2_version: { name: { _eq: "red" } }
// 				}
// 			) {
// 				description: flavor_text
// 			}
// 		}
// 	}
// `;

// update by running pnpm codegen -> then update types

export const GET_POKEMON_BY_ID = gql`
	query pokemon_details($id: Int!) {
		evolution_chain: pokemon_v2_evolutionchain(where: { id: { _eq: $id } }) {
			evolution: pokemon_v2_pokemonspecies(order_by: { id: asc }) {
				name
				id
			}
		}
		species: pokemon_v2_pokemonspecies(limit: 1) {
			description: pokemon_v2_pokemonspeciesflavortexts(
				where: { language_id: { _eq: 9 } }
				limit: 1
			) {
				flavor_text
			}
		}
		pokemon_stat: pokemon_v2_pokemonstat(where: { pokemon_id: { _eq: $id } }) {
			stat: pokemon_v2_stat {
				name
			}
			base_stat
		}
		pokemon_type: pokemon_v2_pokemontype(where: { pokemon_id: { _eq: $id } }) {
			type: pokemon_v2_type {
				name
				id
			}
		}
		efficacies: pokemon_v2_typeefficacy(limit: 18) {
			target_type: pokemonV2TypeByTargetTypeId {
				name
				id
				type_efficacy: pokemon_v2_typeefficacies {
					damage_factor
					type: pokemonV2TypeByTargetTypeId {
						name
					}
				}
			}
		}
		details: pokemon_v2_pokemon(where: { id: { _eq: $id } }) {
			name
			id
			height
			weight
			abilities: pokemon_v2_pokemonabilities {
				ability: pokemon_v2_ability {
					name
					description: pokemon_v2_abilityflavortexts(
						where: { language_id: { _eq: 9 } }
						limit: 1
					) {
						flavor_text
					}
				}
			}
		}
	}
`;
