import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { MyText } from '@Atoms';

import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default memo(props => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity activeOpacity={.9} onPress={props?.onPress} style={{ width: '100%', height: 130, backgroundColor: colors.caribbeanGreen, marginVertical: 5, borderRadius: 20, padding: 13 }}>
            <MyText>{props.todo.title}</MyText>
            <MyText>{props.todo.tanggal}</MyText>
        </TouchableOpacity>
    )
})