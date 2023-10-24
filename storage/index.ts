import AsyncStorage from '@react-native-async-storage/async-storage';
import { Species } from '../types';

type Party = {
	[key: string]: Species;
};

export async function setParty(value: Species) {
	try {
		const party = await getParty();
		if (party[value.name])
			throw new ReferenceError(
				`A pokemon with the name \"${value.name}\" already exists`
			);
		if ((await allowOnlySixInParty()) === false) return;
		party[value.name] = value;

		await AsyncStorage.setItem('party', JSON.stringify(party));
	} catch (err) {
		console.error(err);
	}
}

export async function getOnePartyPokemon(
	key: string
): Promise<Species | undefined> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party: Party = JSON.parse(partyJSON);
		if (!party[key])
			throw new ReferenceError(`No storage item with key: \"${key}\"`);
		return party[key];
	} catch (err) {
		console.error(err);
	}
}

export async function getParty(): Promise<Party> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party: Party = JSON.parse(partyJSON);
		return party;
	} catch (err) {
		console.error(err);
		return {};
	}
}

export async function getPokemonFromParty(): Promise<Species[]> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party: Party = JSON.parse(partyJSON);
		const pokemon = Object.entries(party).map(([_, pkmn]) => pkmn);
		return pokemon;
	} catch (err) {
		console.error(err);
		return [];
	}
}

export async function removePokemonFromParty(key: string): Promise<Party> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party: Party = JSON.parse(partyJSON);
		if (!party[key])
			throw new ReferenceError(`No storage item with key: \"${key}\"`);
		console.log(`Removed ${key} from party`);
		delete party[key];
		return party;
	} catch (err) {
		console.error(err);
		return {};
	}
}

export async function removeAllPokemonFromParty(): Promise<Party> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party: Party = {};
		AsyncStorage.setItem('party', JSON.stringify(party));
		console.log('Removed all pokemon from party');
		return party;
	} catch (err) {
		console.log(err);
		return {};
	}
}

async function allowOnlySixInParty(): Promise<boolean> {
	try {
		const partyJSON = await AsyncStorage.getItem('party');
		if (!partyJSON) throw new ReferenceError('No storage item called "party"');
		const party = JSON.parse(partyJSON);
		const count = Object.keys(party).length;
		if (count >= 6) {
			throw new RangeError('You already have six pokemon in your party');
		}
		return true;
	} catch (err) {
		console.error(err);
		return false;
	}
}
