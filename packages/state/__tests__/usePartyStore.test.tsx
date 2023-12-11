import { PokemonStore } from '../src';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import React from 'react';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { act, renderHook, waitFor } from '@testing-library/react-native';
import { PropsWithChildren } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { Pokemon } from '@repo/types';

describe('usePartyStore', () => {
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

	afterEach(() => {
		queryClient.clear();
		queryClient.resetQueries();
	});

	it('returns an empty array with no party', async () => {
		const { result } = renderHook(() => PokemonStore(), {
			wrapper
		});

		const data = renderHook(() => result.current, { wrapper });

		await waitFor(() => {
			expect(data.result.current.party).toEqual([]);
		});
	});

	it('has a length of one after inserting', async () => {
		const pkmn: Pokemon = {
			id: 1,
			name: 'name',
			details: {
				nodes: []
			},
			flavor_text: []
		};

		const { result } = renderHook(() => PokemonStore(), {
			wrapper
		});

		act(() => result.current.addToParty(pkmn));

		await waitFor(() => {
			expect(result.current.party).toHaveLength(1);
		});
	});

	it('throws an error if adding more than six to party', () => {
		const { result } = renderHook(() => PokemonStore(), {
			wrapper
		});

		act(() => {
			for (let i = 1; i <= 6; i++) {
				result.current.addToParty({
					id: i,
					name: 'name',
					details: {
						nodes: []
					},
					flavor_text: []
				});
			}
		});

		const pkmn = {
			id: 9,
			name: 'name',
			details: {
				nodes: []
			},
			flavor_text: []
		};

		waitFor(() => {
			// party cannot contain more than six pokemon.
			expect(() => {
				result.current.addToParty(pkmn);
			}).rejects.toThrow();
		});
	});
});
