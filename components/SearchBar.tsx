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
		<View className='my-4 justify-between items-center flex-row w-full self-center'>
			<View
				className={`flex-row bg-gray-300 rounded-2xl items-center ${
					clicked ? 'w-3/4 justify-evenly py-3 pl-6' : 'w-full p-3'
				}`}>
				<TextInput
					placeholder='What Pokémon are you looking for?'
					placeholderTextColor='#333333'
					value={searchPhrase}
					onChangeText={setSearchPhrase}
					onFocus={() => setCLicked(true)}
					onSubmitEditing={handleSearch}
					className='w-full text-gray-700 text-base'
				/>
				{clicked && (
					<Ionicons
						name='close-circle'
						size={16}
						className='text-pokemon-grey mr-5'
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
