import { Text, TextProps } from './Themed';

export function BasicText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
export function SpecialText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: 'LisuBosa' }]} />;
}
