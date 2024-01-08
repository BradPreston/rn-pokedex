import { P } from '@expo/html-elements';
import { styles } from './styles';
import * as React from 'react';

type ParagraphProps = {
	text: string;
};

export function Paragraph({ text }: ParagraphProps) {
	return <P style={styles.default}>{text}</P>;
}
