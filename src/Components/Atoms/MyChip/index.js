import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { useTheme } from 'react-native-paper';
import { MyText } from '@Atoms';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
export default memo(props => {
    const { colors } = useTheme();
    const textColor = props.value ? colors.shark : `${colors.shipGray}cc`;
    const textStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: withTiming(props.value ? -7 : 0, { duration: 250 }) }]
    }))
    const indicatorStyle = useAnimatedStyle(() => ({
        bottom: withTiming(props.value ? 5 : -8, { duration: 250 }),
        backgroundColor: withTiming(props.value ? colors.shipGray : 'transparent', { duration: 250 }),
    }))

    return <TouchableOpacity activeOpacity={.8} onPress={props?.onPress}>
        <View style={{ height: 30, minWidth: 100, marginHorizontal: 5, justifyContent: 'center' }}>
            <Animated.View style={textStyle}>
                <MyText small center color={textColor}>{props.text}</MyText>
            </Animated.View>
            <Animated.View style={[indicatorStyle, { position: 'absolute', width: 4, height: 4, borderRadius: 3, backgroundColor: colors.shark, marginVertical: 3, alignSelf: 'center' }]} />
        </View>
    </TouchableOpacity>
})

