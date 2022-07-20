import 'react-native-gesture-handler';
/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { Provider as PaperProvider } from 'react-native-paper';
import { THEME as PAPER_THEME } from '@Utils';

const AppProvider = () => (
    <PaperProvider theme={PAPER_THEME}>
        <App />
    </PaperProvider>)
AppRegistry.registerComponent(appName, () => AppProvider);
