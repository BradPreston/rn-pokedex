import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Pokemon } from '@repo/types';

type State = {
	party: Pokemon[];
};

type Actions = {
	addToParty: (pkmn: Pokemon) => Promise<void>;
	clearParty: () => Promise<void>;
	removeFromParty: (pkmn: Pokemon) => Promise<void>;
};

const initialState: State = {
	party: []
};

export default function usePokemonPartyStore() {
	return create<State & Actions>()(
		persist<State & Actions, [], [], State & Actions>(
			(set, get) => ({
				...initialState,
				party: [],
				addToParty: async (pkmn: Pokemon) => {
					try {
						await add({ set, get, pkmn });
					} catch (err) {
						if (err instanceof RangeError) throw RangeError(err.message);
						if (err instanceof ReferenceError)
							throw ReferenceError(err.message);
						throw Error('an error ocurred');
					}
				},
				removeFromParty: async (pkmn: Pokemon) => {
					const index = get().party.indexOf(pkmn);
					if (index === -1) {
						throw new ReferenceError('pokemon is not in party');
					}
					set({ party: get().party.filter((p) => p.id !== pkmn.id) });
				},
				clearParty: async () => {
					if (get().party.length === 0) {
						throw new RangeError('party is already empty');
					}
					set(initialState, true);
				}
			}),
			{
				name: 'pokemonParty',
				storage: createJSONStorage(() => AsyncStorage)
			}
		)
	);
}

interface PokemonPersistState {
	set: (
		partial:
			| (State & Actions)
			| Partial<State & Actions>
			| ((
					state: State & Actions
			  ) => (State & Actions) | Partial<State & Actions>),
		replace?: boolean | undefined
	) => void;
	get: () => State & Actions;
	pkmn: Pokemon;
}

async function add({ set, get, pkmn }: PokemonPersistState) {
	if (get().party.length >= 6) {
		throw new RangeError('party cannot contain more than six pokemon');
	}
	// error if pokemon is already in party
	const inParty = get().party.some((p) => p.id === pkmn.id);
	if (inParty) throw new ReferenceError('pokemon is already in party');

	set({ party: [...get().party, pkmn] });
}
