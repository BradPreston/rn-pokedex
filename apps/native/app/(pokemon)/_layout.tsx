import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

export default function PokemonLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='pokemon'
				options={{
					title: 'Pokemon',
					tabBarLabel: ({ focused, children }) => (
						<Text className={`${focused ? 'text-cyan-700' : 'text-gray-400'}`}>
							{children}
						</Text>
					),
					tabBarIcon: ({ size, focused }) => (
						<Text className={`${focused ? 'text-cyan-700' : 'text-gray-400'}`}>
							<Ionicons name='list-outline' size={size} />
						</Text>
					)
				}}
			/>
			<Tabs.Screen
				name='party'
				options={{
					title: 'Party',
					tabBarLabel: ({ focused, children }) => (
						<Text className={`${focused ? 'text-cyan-700' : 'text-gray-400'}`}>
							{children}
						</Text>
					),

					tabBarIcon: ({ size, focused }) => (
						<Text className={`${focused ? 'text-cyan-700' : 'text-gray-400'}`}>
							<Ionicons name='people-outline' size={size} />
						</Text>
					)
				}}
			/>
		</Tabs>
	);
}
