import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function Party() {
	return (
		<SafeAreaProvider>
			<View>
				<Text>Your Party</Text>
			</View>
		</SafeAreaProvider>
	);
}
