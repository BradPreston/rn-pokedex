import { Pressable, Text, View } from 'react-native';
import Modal from 'react-native-modal';

type Props = {
	showModal: boolean;
	handleCancel: VoidFunction;
	handleConfirm: VoidFunction;
};

export default function AreYouSureModal({
	showModal,
	handleCancel,
	handleConfirm
}: Props) {
	return (
		<View className='absolute'>
			<Modal isVisible={showModal}>
				<View className='w-4/5 bg-white self-center py-5 px-5 rounded-md'>
					<Text className='text-black text-lg'>Are you sure?</Text>
					<View className='flex-row justify-between gap-6 mt-5'>
						<Pressable onPress={() => handleCancel()} className='flex-1'>
							<Text className='bg-pokemon-gold text-white py-2 text-center'>
								Cancel
							</Text>
						</Pressable>
						<Pressable onPress={() => handleConfirm()} className='flex-1'>
							<Text className='bg-pokemon-red text-white py-2 text-center'>
								Yes
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
