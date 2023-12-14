import { usePokemonPartyStore } from '../src';
import { act, renderHook } from '@testing-library/react-native';

const pokemonPartyStore = usePokemonPartyStore();
const initialState = pokemonPartyStore.getState();

beforeEach(async () => {
	await act(() => pokemonPartyStore.setState(initialState, true));
});

describe('usePartyStore', () => {
	it('[party] returns an empty array with no party', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		expect(result.current.party).toEqual([]);
	});

	it('[addToParty] has a length of one after inserting', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		await act(() =>
			result.current.addToParty({
				id: 1,
				name: 'name',
				details: {
					nodes: []
				},
				flavor_text: []
			})
		);

		expect(result.current.party).toHaveLength(1);
	});

	it('[addToParty] throws an error if adding more than six to party', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		await act(async () => {
			for (let i = 1; i <= 6; i++) {
				await result.current.addToParty({
					id: i,
					name: 'name',
					details: {
						nodes: []
					},
					flavor_text: []
				});
			}
		});

		expect(async () => {
			await result.current.addToParty({
				id: 7,
				name: 'name',
				details: {
					nodes: []
				},
				flavor_text: []
			});
		}).rejects.toThrow('party cannot contain more than six pokemon');
	});

	it('[addToParty] throws an error if pokemon is already in party', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		await act(() =>
			result.current.addToParty({
				id: 1,
				name: 'name',
				details: {
					nodes: []
				},
				flavor_text: []
			})
		);

		expect(async () => {
			await result.current.addToParty({
				id: 1,
				name: 'name',
				details: {
					nodes: []
				},
				flavor_text: []
			});
		}).rejects.toThrow('pokemon is already in party');
	});

	it('[removeFromParty] removes a pokemon from the party', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		const pokemon = {
			id: 1,
			name: 'name',
			details: {
				nodes: []
			},
			flavor_text: []
		};

		await act(() => result.current.addToParty(pokemon));

		await act(() => result.current.removeFromParty(pokemon));

		expect(result.current.party).toHaveLength(0);
	});

	it("[removeFromParty] throws an error if pokemon isn't in party", async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		const pokemon = {
			id: 1,
			name: 'name',
			details: {
				nodes: []
			},
			flavor_text: []
		};

		expect(async () => {
			await result.current.removeFromParty(pokemon);
		}).rejects.toThrow('pokemon is not in party');
	});

	it('[clearParty] clears all pokemon from the party', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		await act(async () => {
			for (let i = 1; i <= 6; i++) {
				await result.current.addToParty({
					id: i,
					name: 'name',
					details: {
						nodes: []
					},
					flavor_text: []
				});
			}
		});

		await act(async () => result.current.clearParty());

		expect(result.current.party).toHaveLength(0);
	});

	it('[clearParty] throws an error if the party is already empty', async () => {
		const { result } = renderHook(() => pokemonPartyStore());

		expect(async () => {
			await result.current.clearParty();
		}).rejects.toThrow('party is already empty');
	});
});
