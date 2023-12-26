import './global.css';
import { Text, View, LogBox } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { Provider } from '@repo/query';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreAllLogs();

export default function Native() {
	const [fontsLoaded, fontsError] = useFonts({
		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontsError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontsError]);

	if (!fontsLoaded || fontsError) return null;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<Provider>
				<View className='items-center justify-center w-full h-full'>
					<Text className='text-red-500 text-4xl font-bold'>Hello</Text>
				</View>
			</Provider>
		</SafeAreaProvider>
	);
}
