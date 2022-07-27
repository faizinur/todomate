import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper';

export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    useEffect(() => {
        setTimeout(() => replace('Main'), 1000)
        return () => {

        }
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: colors.zircon, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Splash</Text>
            <ActivityIndicator style={{ position: 'absolute', bottom: 40 }} size={'large'} />
        </View>
    )
}