export const ALL_POKEMON = `
query getAllPokemon {
	pokemon: pokemon_v2_pokemon(limit: 151) {
		name
		id
	}
}`;

export const POKEMON_BY_ID = `
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
`;
