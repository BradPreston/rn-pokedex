import './global.css';
import { Text, View, LogBox } from 'react-native';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { Provider } from '@repo/query';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function Native() {
	const [appIsReady, setAppIsReady] = useState(false);

	useEffect(() => {
		async function prepare() {
			try {
				await Font.loadAsync('./assets/fonts/Roboto-Regular.ttf');
				await Font.loadAsync('./assets/fonts/Roboto-Black.ttf');

				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (err) {
				console.warn(err);
			} finally {
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) await SplashScreen.hideAsync();
	}, [appIsReady]);

	if (!appIsReady) return;

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
