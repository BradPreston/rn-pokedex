import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function AllPokemon() {
	return (
		<View>
			<Link href='/pokemon/1'>Pokemon #1</Link>
			<Link href='/pokemon/2'>Pokemon #2</Link>
			<Link href='/pokemon/3'>Pokemon #3</Link>
		</View>
	);
}
