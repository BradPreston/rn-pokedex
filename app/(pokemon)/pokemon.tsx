import { View, FlatList, Text, ListRenderItem } from 'react-native';
import getAllPokemon from '../../graphql/getAllPokemon';
import ListItem from '../../components/ListItem';
import { useQuery } from 'react-query';
import { memo, useCallback, useState } from 'react';
import { Pokemon } from '../../types';
import SearchBar from '../../components/SearchBar';

export default memo(function AllPokemon() {
	const { data, status } = useQuery('allPokemon', getAllPokemon);
	const [searchResults, setSearchResults] = useState<Pokemon[] | null>(null);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);

	function handleSearch() {
		const pkmn = data?.filter((pkmn) =>
			pkmn.name.startsWith(searchPhrase.toLowerCase().trim())
		);
		if (pkmn) setSearchResults(pkmn);
	}

	function handleResetSearch() {
		setSearchPhrase('');
		setSearchResults(null);
	}

	const renderItem = useCallback<ListRenderItem<Pokemon>>(
		({ item }) => <ListItem id={item.id} name={item.name} />,
		[]
	);

	if (status === 'loading') {
		return (
			<View>
				<Text>Loading...</Text>
			</View>
		);
	}

	if (status === 'error') {
		return (
			<View>
				<Text>An error ocurred</Text>
			</View>
		);
	}

	if (status === 'success') {
		return (
			<View className='w-11/12'>
				<Text className='self-center text-base my-5'>
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
						data={data}
						renderItem={renderItem}
						keyExtractor={(item) => item.name}
					/>
				)}
			</View>
		);
	}
});
