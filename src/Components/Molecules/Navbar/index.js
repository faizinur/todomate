import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { MyText, BtnMenu } from '@Atoms';
import { useTheme } from 'react-native-paper';

export default memo(({ leftPress, title = '', Left = () => <></> }) => {
    const { colors } = useTheme();
    return (
        <View style={{ height: 60, width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: colors.zircon }}>
            <View style={{ width: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                <BtnMenu onPress={leftPress} borderColor={`${colors.shark}bb`} />
            </View>
            <View style={{ flexGrow: 1 }}>
                <MyText center bold>{title}</MyText>
            </View>
            {<Left />}
        </View>
    )
});