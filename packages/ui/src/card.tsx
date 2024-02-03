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

type CardProps = {
	pokemon: SimplePokemon;
	image: ImageSourcePropType;
};

export function Card({ pokemon, image }: CardProps) {
	// destructure name, id, and types from pokemon
	const { name, id, types } = pokemon;
	// non-Nativewind supported styles
	const rnStyles = StyleSheet.create({
		dropShadow: {
			textShadowColor: 'rgba(33, 33, 33, .75)',
			textShadowOffset: { width: 2, height: 2 },
			textShadowRadius: 5
		},
		contain: {
			objectFit: 'contain'
		}
	});

	return (
		<View
			className={`mt-12 rounded-xl w-full ${typeColors[types[0].type.name]['cardBackground']}`}>
			<Pressable className='w-full'>
				<View className='overflow-hidden w-full p-5'>
					<Text className='text-gray-700 text-base font-[Roboto-Black]'>
						#{id.toString().padStart(3, '0')}
					</Text>
					<Text
						style={rnStyles.dropShadow}
						className='text-4xl capitalize text-white py-2 font-[Roboto-Black] z-40d'>
						{name}
					</Text>
					<View className='flex-row gap-2'>
						{types.map((type, index) => (
							<TypeChip key={type.type.name + index} type={type.type.name} />
						))}
					</View>

					<View className='absolute items-center justify-center right-0 -z-10'>
						<Image
							style={rnStyles.contain}
							className='h-52 aspect-square opacity-10'
							source={image}
						/>
					</View>
				</View>
				<View className='absolute right-2 -top-8 -z-10'>
					<Image
						style={rnStyles.contain}
						className='h-40 aspect-square'
						source={{
							uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
						}}
					/>
				</View>
			</Pressable>
		</View>
	);
}
