import { TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms'
export default memo(props => {
    const { colors } = useTheme();
    const enabled = props.value || true;
    const bgColor = props.value ? colors.shark : 'transparent';
    const textColor = props.value ? colors.athensGray : colors.shark;
    const borderColor = props.value ? 'transparent' : colors.shark;
    return <TouchableOpacity
        activeOpacity={.8}
        onPress={props?.onPress}
        enabled={enabled}
        style={{ backgroundColor: bgColor, borderColor: borderColor, borderWidth: .3, paddingHorizontal: 10, borderRadius: 50, minWidth: 100, height: 30, justifyContent: 'center', alignItems: 'center', marginRight: 5 }}>
        <MyText small center color={textColor}>{props.text}</MyText>
    </TouchableOpacity>
})

