import { Dispatch, SetStateAction } from 'react';
import { TextInput, View, Keyboard, Button } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
	clicked: boolean;
	searchPhrase: string;
	setSearchPhrase: Dispatch<SetStateAction<string>>;
	setCLicked: Dispatch<SetStateAction<boolean>>;
	handleSearch: VoidFunction;
	handleResetSearch: VoidFunction;
};

export default function SearchBar({
	clicked,
	searchPhrase,
	setSearchPhrase,
	setCLicked,
	handleSearch,
	handleResetSearch
}: Props) {
	return (
		<View className='m-4 justify-between items-center flex-row w-11/12'>
			<View
				className={`p-3 flex-row bg-gray-200 rounded-2xl items-center ${
					clicked ? 'w-3/4 justify-evenly' : 'w-full'
				}`}>
				<TextInput
					placeholder='Search'
					value={searchPhrase}
					onChangeText={setSearchPhrase}
					onFocus={() => setCLicked(true)}
					onSubmitEditing={handleSearch}
					className='w-11/12'
				/>
				{clicked && (
					<Ionicons
						name='close-circle'
						size={20}
						className='text-gray-800'
						onPress={handleResetSearch}
					/>
				)}
			</View>

			<View>
				{clicked && (
					<View>
						<Button
							title='Cancel'
							onPress={() => {
								Keyboard.dismiss();
								setCLicked(false);
							}}
						/>
					</View>
				)}
			</View>
		</View>
	);
}
