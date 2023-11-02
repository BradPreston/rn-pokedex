import { Text } from 'react-native';

type Props = {
	title: string;
};

export default function Heading({ title }: Props) {
	return <Text className='capitalize text-4xl my-2'>{title}</Text>;
}
