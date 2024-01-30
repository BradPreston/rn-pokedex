import { gql } from 'graphql-request';

export const GET_ALL_POKEMON = gql`
	query get_all_pokemon_details {
		pokemon: pokemon_v2_pokemon(where: { id: { _lte: 151 } }) {
			name
			id
			types: pokemon_v2_pokemontypes {
				type: pokemon_v2_type {
					name
				}
			}
		}
	}
`;

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
