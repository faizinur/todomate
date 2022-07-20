import { Text } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from 'react-native-paper';

export default memo(props => {
    const { colors } = useTheme();
    const textStyles = {
        color: 'color' in props ? props.color : colors.shark,
        fontSize: 'xSmall' in props ? 10 : ('small' in props ? 12 : ('large' in props ? 16 : 14)),
        fontWeight: 'bold' in props ? 'bold' : ('light' in props ? '300' : 'normal'),
        fontFamily: 'ReadexProRegular',
        lineHeight: 'xSmall' in props ? 12 : ('small' in props ? 16 : ('large' in props ? 20 : 18)),
        textAlign: 'center' in props ? 'center' : ('justify' in props ? 'justify' : ('left' in props ? 'left' : ('right' in props ? 'right' : 'left')))
    }
    const numberOfLines = 'numberOfLines' in props ? props.numberOfLines : 2;
    const ellipsizeMode = 'ellipsizeMode' in props ? props.ellipsizeMode : 'tail'
    return <Text style={[textStyles, { ...props?.style }]} numberOfLines={numberOfLines} ellipsizeMode={ellipsizeMode}>{props.children}</Text>
})

