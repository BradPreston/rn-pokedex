import { PropsWithChildren } from 'react';
import { View } from 'react-native';

export default function Container({ children }: PropsWithChildren) {
	return (
		<View className='flex-col relative h-full'>
			<View className='w-11/12 self-center'>{children}</View>
		</View>
	);
}
