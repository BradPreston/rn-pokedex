import request from 'graphql-request';
import { UseQueryResult, useQuery } from 'react-query';

type Query = {
	key: string;
	query: string;
	variables?: {};
	config?: {};
};

export default function useGQLQuery<T>({
	key,
	query,
	variables,
	config = {}
}: Query): UseQueryResult<T, Error> {
	const endpoint = 'https://beta.pokeapi.co/graphql/v1beta';
	const fetchData = async (): Promise<T> =>
		await request(endpoint, query, variables);
	return useQuery<T, any>(key, fetchData, config);
}
