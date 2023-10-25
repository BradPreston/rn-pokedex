import { Pressable, Text } from 'react-native';

type Props = {
	styles: string;
	addToParty: VoidFunction;
};

export default function Button({ styles, addToParty }: Props) {
	return (
		<Pressable className={styles} onPress={() => addToParty()}>
			<Text className='text-white text-lg'>Add to Party</Text>
		</Pressable>
	);
}
