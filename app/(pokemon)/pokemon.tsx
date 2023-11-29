import { View, FlatList, Text, ListRenderItem } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import { Pokemon } from '@types';
import { SearchBar, Container, ListItem, Heading } from '@components';
import { useAllPokemon } from '@hooks';

export default memo(function AllPokemon() {
	const queryClient = useQueryClient();
	const { data, isError, isLoading, isSuccess } = useAllPokemon();
	const [searchResults, setSearchResults] = useState<Pokemon[] | null>(null);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);

	function handleSearch() {
		const pkmn = data?.pokemon.filter((pkmn: Pokemon) =>
			pkmn.name.startsWith(searchPhrase.toLowerCase().trim())
		);
		if (pkmn) setSearchResults(pkmn);
	}

	function handleResetSearch() {
		setSearchPhrase('');
		setSearchResults(null);
	}

	const renderItem = useCallback<ListRenderItem<Pokemon>>(
		({ item }) => <ListItem pokemon={item} clientQuery={queryClient} />,
		[]
	);

	if (isLoading) {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (isError) {
		return (
			<View>
				<Text>An error ocurred</Text>
			</View>
		);
	}

	if (isSuccess) {
		return (
			<Container>
				<View className='h-full'>
					<View className='h-1/4'>
						<Heading title='Pokédex' color='dark' styles='mt-5' />
						<Text className='text-base my-3 text-gray-700'>
							Select a Pokemon from the list below to add to your party (
							<Text className='italic'>limit 6 per party</Text>)
						</Text>
						<SearchBar
							clicked={clicked}
							setCLicked={setClicked}
							searchPhrase={searchPhrase}
							setSearchPhrase={setSearchPhrase}
							handleSearch={handleSearch}
							handleResetSearch={handleResetSearch}
						/>
					</View>
					<View className='h-3/4 pt-5'>
						{searchResults ? (
							<FlatList
								showsVerticalScrollIndicator={false}
								data={searchResults}
								renderItem={renderItem}
								keyExtractor={(item) => item.name}
							/>
						) : (
							<FlatList
								showsVerticalScrollIndicator={false}
								data={data.pokemon}
								renderItem={renderItem}
								keyExtractor={(item) => item.name}
							/>
						)}
					</View>
				</View>
			</Container>
		);
	}
});
