import './global.css';
import { Text, View } from 'react-native';

export default function Native() {
	return (
		<View className='items-center justify-center w-full h-full'>
			<Text className='text-red-500 text-4xl font-bold'>Hello</Text>
		</View>
	);
}
