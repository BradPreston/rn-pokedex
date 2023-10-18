import { View, Text } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';

export default function PokemonById() {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Stack.Screen options={{ headerTitle: `Pokemon #${id}` }} />
			<Text>Pokemon #{id}</Text>
		</View>
	);
}
