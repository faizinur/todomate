import { View, Dimensions, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms'
import { OnBoarding } from '@Templates';
import Spinner from 'react-native-spinkit';
export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('screen');
    const [onBoardingPassed, setOnBoardingPassed] = useState(false);
    const _onPressGetStarted = () => {
        setOnBoardingPassed(true);
        setTimeout(() => replace('Login'), 1000)
    }
    useEffect(() => {
        return () => { }
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors.zircon, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar translucent backgroundColor={`transparent`} barStyle={'light-content'} />
            {onBoardingPassed && <ImageBackground
                source={{ uri: `https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=688&q=1250` }}
                style={{ height: height - StatusBar.currentHeight, width, backgroundColor: colors.zircon, justifyContent: 'center', alignItems: 'center' }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: 1, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <MyText fontSize={30} bold color={colors.zircon} opacity={.7} numberOfLines={6}>TODO MATE</MyText>
                <Spinner isVisible={true} type={'Wave'} size={40} style={{ position: 'absolute', bottom: 40, opacity: .7 }} color={colors.zircon} />
            </ImageBackground> || <OnBoarding onComplete={_onPressGetStarted} />}
        </View>
    )
}