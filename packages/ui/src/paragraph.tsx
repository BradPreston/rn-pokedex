import { P } from '@expo/html-elements';
import { twStyles } from './styles';
import React from 'react';

type ParagraphProps = {
	text: string;
};

export function Paragraph({ text }: ParagraphProps) {
	return <P className={twStyles.paragraph}>{text}</P>;
}
