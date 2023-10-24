import { Link, useFocusEffect } from 'expo-router';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { party } from '../../storage';
import { useRef, useCallback } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function useRefreshOnFocus<T>(refetch: () => Promise<T>) {
	const firstTimeRef = useRef(true);

	useFocusEffect(
		useCallback(() => {
			if (firstTimeRef.current) {
				firstTimeRef.current = false;
				return;
			}

			refetch();
		}, [refetch])
	);
}

export default function Party() {
	const { data, status, refetch } = useQuery('pokemonParty', party.getAll);
	useRefreshOnFocus(refetch);

	async function clearPokemonParty() {
		await party.removeAll();
		refetch();
	}

	if (status === 'success') {
		return (
			<View>
				<Text>Your Party</Text>
				<FlatList
					data={data}
					keyExtractor={(item) => item.name}
					renderItem={({ item }) => <Text>{item.name}</Text>}
				/>
				<Link className='py-5' href='/(pokemon)/pokemon'>
					Add pokemon to your party
				</Link>
				<TouchableOpacity onPress={clearPokemonParty}>
					<Text>Remove All Pokemon From Party</Text>
				</TouchableOpacity>
			</View>
		);
	}
}
