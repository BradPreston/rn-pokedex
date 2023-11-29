import { Link, useFocusEffect } from 'expo-router';
import { Text, View, Pressable, FlatList, ListRenderItem } from 'react-native';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { party } from '@storage';
import { useRef, useCallback, useState } from 'react';
import { Container, ListItem, AreYouSureModal, Heading } from '@components';
import { Pokemon } from '@types';

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
	const [showModal, setShowModal] = useState(false);
	const { data, status, refetch } = useQuery({
		queryKey: ['pokemonParty'],
		queryFn: party.getAll
	});
	useRefreshOnFocus(refetch);

	const queryClient = useQueryClient();

	async function clearPokemonParty() {
		await party.removeAll();
		setShowModal(false);
		refetch();
	}

	const renderItem = useCallback<ListRenderItem<Pokemon>>(
		({ item }) => <ListItem pokemon={item} clientQuery={queryClient} />,
		[]
	);

	if (status === 'success') {
		return (
			<Container>
				<View className='flex-col relative h-full'>
					<View className='h-1/5'>
						<Heading title='Pokémon Party' color='dark' styles='mt-5' />
						<Text className='text-base mt-3 text-gray-700'>
							These are the Pokémon you've chosen to join you on your journey.
							You may select up to six Pokémon. Choose carefully!
						</Text>
					</View>
					{showModal && (
						<AreYouSureModal
							showModal={showModal}
							handleCancel={() => setShowModal(false)}
							handleConfirm={clearPokemonParty}
						/>
					)}
					<View className='pb-5 h-3/5'>
						{data.length === 0 ? (
							<Text className='text-gray-700 font-bold top-10'>
								Your party is empty
							</Text>
						) : (
							<FlatList
								showsVerticalScrollIndicator={false}
								data={data}
								renderItem={renderItem}
								keyExtractor={(item) => item.name}
							/>
						)}
					</View>
					<View className='gap-5 absolute bottom-0 w-full h-1/5'>
						<Pressable
							className={`${
								data.length >= 6 ? 'opacity-50' : ''
							} bg-slate-700 rounded-md items-center justify-center w-full py-3`}>
							<Link
								href='/(pokemon)/pokemon'
								disabled={data.length >= 6 ? true : false}>
								<Text className='text-white text-lg'>
									{data.length >= 6
										? 'Your party is full'
										: 'Add pokemon to your party'}
								</Text>
							</Link>
						</Pressable>
						{data.length !== 0 && (
							<Pressable
								onPress={() => setShowModal(true)}
								className='bg-red-700  rounded-md flex items-center justify-center w-full py-3'>
								<Text className='text-white text-lg'>
									Remove All Pokemon From Party
								</Text>
							</Pressable>
						)}
					</View>
				</View>
			</Container>
		);
	}
}
