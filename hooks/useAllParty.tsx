import { party } from '@storage';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { SimplePokemon } from '@types';

export default function useAllParty(): UseQueryResult<SimplePokemon[], Error> {
	return useQuery({
		queryKey: ['pokemonParty'],
		queryFn: async () => await party.getAll()
	});
}
