import { ActivityIndicator, View } from 'react-native';

type LoadingProps = {
	color: string;
};

export function LoadingSpinner({ color }: LoadingProps) {
	return (
		<View className='px-4 justify-center'>
			<View className='items-center justify-center h-full'>
				<ActivityIndicator
					className={color}
					style={{
						justifyContent: 'center',
						alignContent: 'center'
					}}
					size={100}
				/>
			</View>
		</View>
	);
}
