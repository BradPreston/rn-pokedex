import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function Party() {
	return (
		<SafeAreaProvider>
			<View>
				<Text>Your Party</Text>
				<Link href='/(pokemon)/pokemon'>Add pokemon to your party</Link>
			</View>
		</SafeAreaProvider>
	);
}
