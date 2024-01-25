import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

export default function TabLayout() {
	return (
		<Tabs screenOptions={{ headerShown: false }}>
			<Tabs.Screen
				name='index'
				options={{
					title: 'Pokemon',
					tabBarLabel: ({ focused, children }) => (
						<Text className={`${focused ? 'text-cyan-700' : 'text-gray-400'}`}>
							{children}
						</Text>
					)
					// tabBarIcon: () => <Ionicons name={'list-outline'} size={20} />
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
					)

					// tabBarIcon: () => <Ionicons name={'people-outline'} size={20} />
				}}
			/>
		</Tabs>
	);
}
