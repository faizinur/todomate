import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText } from '@Atoms'
export default ({ onHideMenu, listMenuPress }) => {
    const { colors } = useTheme();
    const listMenu = [
        { id: 0, title: 'Home', icon: 'home-outline' },
        { id: 1, title: 'Connect', icon: 'account-star-outline' },
        { id: 2, title: 'Nearby', icon: 'map-marker-radius-outline' },
        { id: 3, title: 'Setting', icon: 'cog-outline' },
        { id: 4, title: 'Logout', icon: 'exit-to-app' },
    ]
    const renderListMenu = (({ item, index }) =>
        <>
            {item.title == 'Setting' && <View style={{ height: .3, width: '60%', backgroundColor: `${colors.zircon}30` }} />}
            <TouchableOpacity activeOpacity={.8} onPress={() => listMenuPress(index)}
                style={{ width: '60%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                <Icon name={item.icon} size={16} color={`${colors.zircon}60`} style={{ marginHorizontal: 10 }} />
                <MyText color={`${colors.zircon}bb`}>{item.title}</MyText>
            </TouchableOpacity>
        </>
    )

    return (
        <View style={{ flex: 1, backgroundColor: colors.shark }}>
            <TouchableOpacity activeOpacity={.8} onPress={onHideMenu} style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'menu-open'} size={25} color={colors.zircon} />
            </TouchableOpacity>

            <View style={{ padding: '5%', flex: 1 }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: 20, width: '60%' }}>
                    <Image source={{ uri: 'https://placekitten.com/640/360' }} style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: `${colors.zircon}bb`, marginRight: 10 }} />
                    <View>
                        <MyText large bold color={colors.zircon} style={{ width: '70%' }}>Username Jhon Doe</MyText>
                        <MyText xSmall color={`${colors.zircon}60`}>Last Login : 2022-06-09</MyText>
                    </View>
                    <Icon name={'pencil-outline'} size={16} color={`${colors.zircon}60`} style={{ marginRight: 10 }} />
                </View>

                <FlatList
                    contentContainerStyle={{ marginVertical: 20 }}
                    data={listMenu}
                    keyExtractor={({ id }) => id}
                    renderItem={renderListMenu}
                />

                <View style={{ width: '60%' }}>
                    <MyText small center color={`${colors.zircon}60`} style={{ width: '70%', marginVertical: 5 }}>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</MyText>
                    <MyText xSmall center color={`${colors.zircon}60`} style={{ width: '70%', marginVertical: 5 }}>@2022 lagi gabut</MyText>
                </View>
            </View>
        </View>
    )
}

