import { View, FlatList } from 'react-native';
import { Link } from 'expo-router';
import getAllPokemon from '../../graphql/getAllPokemon';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../types';

export default function AllPokemon() {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	console.log(pokemon ?? pokemon);

	useEffect(() => {
		getAllPokemon().then((pkmn) => setPokemon(pkmn));
	}, []);

	return (
		<View>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={pokemon}
				renderItem={({ item }) => (
					<Link href={`/pokemon/${item.id}`}>{item.name}</Link>
				)}
				keyExtractor={(item) => item.name}
			/>
		</View>
	);
}
