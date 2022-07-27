import { View, Dimensions, ImageBackground, StatusBar, Text } from 'react-native'
import React, { useEffect } from 'react'
import { log } from '@Utils'
import { useTheme, TextInput, Button } from 'react-native-paper';
import { MyText, PageWrapper } from '@Atoms'
import { BlurView } from "@react-native-community/blur";

export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window')
    useEffect(() => {
        log('Mount Login')
        return () => {
            log('Unmount Login')
        }
    }, [])
    return (
        <PageWrapper>
            <StatusBar backgroundColor={`${colors.shark}de`} barStyle={'light-content'} />
            <ImageBackground
                // source={{ uri: `https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80` }}
                // source={{ uri: `https://images.unsplash.com/photo-1468434453985-b1ca3b555f00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=1170&q=1250` }}
                source={{ uri: `https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=688&q=1250` }}
                style={{ height: height - StatusBar.currentHeight, width, backgroundColor: colors.zircon }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: .9, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: '5%', paddingVertical: '10%' }}>
                    <MyText fontSize={45} bold color={colors.zircon} opacity={.8} numberOfLines={6}>Bring wacana to reality{`\n\n`}<MyText large color={colors.shark} opacity={.8}>    </MyText></MyText>
                    <View style={{ borderRadius: 15, overflow: "hidden", flex: 1, width: "100%" }}>
                        <BlurView
                            blurType={"dark"}
                            blurAmount={5}
                            reducedTransparencyFallbackColor="transparent"
                            style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: '5%', justifyContent: 'center' }}>
                                <MyText fontSize={35} color={colors.zircon} opacity={.9} style={{ marginVertical: 5 }}>Hi!</MyText>
                                <MyText small color={colors.zircon} opacity={.9} style={{ marginBottom: 20 }}>Gak punya akun? <MyText small color={colors.caribbeanGreen} onPress={() => log('Daftar')} >sini daftar dulu.</MyText></MyText>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        theme={{
                                            colors: {
                                                primary: colors.caribbeanGreen
                                            },
                                            fonts: {
                                                regular: {
                                                    fontFamily: 'ReadexProRegular',
                                                    fontWeight: '600'
                                                }
                                            }
                                        }}
                                        mode={'outlined'} placeholder={'Nama Pengguna'}
                                        style={{ backgroundColor: colors.zircon, fontSize: 12 }}
                                    />
                                </View>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        theme={{
                                            colors: {
                                                primary: colors.caribbeanGreen
                                            },
                                            fonts: {
                                                regular: {
                                                    fontFamily: 'ReadexProRegular',
                                                    fontWeight: '600'
                                                }
                                            }
                                        }}
                                        mode={'outlined'} placeholder={'Kata Sandi'}
                                        style={{ backgroundColor: colors.zircon, fontSize: 12 }}
                                        secureTextEntry
                                    />
                                </View>
                                <View style={{ width: '100%', marginVertical: 20 }}>
                                    <Button
                                        mode="contained"
                                        labelStyle={{ color: colors.zircon, fontWeight: 'bold', fontFamily: 'ReadexProRegular', fontSize: 14 }}
                                        contentStyle={{ height: 50 }}
                                        onPress={() => replace('Main')}
                                        theme={{ colors: { primary: colors.caribbeanGreen } }}>
                                        Punten
                                    </Button>
                                </View>
                                <MyText small color={colors.zircon} opacity={.9} style={{ marginVertical: 15 }}>Gak bisa masuk? <MyText onPress={() => log('Reset')} small color={colors.caribbeanGreen}>kesini dulu deh.</MyText></MyText>
                            </View>
                        </BlurView>
                    </View>
                </View>
            </ImageBackground>
        </PageWrapper>

    )
}