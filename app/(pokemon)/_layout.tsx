import { Tabs } from 'expo-router';

export default function PokemonLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen name='pokemon' />
			<Tabs.Screen name='party' />
		</Tabs>
	);
}
