import '../global.css';
import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { SimplePokemon } from '@repo/types';
import typeColors from './typeColors';
import { TypeChip } from './typeChip';

function createDynamicStylesheet(typeName: string, customStyle?: any) {
	return StyleSheet.create({
		box: {
			backgroundColor: typeColors[typeName]['cardBackground'],
			marginTop: 48, // mt-12
			borderRadius: 12, // rounded-xl
			width: '100%'
		},
		wrapper: {
			overflow: 'hidden',
			width: '100%',
			padding: 20 // p-5
		},
		number: {
			color: 'rgb(55 65 81)', // text-gray-700
			fontFamily: 'Roboto-Black',
			fontSize: 16,
			...customStyle?.number
		},
		name: {
			fontSize: 36, // text-4xl
			lineHeight: 40, // text-4xl
			textTransform: 'capitalize',
			color: '#ffffff', // text-white
			paddingVertical: 8, // py-2
			fontFamily: 'Roboto-Black',
			zIndex: 40,
			textShadowColor: 'rgba(33, 33, 33, .75)',
			textShadowOffset: { width: 2, height: 2 },
			textShadowRadius: 5,
			...customStyle?.name
		},
		types: {
			flexDirection: 'row', // flex-row
			gap: 8 // gap-2
		},
		pokeballImageWrapper: {
			position: 'absolute',
			alignItems: 'center', // items-center
			justifyContent: 'center', // justify-center
			right: 0, // right-0
			zIndex: -40 // -z-10
		},
		pokeballImage: {
			height: 208, // h-52
			aspectRatio: '1/1', // aspect-square
			opacity: 0.1, // opacity-10
			objectFit: 'contain'
		},
		pokemonImageWrapper: {
			position: 'absolute',
			right: 8, // right-2
			top: -32, // -top-8
			zIndex: -10
		},
		pokemonImage: {
			objectFit: 'contain',
			height: 160, // h-40
			aspectRatio: '1/1'
		}
	});
}

type CardProps = {
	pokemon: SimplePokemon;
	image: ImageSourcePropType;
};

export function Card({ pokemon, image }: CardProps) {
	const { name, id, types } = pokemon;
	const style = createDynamicStylesheet(types[0].type.name);

	// add bg-black for testing
	return (
		<View className='bg-black'>
			<Pressable style={{ width: '100%' }}>
				<View style={style.wrapper}>
					<Text style={style.number}>#{id.toString().padStart(3, '0')}</Text>
					<Text style={style.name}>{name}</Text>
					<View style={style.types}>
						{types.map((type, index) => (
							<TypeChip key={type.type.name + index} type={type.type.name} />
						))}
					</View>

					<View style={style.pokeballImageWrapper}>
						<Image style={style.pokeballImage} source={image} />
					</View>
				</View>
				<View style={style.pokemonImageWrapper}>
					<Image
						style={style.pokemonImage}
						source={{
							uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
						}}
					/>
				</View>
			</Pressable>
		</View>
	);
}
