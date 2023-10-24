import { createContext, useContext } from 'react';
import { Species } from '../types';

type PartyContext = {
	[key: string]: Species;
};

export const PartyContext = createContext<PartyContext>({});

export function addPokemonToParty(party: PartyContext, data: Species) {
	if (party[data.name]) return;
	if (Object.keys(party).length >= 6) return;

	party[data.name] = data;
}
