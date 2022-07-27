import { View, ActivityIndicator, Dimensions, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms'
export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window')
    useEffect(() => {
        setTimeout(() => replace('Login'), 1000)
        return () => {

        }
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors.zircon, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar backgroundColor={`${colors.shark}de`} barStyle={'light-content'} />
            <ImageBackground
                source={{ uri: `https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=688&q=1250` }}
                style={{ height: height - StatusBar.currentHeight, width, backgroundColor: colors.zircon, justifyContent: 'center', alignItems: 'center' }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: 1, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <MyText fontSize={30} bold color={colors.zircon} opacity={.7} numberOfLines={6}>SPLASHSCREEN</MyText>
                <ActivityIndicator style={{ position: 'absolute', bottom: 40 }} color={colors.caribbeanGreen} size={'large'} />
            </ImageBackground>
        </View>
    )
}