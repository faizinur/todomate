import React, { memo } from 'react'
import { View, TouchableOpacity } from 'react-native'
export default memo(({ backgroundColor = 'black', onPress = () => null }) => (
    <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <TouchableOpacity activeOpacity={.8} onPress={onPress} style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <View>
                <View style={{ width: 10, height: 10, borderRadius: 3, borderBottomRightRadius: 4, backgroundColor, margin: 1 }} />
                <View style={{ width: 10, height: 10, borderRadius: 3, borderTopRightRadius: 4, backgroundColor, margin: 1 }} />
            </View>
            <View>
                <View style={{ width: 10, height: 10, borderRadius: 3, borderBottomLeftRadius: 4, backgroundColor, margin: 1, opacity: .6 }} />
                <View style={{ width: 10, height: 10, borderRadius: 3, borderTopLeftRadius: 4, backgroundColor, margin: 1 }} />
            </View>
        </TouchableOpacity>
    </View>
))