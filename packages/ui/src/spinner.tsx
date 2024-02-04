import { ActivityIndicator, View } from 'react-native';

export function LoadingSpinner() {
	return (
		<View className='px-4 justify-center'>
			<View className='items-center justify-center h-full'>
				<ActivityIndicator
					style={{ justifyContent: 'center', alignContent: 'center' }}
					size={100}
					color='#0000ff'
				/>
			</View>
		</View>
	);
}
