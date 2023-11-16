import request from 'graphql-request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { graphql } from '../graphql/gql';
import { SimplePokemonArr } from '@types';

const getAllPokemonQuery = graphql(`
	query getAllPokemon {
		pokemon: pokemon_v2_pokemon(limit: 151) {
			name
			id
		}
	}
`);
export default function useAllPokemon(): UseQueryResult<
	SimplePokemonArr,
	Error
> {
	return useQuery({
		queryKey: ['pokemon'],
		queryFn: async () =>
			request('https://beta.pokeapi.co/graphql/v1beta', getAllPokemonQuery)
	});
}
