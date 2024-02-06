import { H1, H2, H3, H4, H5, H6 } from '@expo/html-elements';
import * as React from 'react';
import { twStyles } from './styles';
import { twMerge } from 'tailwind-merge';

type Heading = 'H1' | 'H2' | 'H3' | 'H4' | 'H5' | 'H6';

type HeadingProps = {
	text: string;
	type: Heading;
	styles?: string;
	shadow?: boolean;
};

export function Heading({ text, type, styles, shadow }: HeadingProps) {
	// create drop shadow (Nativewind does not support drop shadows)
	const dropShadow = {
		textShadowColor: 'rgba(33, 33, 33, .75)',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 5
	};

	switch (type) {
		case 'H1':
			return (
				<H1
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H1>
			);
		case 'H2':
			return (
				<H2
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H2>
			);
		case 'H3':
			return (
				<H3
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H3>
			);
		case 'H4':
			return (
				<H4
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H4>
			);
		case 'H5':
			return (
				<H5
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H5>
			);
		case 'H6':
			return (
				<H6
					className={twMerge(`${twStyles.heading} ${styles}`)}
					style={shadow ? { ...dropShadow } : null}>
					{text}
				</H6>
			);
		default:
			throw new Error('improper heading type');
	}
}
