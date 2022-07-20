import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { MyText } from '@Atoms';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default memo(({ leftPress, title = '' }) => {
    const { colors } = useTheme();
    return (
        <View style={{ height: 60, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: colors.zircon }}>
            <View style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={leftPress}>
                    <Icon name={'menu'} size={25} color={colors.shark} />
                </TouchableOpacity>
            </View>
            <View style={{ flexGrow: 1 }}>
                <MyText center bold>{title}</MyText>
            </View>
            <View style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity activeOpacity={.9}>
                    <Icon name={'bell'} size={25} color={colors.shark} />
                    <View style={{ position: 'absolute', top: 0, left: 10, height: 14, width: 14, borderRadius: 7, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.valencia }}>
                        <MyText xSmall center bold color={colors.zircon}>1</MyText>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
});