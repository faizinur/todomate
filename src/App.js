/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react'
import { View, StatusBar } from 'react-native';
import { enableFreeze } from 'react-native-screens';
import MainStackNavigator from '@Pages';
import { MyToast } from '@Atoms';
import { log } from '@Utils';
import { useTheme } from 'react-native-paper'
enableFreeze(true);
import { getUniqueId } from 'react-native-device-info';

const App = () => {
	const { colors } = useTheme();
	useEffect(() => {
		log('Mount App')
		getUniqueId().then(log);
		return () => {
			log('Unmount App')
		}
	}, [])
	return (
		<View style={{ flex: 1, }}>
			<StatusBar
				animated={true}
				backgroundColor={colors.zircon}
				barStyle={'dark-content'}
				showHideTransition={'fade'}
				hidden={false} />
			<MainStackNavigator />
			<MyToast />
		</View>
	);
};
export default App;
