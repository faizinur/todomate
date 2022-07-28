import { View, Dimensions, ImageBackground, StatusBar } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { log } from '@Utils'
import { useTheme } from 'react-native-paper';
import { MyText, PageWrapper, MyModal } from '@Atoms'
import { BlurView } from "@react-native-community/blur";
import { Form } from '@Organisms';
import { INPUT_LOGIN_LIST, FORM_LOGIN_NAME } from './inputLogin';
import { INPUT_REGISTER_LIST, FORM_REGISTER_NAME } from './inputRegister';
export default ({ navigation: { replace } }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window');
    const refMyModal = useRef(<MyModal />)
    const refLoginForm = useRef(<Form />)
    const refRegisterForm = useRef(<Form />)

    const onPressRegister = () => {
        log('onPressRegister')
        refMyModal.current.toggle()
    }
    const _submitLogin = (data) => {
        log('_submitLogin', data)
        replace('Main')
    }
    const _submitRegsiter = (data) => {
        log('_submitRegsiter', data)
    }
    useEffect(() => {
        log('Mount Login')
        return () => {
            log('Unmount Login')
        }
    }, [])
    return (
        <View style={{ width, height, backgroundColor: 'red' }}>
            <StatusBar translucent backgroundColor={`transparent`} barStyle={'light-content'} />
            <ImageBackground
                source={{ uri: `https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&w=688&q=1250` }}
                style={{ height: height + StatusBar.currentHeight, width, backgroundColor: colors.zircon }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: .9, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'flex-start', paddingHorizontal: '5%', paddingVertical: '10%' }}>
                    <View style={{ flex: .6, justifyContent: 'center', alignItems: 'center' }}>
                        <MyText fontSize={45} bold color={colors.zircon} numberofLines={4} opacity={.9} style={{ marginVertical: 15 }}>Turn <MyText fontSize={40} numberofLines={4} bold color={colors.caribbeanGreen} strikeThrough>wacana</MyText> into reality</MyText>
                    </View>
                    <View style={{ borderRadius: 15, overflow: "hidden", flex: 1, width: "100%" }}>
                        <PageWrapper>
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
                                    <Form
                                        ref={refLoginForm}
                                        formname={FORM_LOGIN_NAME}
                                        inputList={INPUT_LOGIN_LIST}
                                        onFormSubmit={_submitLogin}
                                        submitLabel={'punten'}
                                    />
                                    <MyText center small color={colors.zircon} opacity={.9} style={{ marginVertical: 15 }}>Gak bisa masuk?
                                        <MyText onPress={() => alert('Kasian deh')} small bold color={colors.caribbeanGreen}> mending kesini deh.</MyText>
                                    </MyText>
                                </View>
                            </BlurView>
                        </PageWrapper>
                    </View>
                </View>
            </ImageBackground>

            <MyModal ref={refMyModal}>
                <MyText xLarge bold color={colors.shark} opacity={.9} style={{ marginTop: 15 }}>Sign Up</MyText>
                <MyText small bold color={`${colors.shark}aa`} style={{ marginVertical: 10 }}>Kayaknya kamu belum punya akun ya?, kalau gitu daftar dulu aja.</MyText>
                <Form
                    ref={refRegisterForm}
                    formname={FORM_REGISTER_NAME}
                    inputList={INPUT_REGISTER_LIST}
                    onFormSubmit={_submitRegsiter}
                    submitLabel={'punten'}
                />
                <MyText small color={`${colors.shark}aa`} opacity={.9} style={{ marginBottom: 15 }}>Dengan memilih Setuju dan lanjutkan di bawah, saya setuju untuk
                    <MyText onPress={() => log('Reset')} small bold color={colors.caribbeanGreen}> Ketentuan Layanan dan Kebijakan Privasi.</MyText>
                </MyText>
            </MyModal>
        </View>
    )
}