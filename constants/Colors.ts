const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
import { colors } from '../assets/styles/variables';

export default {
	light: {
		text: '#000',
		background: '#fff',
		tint: tintColorLight,
		tabIconDefault: '#000',
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: colors.gray100,
		background: colors.gray300,
		tint: tintColorDark,
		tabIconDefault: colors.gray100,
		tabIconSelected: tintColorDark,
	},
};
