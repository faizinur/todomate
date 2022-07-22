import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MyText } from '@Atoms'
export default ({ onHideMenu, listMenuPress }) => {
    const { colors } = useTheme();
    const listMenu = [
        { id: 0, title: 'Activity', icon: 'calendar-month-outline' },
        { id: 1, title: 'Connect', icon: 'account-star-outline' },
        { id: 2, title: 'Notification', icon: 'bell-outline' },
        { id: 3, title: 'Setting', icon: 'cog-outline' },
        { id: 4, title: 'Logout', icon: 'exit-to-app' },
    ]
    const renderListMenu = (({ item, index }) =>
        <>
            {item.title == 'Setting' && <View style={{ height: .3, width: '55%', marginVertical: '5%', marginHorizontal: '5%', backgroundColor: `${colors.zircon}30` }} />}
            <TouchableOpacity activeOpacity={.8} onPress={() => listMenuPress(index)}
                style={{ width: '70%', height: 50, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                <Icon name={item.icon} size={16} opacity={.65} color={colors.zircon} style={{ marginHorizontal: 10 }} />
                <MyText opacity={.65} color={colors.zircon}>{item.title}</MyText>
            </TouchableOpacity>
        </>
    )

    return (
        <View style={{ flex: 1, backgroundColor: colors.shark }}>
            <TouchableOpacity activeOpacity={.8} onPress={onHideMenu} style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'menu-open'} size={25} color={colors.zircon} />
            </TouchableOpacity>

            <View style={{ padding: '5%', flex: 1 }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: 20, width: '70%' }}>
                    <Image source={{ uri: 'https://placekitten.com/640/360' }} style={{ width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: `${colors.zircon}bb`, marginRight: 10 }} />
                    <View>
                        <MyText large bold color={colors.zircon} style={{ width: '70%' }}>Username Jhon Doe</MyText>
                        <MyText xSmall opacity={.65} color={colors.zircon}>Last Login : 2022-06-09</MyText>
                    </View>
                    <Icon name={'pencil-outline'} size={16} opacity={.65} color={colors.zircon} style={{ marginRight: 10 }} />
                </View>

                <FlatList
                    contentContainerStyle={{ marginVertical: 20 }}
                    data={listMenu}
                    keyExtractor={({ id }) => id}
                    renderItem={renderListMenu}
                />

                <View style={{ width: '100%' }}>
                    <MyText small center opacity={.65} color={colors.zircon} style={{ width: '70%', marginVertical: 5 }}>bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla</MyText>
                    <MyText xSmall center opacity={.65} color={colors.zircon} style={{ width: '70%', marginVertical: 5 }}>@2022 lagi gabut</MyText>
                </View>
            </View>
        </View>
    )
}

