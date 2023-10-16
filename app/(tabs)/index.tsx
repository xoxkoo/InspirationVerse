import { StyleSheet } from 'react-native';

import { View } from '../../components/Themed';
import { Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { BasicText, SpecialText } from '../../components/StyledText';
import typo from '../../assets/styles/typography';
import grid from '../../assets/styles/grid';
import i18n from '../../i18n';

export default function HomeScreen() {
	const { t } = useTranslation();

	return (
		<View style={{ flex: 1 }}>
			<SpecialText style={styles.title}>{t('text')}</SpecialText>
			<BasicText style={typo.center}>{t('home.subtitle')}</BasicText>
			<Image style={styles.image} source={require('../../assets/images/intro.png')} />
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		...typo.title,
		...typo.center,
	},
	image: {
		margin: 'auto',
	},
});
