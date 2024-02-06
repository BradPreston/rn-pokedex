import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import * as React from 'react';
import { twStyles } from './styles';

type Heading = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

type HeadingProps = {
	text: string;
	type: Heading;
};

export function Heading({ text, type }: HeadingProps) {
	switch (type) {
		case 'H1':
			return <H1 className={`${twStyles.heading}`}>{text}</H1>;
		case 'H2':
			return <H2 className={`${twStyles.heading}`}>{text}</H2>;
		case 'H3':
			return <H3 className={`${twStyles.heading}`}>{text}</H3>;
		case 'H4':
			return <H4 className={`${twStyles.heading}`}>{text}</H4>;
		case 'H5':
			return <H5 className={`${twStyles.heading}`}>{text}</H5>;
		case 'H6':
			return <H6 className={`${twStyles.heading}`}>{text}</H6>;
		default:
			throw new Error('improper heading type');
	}
}
