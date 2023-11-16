import { View, FlatList, Text, ListRenderItem } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import { memo, useCallback, useState } from 'react';
import { SimplePokemon } from '@types';
import { SearchBar, Container, ListItem } from '@components';
import { useAllPokemon } from '@hooks';

export default memo(function AllPokemon() {
	const queryClient = useQueryClient();
	const { data, isError, isLoading, isSuccess, error } = useAllPokemon();
	const [searchResults, setSearchResults] = useState<SimplePokemon[] | null>(
		null
	);
	const [searchPhrase, setSearchPhrase] = useState('');
	const [clicked, setClicked] = useState(false);

	function handleSearch() {
		const pkmn = data?.pokemon.filter((pkmn: SimplePokemon) =>
			pkmn.name.startsWith(searchPhrase.toLowerCase().trim())
		);
		if (pkmn) setSearchResults(pkmn);
	}

	function handleResetSearch() {
		setSearchPhrase('');
		setSearchResults(null);
	}

	const renderItem = useCallback<ListRenderItem<SimplePokemon>>(
		({ item }) => (
			<ListItem id={item.id} name={item.name} clientQuery={queryClient} />
		),
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
				<Text className='text-base my-5'>
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
						data={data.pokemon}
						renderItem={renderItem}
						keyExtractor={(item) => item.name}
					/>
				)}
			</Container>
		);
	}
});
