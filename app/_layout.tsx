import { SplashScreen, Stack, Tabs } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback } from 'react';

export default function Layout() {
	const [fontsLoaded, fontsError] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontsError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontsError]);

	if (!fontsLoaded || fontsError) return null;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Stack
				screenOptions={{
					title: 'Pokemon'
				}}>
				<Stack.Screen name='(pokemon)' />
			</Stack>
		</SafeAreaProvider>
	);
}
