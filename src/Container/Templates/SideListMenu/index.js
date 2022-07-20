import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText } from '@Atoms'
export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: colors.shark }}>
            <TouchableOpacity activeOpacity={.8} onPress={onHideMenu} style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'menu-open'} size={25} color={colors.zircon} />
            </TouchableOpacity>

            <View style={{ padding: '5%' }}>
                <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', marginVertical: 20 }}>
                    <Image source={{ uri: 'https://placekitten.com/640/360' }} style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: colors.zircon, marginRight: 10 }} />
                    <MyText large bold color={colors.zircon}>Username JonDoe</MyText>
                </View>

                <MyText xSmall color={colors.zircon}>Last Login : 2022-06-09</MyText>

                <View style={{ marginVertical: 20 }}>
                    <TouchableOpacity activeOpacity={.8} onPress={onHideMenu} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'home'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>Home</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'account'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>profile</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'map-marker'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>Nearby</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'map-marker'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>Connect</MyText>
                    </TouchableOpacity>
                    <View style={{ borderBottomColor: colors.zircon, borderBottomWidth: .3, width: '50%' }} />
                    <TouchableOpacity activeOpacity={.8} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'cog'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>Setting</MyText>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={.8} style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                        <Icon name={'exit-to-app'} size={16} color={colors.zircon} style={{ marginRight: 10 }} />
                        <MyText large color={colors.zircon}>Logout</MyText>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

