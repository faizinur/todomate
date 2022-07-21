import { View, Dimensions, StatusBar, StyleSheet } from 'react-native'
import React, { memo, useCallback, useState, useRef } from 'react'
import { log, CONSTANT } from '@Utils'
import { useTheme } from 'react-native-paper'
import Animated, { useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { Home, Setting, SideListMenu } from '@Templates'
import { PagerView } from 'react-native-pager-view';
import { MyText } from '@Atoms';
export default memo(props => {
    const refPagerView = useRef(<PagerView />);
    const { width, height } = Dimensions.get('window')
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const { colors } = useTheme();
    const pageSizeStyle = useAnimatedStyle(() => ({
        height: withSpring(isMenuOpen ? (height * .8) : height, CONSTANT.SPRING_CONFIG),
        width: withSpring(isMenuOpen ? (width * .8) : width, CONSTANT.SPRING_CONFIG),
        borderRadius: withTiming(isMenuOpen ? 20 : 0, { duration: 800 }),
        paddingHorizontal: withTiming(isMenuOpen ? '7%' : '0%'),
        paddingVertical: withTiming(isMenuOpen ? '5%' : '3%'),
        transform: [{ translateX: withTiming(isMenuOpen ? (width * .6) : 0, { duration: 500 }) }]
    }))
    const _onHide = useCallback(() => setIsMenuOpen(prevState => !prevState), []);
    const _listMenuPress = index => {
        log(index)
        switch (index) {
            case 0:
                log('masuk sibi lho 0')
                refPagerView.current.setPageWithoutAnimation(index)
                // ballik ke  home
                break;
            case 1:
                log('masuk sibi lho 1')
                // buat form pencarian nama yang pake aplikasi ini.
                // ada fitur add buat nambah follower
                break;
            case 2:
                log('masuk sibi lho 2')
                // nanti di pake cari temen yang ada disekitar, tapi yaudah diemin dulu aja
                break;
            case 3:

                log('masuk sibi lho 3')
                refPagerView.current.setPageWithoutAnimation(index)
                // setting radius, tema, hapus data dll, dll
                break;
            case 4:
                log('masuk sibi lho 4')
                // logout aja
                break;
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <StatusBar backgroundColor={isMenuOpen ? colors.shark : colors.zircon} barStyle={isMenuOpen ? 'light-content' : 'dark-content'} />
            <SideListMenu {...props} listMenuPress={_listMenuPress} onHideMenu={_onHide} />
            <Animated.View style={[pageSizeStyle, {
                position: 'absolute', alignSelf: 'center', backgroundColor: colors.zircon,
                shadowColor: colors.alabaster, shadowOffset: { width: 0, height: 3, }, shadowOpacity: 0.27, shadowRadius: 4.65, elevation: 6,
            }]} pointerEvents={isMenuOpen ? 'none' : 'auto'}>
                <PagerView
                    ref={refPagerView}
                    style={{ flex: 1 }}
                    initialPage={0}
                    scrollEnabled={false}>
                    <Home {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} key={0} />
                    <Setting {...props} onHideMenu={_onHide} menuOpen={isMenuOpen} key={3} />
                </PagerView>


                {isMenuOpen && <View style={{ borderRadius: 20, ...StyleSheet.absoluteFill }} />}
            </Animated.View>
        </View >
    )
})