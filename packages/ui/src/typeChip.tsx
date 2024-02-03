import React from 'react';
import { Text, View } from 'react-native';
import typeColors from './typeColors';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type TypeChipProps = {
	type: string;
};

export function TypeChip({ type }: TypeChipProps) {
	return (
		<View
			className={`h-8 px-2 items-center justify-center rounded-md flex-row gap-2 font-[Roboto] ${typeColors[type]['chipBackground']}`}>
			<FontAwesomeIcon
				icon={typeColors[type]['icon']}
				size={16}
				color={'white'}
			/>
			<Text className='text-white capitalize'>{type}</Text>
		</View>
	);
}
