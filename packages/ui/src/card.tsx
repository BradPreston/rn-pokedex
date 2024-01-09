import React from 'react';
import {
	Image,
	ImageSourcePropType,
	Pressable,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Pokemon } from '@repo/types';
import typeColors from './typeColors';

function createDynamicStylesheet(typeName: string) {
	return StyleSheet.create({
		box: {
			backgroundColor: typeColors[typeName]['chipBackground'],
			marginTop: 12, // mt-12
			borderRadius: 12 // rounded-xl
		},
		wrapper: {
			width: '100%',
			overflow: 'hidden',
			padding: 20 // p-5
		},
		number: {
			fontWeight: 'bold',
			color: 'rgb(55 65 81)' // text-gray-700
		},
		name: {
			fontSize: 36, // text-4xl
			lineHeight: 40, // text-4xl
			textTransform: 'capitalize',
			color: '#ffffff', // text-white
			paddingVertical: 8 // py-2
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
			top: -32 // -top-8
		}
	});
}

type CardProps = {
	pokemon: Pokemon;
	image: ImageSourcePropType;
};

export function Card({ pokemon, image }: CardProps) {
	const { name, id, details } = pokemon;
	const { types } = details.nodes[0];
	const style = createDynamicStylesheet(types[0].type.name);

	return (
		<View style={style.box}>
			<Pressable>
				<View style={style.wrapper}>
					<Text style={style.number}>#{id}</Text>
					<Text style={style.name}>{name}</Text>
					<View style={style.types}>
						{types.map((type, index) => (
							<Text key={type.type.name + index}>{type.type.name}</Text>
						))}
					</View>

					<View style={style.pokeballImageWrapper}>
						<Image style={style.pokeballImage} source={image} />
					</View>
				</View>
				<View style={style.pokemonImageWrapper}>{/* pokemon image */}</View>
			</Pressable>
		</View>
	);
}
