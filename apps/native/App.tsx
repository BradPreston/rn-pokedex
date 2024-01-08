import './global.css';
import { View, LogBox } from 'react-native';
import * as Font from 'expo-font';
import { useCallback, useEffect, useState } from 'react';
import { PokemonQuery, GET_POKEMON_BY_ID, GET_ALL_POKEMON } from '@repo/query';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Paragraph, Heading, Card } from '@repo/ui';
import { PokemonArr } from '@repo/types';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function Native() {
	const [appIsReady, setAppIsReady] = useState(false);

	const { data } = PokemonQuery<PokemonArr>(
		'pokemonById',
		GET_POKEMON_BY_ID,
		1
	);

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
	if (!data) return;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<View className='items-center justify-center w-full h-full'>
				<Heading text='heading 1' type='H1' />
				<Heading text='heading 2' type='H2' />
				<Heading text='heading 3' type='H3' />
				<Heading text='heading 4' type='H4' />
				<Heading text='heading 5' type='H5' />
				<Heading text='heading 6' type='H6' />
				<Paragraph text='hello there' />

				<Card
					pokemon={data.pokemon[0]}
					image={require('./assets/favicon.png')}
				/>
			</View>
		</SafeAreaProvider>
	);
}
