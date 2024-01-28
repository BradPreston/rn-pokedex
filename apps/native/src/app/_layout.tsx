import '../../global.css';
import { LogBox, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Provider } from '@repo/query';
import { SplashScreen, Stack, Slot } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const [fontsLoaded] = useFonts({
		...Ionicons.font,
    ...MaterialCommunityIcons.font,
    ...FontAwesome.font,
		Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('../../assets/fonts/Roboto-Black.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) await SplashScreen.hideAsync();
	}, [fontsLoaded]);

	if (!fontsLoaded) return;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Provider>
				<Stack
					screenOptions={{
						title: 'Pokemon'
					}}>
					<Stack.Screen name='(tabs)' />
				</Stack>
			</Provider>
		</SafeAreaProvider>
	);
}