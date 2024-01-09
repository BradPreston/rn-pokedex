import './global.css';
import { View, LogBox, FlatList, ListRenderItem } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import { PokemonQuery, GET_ALL_POKEMON } from '@repo/query';
import { SplashScreen } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Paragraph, Heading, Card } from '@repo/ui';
import { Pokemon, PokemonArr } from '@repo/types';

LogBox.ignoreAllLogs();
SplashScreen.preventAutoHideAsync();

export default function Native() {
	const { data } = PokemonQuery<PokemonArr>('allPokemon', GET_ALL_POKEMON);

	const [fontsLoaded] = useFonts({
		Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
		'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf')
	});

	const pokeballImage = require('./assets/white-pokeball-bg.png');

	const renderItem = useCallback<ListRenderItem<Pokemon>>(
		({ item }) => <Card pokemon={item} image={pokeballImage} />,
		[]
	);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) await SplashScreen.hideAsync();
	}, [fontsLoaded]);

	if (!fontsLoaded) return;
	if (!data) return;

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<View className='items-center justify-center w-full h-full px-5'>
				<Heading text='heading 1' type='H1' />
				<Heading text='heading 2' type='H2' />
				<Heading text='heading 3' type='H3' />
				<Heading text='heading 4' type='H4' />
				<Heading text='heading 5' type='H5' />
				<Heading text='heading 6' type='H6' />
				<Paragraph text='hello there' />

				<View className='w-full'>
					<FlatList
						data={data.pokemon}
						renderItem={renderItem}
						keyExtractor={(item) => item.name}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</View>
		</SafeAreaProvider>
	);
}
