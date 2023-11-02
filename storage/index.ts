import { SimplePokemon } from '@types';
import * as SecureStore from 'expo-secure-store';

type Party = {
	[key: string]: SimplePokemon;
};

function capitalFirstLetter(value: string): string {
	return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
}

function Party() {
	async function insert(value: SimplePokemon): Promise<string> {
		try {
			let partyJSON = await SecureStore.getItemAsync('party');
			if (!partyJSON) partyJSON = JSON.stringify({});
			const party: Party = JSON.parse(partyJSON);
			const partyTotal = Object.keys(party).length;
			if (partyTotal >= 6)
				throw new RangeError('You already have six pokemon in your party');
			if (party[value.name]) {
				throw new ReferenceError(
					`\"${capitalFirstLetter(value.name)}}\" is already in your party`
				);
			}
			party[value.name] = value;
			await SecureStore.setItemAsync('party', JSON.stringify(party));
			return `${capitalFirstLetter(value.name)} has been added to your party`;
		} catch (err) {
			if (err instanceof ReferenceError) throw new ReferenceError(err.message);
			if (err instanceof RangeError) throw new RangeError(err.message);
			throw new Error('An error ocurred');
		}
	}

	async function getAll(): Promise<SimplePokemon[]> {
		try {
			let partyJSON = await SecureStore.getItemAsync('party');
			if (!partyJSON) throw new ReferenceError('No party was found');
			const party: Party = JSON.parse(partyJSON);
			return Object.entries(party).map(([_, pkmn]) => pkmn);
		} catch (err) {
			if (err instanceof ReferenceError) throw new ReferenceError(err.message);
			throw new Error('Something went wrong');
		}
	}

	async function getOne(key: string): Promise<SimplePokemon> {
		try {
			const partyJSON = await SecureStore.getItemAsync('party');
			if (!partyJSON) throw new ReferenceError('No party was found');
			const party = JSON.parse(partyJSON);
			if (!party[key]) {
				throw new ReferenceError(
					`No pokemon with name \"${capitalFirstLetter(
						key
					)}\" was found in your party`
				);
			}
			return party[key];
		} catch (err) {
			if (err instanceof ReferenceError) throw new ReferenceError(err.message);
			throw new Error('Something went wrong');
		}
	}

	async function removeOne(key: string): Promise<string> {
		try {
			const partyJSON = await SecureStore.getItemAsync('party');
			if (!partyJSON) throw new ReferenceError('No party was found');
			const party = JSON.parse(partyJSON);
			if (!party[key]) {
				throw new ReferenceError(
					`No pokemon with name \"${capitalFirstLetter(
						key
					)}\" was found in your party`
				);
			}
			delete party[key];
			await SecureStore.setItemAsync('party', JSON.stringify(party));
			return `${capitalFirstLetter(key)} was removed from your party`;
		} catch (err) {
			if (err instanceof ReferenceError) throw new Error(err.message);
			throw new Error('Something went wrong');
		}
	}

	async function removeAll(): Promise<void> {
		try {
			await SecureStore.setItemAsync('party', JSON.stringify({}));
		} catch (err) {
			if (err instanceof Error) throw new Error(err.message);
			throw new Error('Something went wrong');
		}
	}

	return {
		insert,
		getOne,
		getAll,
		removeOne,
		removeAll
	};
}

export const party = Party();
