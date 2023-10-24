import { Species } from '../types';
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Party = {
	[key: string]: Species;
};

function Party() {
	const storage = new Storage({
		size: 6,
		storageBackend: AsyncStorage,
		defaultExpires: null,
		enableCache: true
	});

	async function insert(value: Species) {
		try {
			const party = (await storage.load<Party>({ key: 'party' })) || {};
			confirmOnlySixInParty();
			if (party[value.name]) {
				throw new ReferenceError(
					`A Pokemon with the name \"${value.name}\" is already in your party`
				);
			}
			party[value.name] = value;
			await storage.save({ key: 'party', data: party });
		} catch (err) {
			console.error(err);
		}
	}

	async function getAll() {
		try {
			const party = await storage.load<Party>({ key: 'party' });
			return Object.entries(party).map(([_, pkmn]) => pkmn);
		} catch (err) {
			console.error(err);
		}
	}

	async function getOne(key: string) {
		try {
			const party = await storage.load<Party>({ key: 'party' });
			if (!party[key]) {
				throw new ReferenceError(
					`No pokemon with name \"${key}\" was found in your party`
				);
			}
			return party[key];
		} catch (err) {
			console.error(err);
		}
	}

	async function removeOne(key: string) {
		try {
			const party = await storage.load<Party>({ key: 'party' });
			if (!party[key]) {
				throw new ReferenceError(
					`No pokemon with name \"${key}\" was found in your party`
				);
			}
			delete party[key];
			await storage.save({ key: 'party', data: party });
		} catch (err) {
			console.error(err);
		}
	}

	async function removeAll() {
		await storage.save({ key: 'party', data: {} });
	}

	async function confirmOnlySixInParty() {
		try {
			const party = await storage.load<Party>({ key: 'party' });
			const count = Object.keys(party).length;
			if (count >= 6)
				throw new RangeError('You already have six pokemon in your party');
		} catch (err) {
			console.error(err);
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
