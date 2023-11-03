import { Link, useFocusEffect } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import { useQuery } from 'react-query';
import { party } from '@storage';
import { useRef, useCallback } from 'react';
import { Container, ListItem } from '@components';

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
			<Container>
				<View className='py-5'>
					{data.map(({ id, name }) => (
						<ListItem key={name} id={id} name={name} />
					))}
				</View>
				<View className='flex gap-5'>
					<Pressable className='bg-slate-700  rounded-md flex items-center justify-center w-full py-3'>
						<Link href='/(pokemon)/pokemon'>
							<Text className='text-white text-lg'>
								Add pokemon to your party
							</Text>
						</Link>
					</Pressable>
					<Pressable
						onPress={clearPokemonParty}
						className='bg-red-700  rounded-md flex items-center justify-center w-full py-3'>
						<Text className='text-white text-lg'>
							Remove All Pokemon From Party
						</Text>
					</Pressable>
				</View>
			</Container>
		);
	}
}
