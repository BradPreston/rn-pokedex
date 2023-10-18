import { useColorScheme } from 'react-native';

type Theme = {
	text: string;
	background: string;
};

export default function colors(): Theme {
	const theme = useColorScheme();

	return {
		text: theme === 'dark' ? '#fff' : '#333',
		background: theme === 'dark' ? '#333' : '#fff'
	};
}
