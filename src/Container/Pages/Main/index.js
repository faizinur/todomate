import { View, Dimensions, StatusBar, StyleSheet } from 'react-native'
import React, { memo, useCallback, useState, useRef } from 'react'
import { log, CONSTANT } from '@Utils'
import { useTheme } from 'react-native-paper'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Activity, Setting, Connect, Notification, Profile, SideMenu } from '@Templates'
import { PagerView } from 'react-native-pager-view';
import AwesomeAlert from 'react-native-awesome-alerts';


export default memo(props => {
    const refPagerView = useRef(<PagerView />);
    const { width, height } = Dimensions.get('window')
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const { colors } = useTheme();
    const pageSizeStyle = useAnimatedStyle(() => ({
        height: withSpring(isMenuOpen ? (height * .8) : height, CONSTANT.SPRING_CONFIG),
        width: withSpring(isMenuOpen ? (width * .8) : width, CONSTANT.SPRING_CONFIG),
        borderRadius: withTiming(isMenuOpen ? 20 : 0, { duration: 800 }),
        paddingHorizontal: withTiming(isMenuOpen ? '7%' : '0%'),
        paddingVertical: withTiming(isMenuOpen ? '5%' : '0%'),
        transform: [{ translateX: withTiming(isMenuOpen ? (width * .7) : 0, { duration: 500 }) }]
    }))
    const pageOverlayStyle = useAnimatedStyle(() => ({
        borderRadius: withTiming(isMenuOpen ? 20 : 0, { duration: 800 }),
        backgroundColor: withTiming(isMenuOpen ? `${colors.shark}77` : 'transparent', { duration: 1000 })
    }))
    const _onHide = useCallback(() => setIsMenuOpen(prevState => !prevState), []);
    const _onClickLogout = useCallback(() => setIsAlertOpen(prevState => !prevState), []);
    const _listPress = index => {
        if (index == 4) {
            _onClickLogout()
            return false;
        }
        Promise.all([refPagerView.current.setPageWithoutAnimation(index), _onHide()])
    }
    const _showProfile = () => {
        Promise.all([refPagerView.current.setPageWithoutAnimation(4), _onHide()])
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar hidden={false} backgroundColor={isMenuOpen ? colors.shark : colors.zircon} barStyle={isMenuOpen ? 'light-content' : 'dark-content'} />
            <SideMenu {...props} listPress={_listPress} onHide={_onHide} showProfile={_showProfile} />
            <AwesomeAlert
                useNativeDriver={true}
                show={isAlertOpen}
                title={"HEY!"}
                message={"Logoutnya kepencet ya?"}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText={"Enggak deh."}
                confirmText={"Iyalah."}
                onCancelPressed={_onClickLogout}
                onConfirmPressed={() => props.navigation.replace('Login')}
                titleStyle={{ fontFamily: 'ReadexProRegular', color: `${colors.shipGray}99` }}
                messageStyle={{ fontFamily: 'ReadexProRegular', color: `${colors.shipGray}77` }}
                cancelButtonColor={'transparent'}
                confirmButtonColor={'transparent'}
                cancelButtonTextStyle={{ fontFamily: 'ReadexProRegular', fontSize: 12, color: `${colors.shipGray}88`, fontWeight: '600' }}
                confirmButtonTextStyle={{ fontFamily: 'ReadexProRegular', fontSize: 12, color: colors.caribbeanGreen, fontWeight: '600' }}
            />


            <Animated.View style={[pageSizeStyle, {
                position: 'absolute', alignSelf: 'center', backgroundColor: colors.zircon,
                shadowColor: colors.alabaster, shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6,
            }]} pointerEvents={isMenuOpen ? 'none' : 'auto'}>
                <PagerView
                    ref={refPagerView}
                    style={{ flex: 1 }}
                    initialPage={0}
                    scrollEnabled={false}>
                    <View key={0}><Activity {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} /></View>
                    <View key={1}><Connect  {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} /></View>
                    <View key={2}><Notification {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} /></View>
                    <View key={3}><Setting {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} /></View>
                    <View key={4}><Profile {...props} onHideMenu={_onHide} /></View>
                </PagerView>
                {isMenuOpen && <Animated.View style={[pageOverlayStyle, StyleSheet.absoluteFill]} />}
            </Animated.View>
        </View>
    )
})