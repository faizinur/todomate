import { View, Dimensions, ImageBackground, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import { useTheme, Button } from 'react-native-paper';
import { MyText } from '@Atoms';
import { log } from '@Utils'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, {
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
export default ({ onComplete }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('screen')

    const onBoardingData = [
        {
            color: colors.lavenderRose,
            title: 'Buat Aktifitasmu',
            subtitle: 'bisa Buat Aktifitasmu lho!. bisa Buat Aktifitasmu lho!. bisa Buat Aktifitasmu lho!.',
            img: 'https://images.unsplash.com/photo-1467139701929-18c0d27a7516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=2340&q=2400',
        },
        {
            color: colors.fuchsiaBlue,
            title: 'Undang Temanmu!',
            subtitle: 'bisa undang teman buat beraktifivats lho!. bisa undang teman buat beraktifivats lho!. bisa undang teman buat beraktifivats lho!.',
            img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=2340&q=2400',
        },
        {
            color: colors.jaffa,
            title: 'Lengkapi momenmu',
            subtitle: 'lengakapi momen serumu dengan foto dan cerita!. lengakapi momen serumu dengan foto dan cerita!. lengakapi momen serumu dengan foto dan cerita!.',
            img: 'https://images.unsplash.com/photo-1573184426556-05c59aca2e3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=2340&q=2400',
        },
    ];
    const [activeOnBoardingIndex, setActiveOnBoardingIndex] = useState(0);

    const seletedScreen = useMemo(() => onBoardingData[activeOnBoardingIndex], [activeOnBoardingIndex])


    const previndex = () => setActiveOnBoardingIndex(prevState => prevState - 1)
    const nextindex = () => setActiveOnBoardingIndex(prevState => prevState + 1)


    useEffect(() => {
        log('Mount OnBoarding')
        return () => {
            log('Unmount OnBoarding')
        }
    }, [])
    return (
        <View style={{ width, height }}>
            <StatusBar translucent backgroundColor={`transparent`} barStyle={'light-content'} />
            <ImageBackground
                onLoadStart={() => log('load start')}
                onLoadEnd={() => log('load end')}
                source={{ uri: seletedScreen.img }}
                style={{ height: height - StatusBar.currentHeight, width, backgroundColor: colors.zircon, justifyContent: 'flex-end', alignItems: 'center' }}
                resizeMethod={'resize'}
                imageStyle={{ opacity: 1, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <LinearGradient start={{ x: .5, y: 0 }} colors={['transparent', seletedScreen.color]} style={{ height: '90%', width: '100%' }}>
                    <View style={{ flex: 2 }} />
                    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center', padding: '5%' }}>
                        <MyText center fontSize={30} numberOfLines={5} color={colors.zircon}>{seletedScreen.title}</MyText>
                        <MyText center fontSize={13} numberOfLines={5} color={colors.zircon}>{seletedScreen.subtitle}</MyText>
                        <Button
                            mode="contained"
                            labelStyle={{ color: colors.zircon, fontWeight: 'bold', fontFamily: 'ReadexProRegular', fontSize: 12 }}
                            contentStyle={{ height: 40, opacity: .9 }}
                            onPress={onComplete}
                            theme={{ colors: { primary: seletedScreen.color } }}>
                            langsung ajalah
                        </Button>
                    </View>
                    <View style={{ height: 60, flexDirection: 'row', marginBottom: 12 }}>
                        <TouchableOpacity disabled={activeOnBoardingIndex == 0} onPress={previndex} style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name={"chevron-left"} size={35} opacity={.65} color={activeOnBoardingIndex == 0 ? 'transparent' : colors.zircon} />
                        </TouchableOpacity>
                        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            {onBoardingData.map((_, index) => <Animated.View key={`screen${index}`} style={[useAnimatedStyle(() => ({ width: withTiming((index == activeOnBoardingIndex ? 4 : 20), { duration: 300 }) })), { backgroundColor: colors.zircon, marginHorizontal: 4, borderRadius: 4, height: 4 }]} />)}
                        </View>
                        <TouchableOpacity disabled={activeOnBoardingIndex == 2} onPress={nextindex} style={{ width: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name={"chevron-right"} size={35} opacity={.65} color={activeOnBoardingIndex == 2 ? 'transparent' : colors.zircon} />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View >
    )
}
