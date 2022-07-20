import { View, Text, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'

const Splash = ({ navigation: { navigate } }) => {
    useEffect(() => {
        setTimeout(() => navigate('Main'), 1000)
        return () => {

        }
    }, [])
    return (
        <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Splash</Text>
            <ActivityIndicator style={{ position: 'absolute', bottom: 40 }} size={'large'} />
        </View>
    )
}

export default Splash