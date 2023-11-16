import { renderHook, waitFor } from '@testing-library/react-native';
import { usePokemonById } from '../../hooks';
import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

describe('usePokemonById hook', () => {
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

	it('returns bulbasaur by id 1', async () => {
		const { result } = renderHook(() => usePokemonById(1), { wrapper });
		await waitFor(() =>
			expect(result.current.data?.species[0].name).toEqual('bulbasaur')
		);
	});

	it('returns an empty array with id less than 1', async () => {
		const { result } = renderHook(() => usePokemonById(0), { wrapper });
		await waitFor(() => expect(result.current.data?.species).toEqual([]));
	});
});
