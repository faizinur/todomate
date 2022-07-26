import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from '@RootNavigation';
import { log } from '@Utils';

import Splash from "./Splash";
import Main from "./Main";
import Login from "./Login";

const Stack = createNativeStackNavigator();

const animationSlide = {
    headerMode: 'none',
    headerShown: false,
}

export default stackProps => (
    <NavigationContainer
        ref={navigationRef}
        onReady={() => { log('Root Props : ', stackProps) }}>
        <Stack.Navigator
            initialRouteName={"Main"}
            mode={"card"}
            ScreenOptions={{}}>
            <Stack.Screen name="Splash" options={() => (animationSlide)}>
                {props => <Splash  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Login" options={() => (animationSlide)}>
                {props => <Login  {...props} {...stackProps} />}
            </Stack.Screen>
            <Stack.Screen name="Main" options={() => (animationSlide)}>
                {props => <Main  {...props} {...stackProps} />}
            </Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)
export {
    Splash,
    Main,
    Login,
}