import { View, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper';
import { Navbar } from '@Molecules';
import { MyText } from '@Atoms';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { log } from '@Utils'

export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window')
    useEffect(() => {
        log('Mount Setting')
        return () => {
            log('Unmount Setting')
        }
    }, [])
    return (
        <View style={{ width, height }}>
            <Navbar leftPress={onHideMenu} />
            <View style={{ flex: 1, paddingHorizontal: '5%' }}>
                <MyText opacity={.7} color={colors.shark}>Hey, ketemu lagi nih!</MyText>
                <MyText xLarge bold opacity={.8}>Kamu bisa liat Aktivitasmu disini </MyText>
            </View>
        </View>
    )
}
