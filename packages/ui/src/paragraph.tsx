import { P } from '@expo/html-elements';
import { twStyles } from './styles';
import React from 'react';

type ParagraphProps = {
	text: string;
	styles?: string;
};

export function Paragraph({ text, styles }: ParagraphProps) {
	return <P className={`${twStyles.paragraph} ${styles}`}>{text}</P>;
}
