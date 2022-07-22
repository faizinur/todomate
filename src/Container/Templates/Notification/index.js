import { View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useTheme } from 'react-native-paper';
import { Navbar } from '@Molecules';
import { MyText } from '@Atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { log } from '@Utils'

export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    return (<>
        <Navbar leftPress={onHideMenu} />
        <View style={{ flex: 1, paddingHorizontal: '5%', backgroundColor: colors.zircon }}>
            <MyText >Hai, Notification</MyText>
        </View>
    </>)
}
