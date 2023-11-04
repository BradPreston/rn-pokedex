import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';
import { useState } from 'react';

export default function PokemonLayout() {
	const [active, setActive] = useState();
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='pokemon'
				options={{
					title: 'Pokemon',
					tabBarLabel: ({ focused, children }) => (
						<Text
							className={`${
								focused ? 'text-pokemon-blue' : 'text-pokemon-grey'
							}`}>
							{children}
						</Text>
					),
					tabBarIcon: ({ size, focused }) => (
						<Text
							className={`${
								focused ? 'text-pokemon-blue' : 'text-pokemon-grey'
							}`}>
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
						<Text
							className={`${
								focused ? 'text-pokemon-blue' : 'text-pokemon-grey'
							}`}>
							{children}
						</Text>
					),

					tabBarIcon: ({ size, focused }) => (
						<Text
							className={`${
								focused ? 'text-pokemon-blue' : 'text-pokemon-grey'
							}`}>
							<Ionicons name='people-outline' size={size} />
						</Text>
					)
				}}
			/>
		</Tabs>
	);
}
