import '../global.css';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootSiblingParent } from 'react-native-root-siblings';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function Layout() {
	const [fontsLoaded, fontsError] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf')
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 0,
				refetchOnWindowFocus: true
			}
		}
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontsError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontsError]);

	if (!fontsLoaded || fontsError) return null;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<QueryClientProvider client={queryClient}>
				<RootSiblingParent>
					<Stack
						screenOptions={{
							title: 'Pokemon'
						}}>
						<Stack.Screen name='(pokemon)' />
					</Stack>
				</RootSiblingParent>
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}
