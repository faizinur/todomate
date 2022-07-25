import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms'
export default memo(props => {
    const { colors } = useTheme();
    const enabled = props.value || true;
    const textColor = props.value ? colors.shark : colors.shipGrey;
    const borderColor = 'transparent';
    return <TouchableOpacity
        activeOpacity={.8}
        onPress={props?.onPress}
        enabled={enabled}
        style={{ backgroundColor: 'transparent', borderColor: borderColor, borderWidth: .3, paddingHorizontal: 10, borderRadius: 50, minWidth: 100, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
        <MyText small center color={textColor}>{props.text}</MyText>
        {props.value && <View style={{ width: 5, height: 5, borderRadius: 3, backgroundColor: colors.shark, marginVertical: 3 }} />}
    </TouchableOpacity>
})

