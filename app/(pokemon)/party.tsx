import { Link, useFocusEffect } from 'expo-router';
import { Text, View, Pressable } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { party } from '@storage';
import { useRef, useCallback, useState } from 'react';
import { Container, ListItem, AreYouSureModal } from '@components';

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
	const clientQuery = useQueryClient();
	const [showModal, setShowModal] = useState(false);
	const { data, status, refetch } = useQuery({
		queryKey: ['pokemonParty'],
		queryFn: party.getAll
	});
	useRefreshOnFocus(refetch);

	async function clearPokemonParty() {
		await party.removeAll();
		setShowModal(false);
		refetch();
	}

	if (status === 'success') {
		return (
			<Container>
				{showModal && (
					<AreYouSureModal
						showModal={showModal}
						handleCancel={() => setShowModal(false)}
						handleConfirm={clearPokemonParty}
					/>
				)}
				<View className='py-5'>
					{data.length === 0 && <Text>Your party is empty</Text>}
					{data.map(({ id, name }) => (
						<ListItem
							key={name}
							id={id}
							name={name}
							clientQuery={clientQuery}
						/>
					))}
				</View>
				<View className='flex gap-5'>
					<Pressable
						className={`${
							data.length >= 6 ? 'opacity-50' : ''
						} bg-pokemon-slate rounded-md flex items-center justify-center w-full py-3`}>
						<Link
							href='/(pokemon)/pokemon'
							disabled={data.length >= 6 ? true : false}>
							<Text className='text-pokemon-white text-lg'>
								{data.length >= 6
									? 'Your party is full'
									: 'Add pokemon to your party'}
							</Text>
						</Link>
					</Pressable>
					{data.length !== 0 && (
						<Pressable
							onPress={() => setShowModal(true)}
							className='bg-pokemon-red  rounded-md flex items-center justify-center w-full py-3'>
							<Text className='text-pokemon-white text-lg'>
								Remove All Pokemon From Party
							</Text>
						</Pressable>
					)}
				</View>
			</Container>
		);
	}
}
