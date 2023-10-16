import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import { IvIcon } from '../../components/IvIcon';

export default function TabLayout() {
	const colorScheme = useColorScheme();

	const tabIconStyles = {
		stroke: Colors[colorScheme ?? 'dark'].tabIconDefault,
	};

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tabIconSelected,
				tabBarStyle: { padding: 10, backgroundColor: Colors[colorScheme ?? 'dark'].background },
			}}
		>
			<Tabs.Screen
				name='index'
				options={{
					tabBarLabel: '',
					tabBarIcon: () => <IvIcon name='home' styles={tabIconStyles} />,
				}}
			/>
			<Tabs.Screen
				name='quote'
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color }) => <IvIcon name='bible' styles={tabIconStyles} />,
				}}
			/>
			<Tabs.Screen
				name='menu'
				options={{
					tabBarLabel: '',
					tabBarIcon: ({ color }) => (
						<IvIcon name='menu' styles={{ ...tabIconStyles, fill: Colors[colorScheme ?? 'dark'].tabIconDefault }} />
					),
				}}
			/>
		</Tabs>
	);
}
