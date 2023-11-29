import { Text } from 'react-native';

type Color = 'light' | 'dark';

type Props = {
	title: string;
	color: Color;
	styles?: string;
};

export default function Heading({ title, color, styles }: Props) {
	return (
		<Text
			className={`capitalize text-4xl font-bold ${
				color === 'dark' ? 'text-gray-700' : 'text-white'
			} ${styles}`}>
			{title}
		</Text>
	);
}
