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
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}>
			<Image
				style={{ width: 50, height: 50 }}
				source={{
					uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
				}}
			/>
			<Text>{name}</Text>
		</Link>
	);
}

export default memo(ListItem);
