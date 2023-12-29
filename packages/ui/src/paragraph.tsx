import { P } from '@expo/html-elements';
import { styles } from './styles';
import React from 'react';

type Props = {
	text: string;
};

export function Paragraph({ text }: Props) {
	return <P style={styles.default}>{text}</P>;
}
