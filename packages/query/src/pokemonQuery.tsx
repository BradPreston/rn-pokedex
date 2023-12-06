import { RequestDocument, request } from 'graphql-request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';

export function PokemonQuery<T>(
	key: string,
	query: RequestDocument,
	id?: number
): UseQueryResult<T, Error> {
	return useQuery({
		queryKey: [key],
		queryFn: async () =>
			id
				? request('https://beta.pokeapi.co/graphql/v1beta', query, { id: id })
				: request('https://beta.pokeapi.co/graphql/v1beta', query)
	});
}
