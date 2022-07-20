import { View, Dimensions, StatusBar } from 'react-native'
import React, { memo, useCallback, useState } from 'react'
import { CONSTANT } from '@Utils'
import { useTheme } from 'react-native-paper'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Home, ListMenu } from '@Templates'

export default memo(props => {
    const { width, height } = Dimensions.get('window')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { colors } = useTheme();
    const pageSizeStyle = useAnimatedStyle(() => ({
        height: withSpring(isMenuOpen ? (height * .8) : height, CONSTANT.SPRING_CONFIG),
        width: withSpring(isMenuOpen ? (width * .8) : width, CONSTANT.SPRING_CONFIG),
        borderRadius: withTiming(isMenuOpen ? 20 : 0, { duration: 800 }),
        paddingHorizontal: withTiming(isMenuOpen ? '7%' : '0%'),
        paddingVertical: withTiming(isMenuOpen ? '5%' : '3%'),
        transform: [{ translateX: withTiming(isMenuOpen ? (width * .8) : 0, { duration: 500 }) }]
    }))
    const _onHide = useCallback(() => setIsMenuOpen(prevState => !prevState), [])
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar backgroundColor={isMenuOpen ? colors.shark : colors.zircon} barStyle={isMenuOpen ? 'light-content' : 'dark-content'} />
            <ListMenu {...props} onHideMenu={_onHide} />
            <Animated.View style={[pageSizeStyle, {
                position: 'absolute', alignSelf: 'center', backgroundColor: colors.zircon,
                shadowColor: colors.alabaster, shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6,
            }]}>
                <Home {...props} onHideMenu={_onHide} />
            </Animated.View>
        </View>
    )
})