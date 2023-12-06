import { renderHook, waitFor } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { PokemonQuery } from '../src/pokemonQuery';
import { PokemonArr } from '@repo/types';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { GET_ALL_POKEMON, GET_POKEMON_BY_ID } from '../queries';

describe('PokemonQuery', () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				gcTime: 0,
				retry: false
			}
		}
	});

	const asyncStoragePersister = createAsyncStoragePersister({
		storage: null
	});

	const wrapper = ({ children }: PropsWithChildren) => (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister: asyncStoragePersister }}>
			{children}
		</PersistQueryClientProvider>
	);

	afterEach(() => queryClient.clear());

	it('[allPokemon] contains bulbasaur', async () => {
		const { result } = renderHook(
			() => PokemonQuery<PokemonArr>('allPokemon', GET_ALL_POKEMON),
			{ wrapper }
		);

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
			expect(result.current.data?.pokemon[0].name).toBe('bulbasaur');
		});
	});

	it('[allPokemon] has a length of 151', async () => {
		const { result } = renderHook(
			() => PokemonQuery<PokemonArr>('allPokemon', GET_ALL_POKEMON),
			{ wrapper }
		);

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
			expect(result.current.data?.pokemon.length).toBe(151);
		});
	});

	it('[pokemonById] gets charmander by id 4', async () => {
		const { result } = renderHook(
			() => PokemonQuery<PokemonArr>('pokemonById', GET_POKEMON_BY_ID, 4),
			{ wrapper }
		);

		await waitFor(() => {
			expect(result.current.isSuccess).toBe(true);
			expect(result.current.data?.pokemon[0].name).toBe('charmander');
		});
	});

	it('[pokemonById] throws an error with a bad id', async () => {
		const { result } = renderHook(
			() => PokemonQuery<PokemonArr>('pokemonById', GET_POKEMON_BY_ID, 0),
			{ wrapper }
		);

		await waitFor(() => {
			expect(result.current.isError).toBe(true);
			expect(result.current.error?.message).toContain(
				'expecting a value for non-nullable variable'
			);
		});
	});
});
