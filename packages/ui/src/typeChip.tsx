import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import typeColors from './typeColors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type TypeChipProps = {
	type: string;
};

export function TypeChip({ type }: TypeChipProps) {
	const style = StyleSheet.create({
		typeChipWrapper: {
			backgroundColor: typeColors[type]['chipBackground'],
			height: 32,
			paddingHorizontal: 8,
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: 6,
			flexDirection: 'row',
			gap: 8,
			fontFamily: 'Roboto'
		},
		type: {
			color: '#ffffff',
			textTransform: 'capitalize'
		}
	});

	return (
		<View style={style.typeChipWrapper}>
			<FontAwesomeIcon
				icon={typeColors[type]['icon']}
				size={16}
				color={'white'}
			/>
			<Text style={style.type}>{type}</Text>
		</View>
	);
}
