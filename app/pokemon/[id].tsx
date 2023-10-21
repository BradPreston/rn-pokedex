// [id].tsx
import { View, Text, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import getPokemonById from '../../graphql/getPokemonById';
import { Species } from '../../types';
import { useState, useEffect } from 'react';

const styles = StyleSheet.create({
	title: {
		fontSize: 20
	},
	image: {
		width: 350,
		height: 350
	}
});

export default function PokemonById() {
	const [pokemon, setPokemon] = useState<Species | null>(null);
	const [loading, setLoading] = useState(false);
	const { id } = useLocalSearchParams<{ id: string }>();

	useEffect(() => {
		if (id) {
			setLoading(true);
			const intId = parseInt(id);
			getPokemonById(intId).then((species) => setPokemon(species[0]));
			Image.prefetch(
				`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
			);
			setLoading(false);
		}
	}, [id]);

	return (
		<View>
			{loading ?? <Text>Loading...</Text>}
			{pokemon && (
				<>
					<Image
						style={styles.image}
						source={{
							uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
						}}
					/>
					<Text style={styles.title}>{pokemon.name}</Text>
					<Text>{pokemon.flavorText[0].flavor_text}</Text>
				</>
			)}
		</View>
	);
}
