// import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
// import { useFonts } from 'expo-font';
// import { useCallback } from 'react';
// import * as SplashScreen from 'expo-splash-screen';
// import { Tabs } from 'expo-router/tabs';
// import DefaultIndex from './app/index';
// import { Text } from 'react-native';

// SplashScreen.preventAutoHideAsync();

// export default function App() {
// 	const [fontsLoaded, fontsError] = useFonts({
// 		'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
// 		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
// 	});

// 	const onLayoutRootView = useCallback(async () => {
// 		if (fontsLoaded || fontsError) {
// 			await SplashScreen.hideAsync();
// 		}
// 	}, [fontsLoaded, fontsError]);

// 	if (!fontsLoaded || fontsError) return null;

// 	return (
// 		<SafeAreaProvider onLayout={onLayoutRootView}>
// 			<SafeAreaView>
// 				<DefaultIndex />
// 			</SafeAreaView>
// 		</SafeAreaProvider>
// 	);
// }

// const styles = StyleSheet.create({
// 	safeArea: {
// 		backgroundColor: theme.background,
// 		color: theme.text
// 	}
// });
