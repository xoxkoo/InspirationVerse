import { StyleSheet } from 'react-native';
import { font } from './variables';
export default StyleSheet.create({
	title: {
		fontSize: font.XL,
	},
	subTitle: {
		fontSize: font.L,
		textTransform: 'uppercase',
	},
	verse: {
		fontSize: font.XL,
		lineHeight: 25,
		letterSpacing: 1,
		textTransform: 'uppercase',
		textShadow: '1px 1px 0 rgba(200, 200, 200, 0.5)',
	},
	paragraph: {
		margin: 0,
	},
	spanWithNumber: {
		display: 'none',
	},
	center: {
		textAlign: 'center',
	},
	uppercase: {
		textTransform: 'uppercase',
	},
});
