import { View, Dimensions, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { log } from '@Utils'
import { useTheme, TextInput, Button } from 'react-native-paper';
import { MyText, PageWrapper, MyModal } from '@Atoms'
import { BlurView } from "@react-native-community/blur";

export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window');
    const refMyModal = useRef(<MyModal />)
    const onPressRegister = () => {
        log('onPressRegister')
        refMyModal.current.toggle()
    }
    useEffect(() => {
        log('Mount Login')
        return () => {
            log('Unmount Login')
        }
    }, [])
    return (
        <PageWrapper>
            <StatusBar translucent backgroundColor={`transparent`} barStyle={'light-content'} />
            <ImageBackground
                source={{ uri: `https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=688&q=1250` }}
                style={{ height, width, backgroundColor: colors.zircon }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: .9, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: '5%', paddingVertical: '10%' }}>
                    <MyText fontSize={40} bold color={colors.zircon} opacity={.9} style={{ marginVertical: 15 }}>Turn <MyText fontSize={40} bold color={colors.caribbeanGreen} strikeThrough>wacana</MyText> into reality</MyText>
                    <View style={{ borderRadius: 15, overflow: "hidden", flex: 1, width: "100%" }}>
                        <BlurView
                            blurType={"dark"}
                            blurAmount={5}
                            reducedTransparencyFallbackColor="transparent"
                            style={{ flex: 1 }}>
                            <View style={{ flex: 1, backgroundColor: 'transparent', padding: '5%', justifyContent: 'center' }}>
                                <MyText fontSize={35} color={colors.zircon} opacity={.9} style={{ marginVertical: 5 }}>Hi!</MyText>
                                <MyText small color={colors.zircon} opacity={.9} style={{ marginBottom: 20 }}>Gak punya akun?
                                    <MyText small bold color={colors.caribbeanGreen} onPress={onPressRegister}> sini daftar dulu.</MyText>
                                </MyText>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        placeholderTextColor={`${colors.shark}cd`}
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
                                        style={{ backgroundColor: colors.zircon, opacity: .9, fontSize: 12 }}
                                    />
                                </View>
                                <View style={{ width: '100%', marginVertical: 5 }}>
                                    <TextInput
                                        placeholderTextColor={`${colors.shark}cd`}
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
                                        style={{ backgroundColor: colors.zircon, opacity: .9, fontSize: 12 }}
                                        secureTextEntry
                                    />
                                </View>
                                <View style={{ width: '100%', marginVertical: 20 }}>
                                    <Button
                                        mode="contained"
                                        labelStyle={{ color: colors.zircon, fontWeight: 'bold', fontFamily: 'ReadexProRegular', fontSize: 14 }}
                                        contentStyle={{ height: 50, opacity: .9 }}
                                        onPress={() => replace('Main')}
                                        theme={{ colors: { primary: colors.caribbeanGreen } }}>
                                        Punten
                                    </Button>
                                </View>
                                <MyText center small color={colors.zircon} opacity={.9} style={{ marginVertical: 15 }}>Gak bisa masuk?
                                    <MyText onPress={() => alert('Kasian deh')} small bold color={colors.caribbeanGreen}> mending kesini deh.</MyText>
                                </MyText>
                            </View>
                        </BlurView>
                    </View>
                </View>
            </ImageBackground>
            <MyModal ref={refMyModal}>
                <MyText xLarge bold color={colors.shark} opacity={.9} style={{ marginTop: 15 }}>Sign Up</MyText>
                <MyText small bold color={`${colors.shark}aa`} style={{ marginVertical: 10 }}>Kayaknya kamu belum punya akun ya?, kalau gitu daftar dulu aja.</MyText>
                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        placeholderTextColor={`${colors.shark}cd`}
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
                        mode={'outlined'} placeholder={'Avatar'}
                        style={{ backgroundColor: `${colors.shark}11`, opacity: .9, fontSize: 12 }}
                        secureTextEntry
                    />
                </View>
                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        placeholderTextColor={`${colors.shark}cd`}
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
                        style={{ backgroundColor: `${colors.shark}11`, opacity: .9, fontSize: 12 }}
                    />
                </View>
                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        placeholderTextColor={`${colors.shark}cd`}
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
                        mode={'outlined'} placeholder={'Email'}
                        style={{ backgroundColor: `${colors.shark}11`, opacity: .9, fontSize: 12 }}
                    />
                </View>
                <View style={{ width: '100%', marginVertical: 5 }}>
                    <TextInput
                        placeholderTextColor={`${colors.shark}cd`}
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
                        style={{ backgroundColor: `${colors.shark}11`, opacity: .9, fontSize: 12 }}
                        secureTextEntry
                    />
                </View>
                <MyText small color={`${colors.shark}aa`} opacity={.9} style={{ marginVertical: 15 }}>Dengan memilih Setuju dan lanjutkan di bawah, saya setuju untuk
                    <MyText onPress={() => log('Reset')} small bold color={colors.caribbeanGreen}> Ketentuan Layanan dan Kebijakan Privasi.</MyText>
                </MyText>
                <View style={{ width: '100%', marginBottom: 20, marginTop: 5 }}>
                    <Button
                        mode="contained"
                        labelStyle={{ color: `${colors.shark}aa`, fontWeight: 'bold', fontFamily: 'ReadexProRegular', fontSize: 14 }}
                        contentStyle={{ height: 50, opacity: .9 }}
                        onPress={() => replace('Main')}
                        theme={{ colors: { primary: colors.caribbeanGreen } }}>
                        Punten
                    </Button>
                </View>
            </MyModal>
        </PageWrapper>

    )
}