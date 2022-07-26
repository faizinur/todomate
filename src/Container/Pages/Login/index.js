import { View, Dimensions, ImageBackground, StatusBar, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { log } from '@Utils'
import { useTheme, TextInput, Button } from 'react-native-paper';
import { MyText, PageWrapper } from '@Atoms'

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
            <StatusBar hidden={true} />
            <ImageBackground
                source={{ uri: `https://images.unsplash.com/photo-1489641024260-20e5cb3ee4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80` }}
                style={{ height, width, backgroundColor: colors.zircon }}
                resizeMethod={'scale'}
                imageStyle={{ opacity: .8, backgroundColor: colors.shark }}
                resizeMode={'cover'}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingHorizontal: '5%' }}>
                    <MyText fontSize={45} bold color={colors.shark} opacity={.8} numberOfLines={6}>Bring wacana to reality{`\n\n`}<MyText large color={colors.shark} opacity={.8}>wake up early, move your body, just make it!</MyText></MyText>
                </View>
                <View style={{ flex: .8, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: colors.zircon, paddingHorizontal: '5%', padding: '5%' }}>
                    <MyText xLarge color={colors.shark}>Login</MyText>
                    <View style={{ flex: 1, padding: '2%' }}>
                        <TextInput
                            theme={{
                                fonts: {
                                    regular: {
                                        fontFamily: 'ReadexProRegular',
                                        fontWeight: '600'
                                    }
                                }
                            }}
                            mode={'outlined'} placeholder={'Nama Pengguna'}
                            style={{ backgroundColor: colors.zircon, marginVertical: 5 }}
                        />
                        <TextInput
                            theme={{
                                fonts: {
                                    regular: {
                                        fontFamily: 'ReadexProRegular',
                                        fontWeight: '600'
                                    }
                                }
                            }}
                            mode={'outlined'} placeholder={'password'}
                            style={{ backgroundColor: colors.zircon, marginVertical: 5 }}
                            secureTextEntry
                        />
                        <Button
                            mode="contained" labelStyle={{ color: colors.shark }} style={{ marginTop: '5%', marginBottom: '2%', }} onPress={() => replace('Main')} >
                            Ayo Click aku!
                        </Button>
                        <MyText small color={colors.shark} opacity={.5}>Masih inget Passwordnya gak?</MyText>
                    </View>
                    <MyText small color={colors.shark} center opacity={.5}>Gak Punya Akun? daftar sini aja.</MyText>
                </View>
            </ImageBackground>
        </PageWrapper>

    )
}
