import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Pokemon } from '@repo/types';

interface PokemonPartyState {
	party: Pokemon[];
	addToParty: (pkmn: Pokemon) => void;
	clearParty: () => void;
	removeFromParty: (pkmn: Pokemon) => void;
}

export default create<PokemonPartyState>()(
	persist(
		(set, get) => ({
			party: [],
			addToParty: (pkmn: Pokemon) => {
				// try {
				// error if party is full
				if (get().party.length >= 6) {
					throw new RangeError('party cannot contain more than six pokemon');
				}
				// error if pokemon is already in party
				const index = get().party.indexOf(pkmn);
				if (index > 0) throw new ReferenceError('pokemon is already in party');

				set({ party: [...get().party, pkmn] });
				// } catch (err) {
				// 	if (err instanceof RangeError) throw new RangeError(err.message);
				// 	if (err instanceof ReferenceError)
				// 		throw new ReferenceError(err.message);
				// 	throw new Error('an error ocurred');
				// }
			},
			removeFromParty: (pkmn: Pokemon) => {
				const index = get().party.indexOf(pkmn);
				if (index === -1) {
					throw new ReferenceError('pokemon is not in party');
				}
				set({ party: get().party.filter((p) => p.id !== pkmn.id) });
			},
			clearParty: () => {
				if (get().party.length === 0) {
					throw new RangeError('party is already empty');
				}
				set({ party: get().party.slice(0, get().party.length) });
			}
		}),
		{
			name: 'pokemonParty',
			storage: createJSONStorage(() => AsyncStorage)
		}
	)
);
