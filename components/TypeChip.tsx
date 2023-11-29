import { typeColors } from '@internal';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

type Props = {
	type: string;
};

export default function TypeChip({ type }: Props) {
	return (
		<View
			className={`${typeColors[type]['chipBackground']} h-8 px-2 flex-row items-center gap-2 justify-center rounded-md`}>
			<FontAwesomeIcon
				icon={typeColors[type]['icon']}
				size={16}
				color={'white'}
			/>
			<Text className='capitalize text-white'>{type}</Text>
		</View>
	);
}
