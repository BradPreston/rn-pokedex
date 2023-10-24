import {
	View,
	Text,
	Image,
	StyleSheet,
	Pressable,
	GestureResponderEvent
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import getPokemonById from '../../graphql/getPokemonById';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useContext } from 'react';
import { PartyContext } from '../../components/context';
import { setParty } from '../../storage';

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
	// let party = useContext(PartyContext);
	// const queryClient = useQueryClient();
	const { id } = useLocalSearchParams<{ id: string }>();
	const mutation = useMutation(setParty);

	if (!id) return;
	const numId = parseInt(id);
	const { data, isLoading, isError, isSuccess } = useQuery('pokemonById', () =>
		getPokemonById(numId)
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
		const pokemon = data[0];

		return (
			<View>
				<Image
					style={styles.image}
					source={{
						uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
					}}
				/>
				<Text style={styles.title}>{pokemon.name}</Text>
				<Text>{pokemon.flavorText[0].flavor_text}</Text>
				<Pressable
					className='bg-blue-800'
					onPress={() => mutation.mutate(pokemon)}>
					<Text className='text-white text-lg'>Add to Party</Text>
				</Pressable>
			</View>
		);
	}
}
