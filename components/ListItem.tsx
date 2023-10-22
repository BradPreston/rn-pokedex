import { Link } from 'expo-router';
import { memo } from 'react';
import { Image, Text } from 'react-native';

type Props = {
	id: number;
	name: string;
};

function ListItem({ id, name }: Props) {
	return (
		<Link
			href={`/pokemon/${id}`}
			className='flex'
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
			<Image
				className='p-4 flex'
				style={{ width: 50, height: 50 }}
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				}}
			/>
			<Text className='text-blue-300 font-bold'>{name}</Text>
		</Link>
	);
}

export default memo(ListItem);
