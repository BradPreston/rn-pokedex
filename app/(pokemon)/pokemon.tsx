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

	async function handleSearch() {
		if (data) {
			const pkmn = data.filter((pkmn) =>
				pkmn.name.startsWith(searchPhrase.toLowerCase())
			);
			setSearchResults(pkmn);
		}
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
			<View>
				<SearchBar
					clicked={clicked}
					setCLicked={setClicked}
					searchPhrase={searchPhrase}
					setSearchPhrase={setSearchPhrase}
					handleSearch={handleSearch}
				/>
				<FlatList
					showsVerticalScrollIndicator={false}
					data={searchResults ? searchResults : data}
					renderItem={renderItem}
					keyExtractor={(item) => item.name}
				/>
			</View>
		);
	}
});
