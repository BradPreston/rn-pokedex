import { gql } from '@apollo/client';
import client from './client';
import { Pokemon } from '../types';

export default async function getAllPokemon(): Promise<Pokemon[]> {
	try {
		const res = await client.query({
			query: gql`
				query MyQuery {
					pokemon_v2_pokemon(limit: 151) {
						name
						id
					}
				}
			`
		});

		return res.data.pokemon_v2_pokemon;
	} catch (err) {
		console.log('gql error: ', err);
		throw new Error('Something went wrong');
	}
}
