import { renderHook, waitFor } from '@testing-library/react-native';
import { useGQLQuery } from '@hooks';
import { ALL_POKEMON, POKEMON_BY_ID } from '@queries';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SimplePokemon, Species } from '@types';

const queryClient = new QueryClient();
const wrapper = ({ children }: PropsWithChildren) => (
	<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

type TestSimplePokemon = {
	pokemon: SimplePokemon[];
};

type TestSpecies = {
	species: Species[];
};

describe('useGQLQuery hook', () => {
	afterEach(() => {
		queryClient.clear()
	})
	it('[allPokemon] returns all Pokemon successfully', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSimplePokemon>({
					key: 'allPokemon',
					query: ALL_POKEMON
				}),
			{ wrapper }
		);

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
	});

	it('[allPokemon] contains bulbasaur in all Pokemon', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSimplePokemon>({
					key: 'allPokemon',
					query: ALL_POKEMON
				}),
			{ wrapper }
		);

		await waitFor(() =>
			expect(result.current.data?.pokemon).toContainEqual({
				name: 'bulbasaur',
				id: 1
			})
		);
	});

	it('[allPokemon] has a length of 151 when fetching all', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSimplePokemon>({
					key: 'allPokemon',
					query: ALL_POKEMON
				}),
			{ wrapper }
		);

		await waitFor(() => expect(result.current.data?.pokemon).toHaveLength(151));
	});

	it('[pokemonById] returns one Pokemon successfully', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSpecies>({
					key: 'pokemonById',
					query: POKEMON_BY_ID,
					variables: { id: 1 }
				}),
			{ wrapper }
		);

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
	});

	it('[pokemonById] returns bulbasaur by id 1', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSpecies>({
					key: 'pokemonById',
					query: POKEMON_BY_ID,
					variables: { id: 1 }
				}),
			{ wrapper }
		);

		await waitFor(() =>
			expect(result.current.data?.species[0].name).toEqual('bulbasaur')
		);
	});
	it('[pokemonById] returns an empty array with id below 1', async () => {
		const { result } = renderHook(
			() =>
				useGQLQuery<TestSpecies>({
					key: 'pokemonById',
					query: POKEMON_BY_ID,
					variables: { id: 0 }
				}),
			{ wrapper }
		);

		await waitFor(() => expect(result.current.data?.species.length).toBe(0));
	});
});
