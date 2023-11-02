import { gql } from '@apollo/client';
import client from './client';
import { Pokemon } from '@types';

export default async function getAllPokemon(): Promise<Pokemon[]> {
	try {
		const { data } = await client.query({
			query: gql`
				query getAllPokemon {
					pokemon: pokemon_v2_pokemon(limit: 151) {
						name
						id
					}
				}
			`
		});

		return data.pokemon;
	} catch (err) {
		console.log('gql error: ', err);
		throw new Error('Something went wrong');
	}
}
