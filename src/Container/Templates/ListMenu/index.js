import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: colors.shark }}>
            <TouchableOpacity activeOpacity={.8} onPress={onHideMenu} style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'menu-open'} size={25} color={colors.zircon} />
            </TouchableOpacity>
        </View>
    )
}

