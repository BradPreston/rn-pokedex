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
					<Text className='font-bold text-lg'>Are you sure?</Text>
					<Text className='italic'>This cannot be undone</Text>
					<View className='flex-row justify-between gap-6 mt-5'>
						<Pressable onPress={() => handleCancel()} className='flex-1'>
							<Text className='bg-slate-700 text-white py-2 text-center'>
								Cancel
							</Text>
						</Pressable>
						<Pressable onPress={() => handleConfirm()} className='flex-1'>
							<Text className='bg-red-700 text-white py-2 text-center'>
								Yes
							</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
		</View>
	);
}
