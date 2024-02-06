import { P } from '@expo/html-elements';
import { twStyles } from './styles';
import React from 'react';

type ParagraphProps = {
	text: string;
	styles?: string;
	shadow?: boolean;
};

export function Paragraph({ text, styles, shadow }: ParagraphProps) {
	// create drop shadow (Nativewind does not support drop shadows)
	const dropShadow = {
		textShadowColor: 'rgba(33, 33, 33, .75)',
		textShadowOffset: { width: 2, height: 2 },
		textShadowRadius: 5
	};

	return (
		<P
			className={`${twStyles.paragraph} ${styles}`}
			style={shadow ? { ...dropShadow } : null}>
			{text}
		</P>
	);
}
