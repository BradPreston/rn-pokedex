import { Pressable, Text } from 'react-native';

type Props = {
	styles: string;
	addToParty?: VoidFunction;
	removeFromParty?: VoidFunction;
};

export default function Button({ styles, addToParty, removeFromParty }: Props) {
	function handleParty() {
		if (addToParty) return addToParty();
		if (removeFromParty) return removeFromParty();
	}
	return (
		<Pressable className={styles} onPress={handleParty}>
			<Text className='text-white text-lg'>
				{addToParty ? 'Add to Party' : 'Remove From Party'}
			</Text>
		</Pressable>
	);
}
