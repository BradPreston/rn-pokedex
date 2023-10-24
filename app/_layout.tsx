import '../global.css';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback, useContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PartyContext } from '../components/context';

export default function Layout() {
	const [fontsLoaded, fontsError] = useFonts({
		'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('../assets/fonts/Roboto-Black.ttf')
	});

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				cacheTime: 0,
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

	const party = useContext(PartyContext);
	if (!fontsLoaded || fontsError) return null;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<QueryClientProvider client={queryClient}>
				<PartyContext.Provider value={party}>
					<Stack
						screenOptions={{
							title: 'Pokemon'
						}}>
						<Stack.Screen name='(pokemon)' />
					</Stack>
				</PartyContext.Provider>
			</QueryClientProvider>
		</SafeAreaProvider>
	);
}
