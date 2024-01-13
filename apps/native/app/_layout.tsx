import '../global.css';
import { LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Provider } from '@repo/query';
import { SplashScreen, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function Native() {
	const [fontsLoaded] = useFonts({
		Roboto: require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf')
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
					<Stack.Screen name='(pokemon)' />
				</Stack>
			</Provider>
		</SafeAreaProvider>
	);
}
