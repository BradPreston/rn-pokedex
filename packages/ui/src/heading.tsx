import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import React from 'react';
import { StyleSheet } from 'react-native';
import { styles } from './styles';

type Heading = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

type Props = {
	text: string;
	type: Heading;
};

export function Heading({ text, type }: Props) {
	switch (type) {
		case 'H1':
			return <H1 style={style.default}>{text}</H1>;
		case 'H2':
			return <H2 style={style.default}>{text}</H2>;
		case 'H3':
			return <H3 style={style.default}>{text}</H3>;
		case 'H4':
			return <H4 style={style.default}>{text}</H4>;
		case 'H5':
			return <H5 style={style.default}>{text}</H5>;
		case 'H6':
			return <H6 style={style.default}>{text}</H6>;
		default:
			throw new Error('improper heading type');
	}
}

const style = StyleSheet.create({
	default: {
		color: styles.default.color
	}
});
