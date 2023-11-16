import { renderHook, waitFor } from '@testing-library/react-native';
import { useAllPokemon } from '../../hooks';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('useAllPokemon hook', () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false
			}
		}
	});

	const wrapper = ({ children }: PropsWithChildren) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	);

	afterEach(() => {
		queryClient.clear();
	});

	it('contains bulbasaur', async () => {
		const { result } = renderHook(() => useAllPokemon(), { wrapper });
		await waitFor(() =>
			expect(result.current.data?.pokemon).toContainEqual({
				id: 1,
				name: 'bulbasaur'
			})
		);
	});

	it('has a length of 151', async () => {
		const { result } = renderHook(() => useAllPokemon(), { wrapper });
		await waitFor(() => expect(result.current.data?.pokemon).toHaveLength(151));
	});
});
