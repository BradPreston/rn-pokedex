import { View, FlatList, Image } from 'react-native';
import getAllPokemon from '../../graphql/getAllPokemon';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../types';
import ListItem from '../../components/ListItem';

export default function AllPokemon() {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setLoaded(false);
		getAllPokemon().then((pkmn) => setPokemon(pkmn));
		pokemon.forEach((pkmn) =>
			Image.prefetch(
				`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmn.id}.png`
			)
		);
		setLoaded(true);
	}, []);

	return (
		<View>
			{loaded && (
				<FlatList
					showsVerticalScrollIndicator={false}
					data={pokemon}
					renderItem={({ item }) => <ListItem id={item.id} name={item.name} />}
					keyExtractor={(item) => item.name}
				/>
			)}
		</View>
	);
}
