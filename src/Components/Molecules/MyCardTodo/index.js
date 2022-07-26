import { View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import { MyText } from '@Atoms';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { log } from '@Utils';
import * as Animatable from 'react-native-animatable';
import moment from 'moment';
export default memo(props => {
    const { colors } = useTheme();
    return (
        <Animatable.View animation={"fadeIn"} duration={800 + (props.index * 200)} useNativeDriver>
            <TouchableOpacity activeOpacity={1}
                style={{ flex: 1, backgroundColor: colors.caribbeanGreen, minHeight: 130, width: '100%', borderRadius: 20, padding: 20, justifyContent: 'space-around', marginVertical: 5 }}>

                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <MyText large bold color={colors.shipGray}>{props.title}</MyText>
                        <MyText opacity={.8} color={colors.valencia}>{props.priority}</MyText>
                    </View>
                    <MyText small opacity={.7} color={colors.shipGray} numberOfLines={4}>{`\n`}   while nothing, doing something {`\n\n`}</MyText>
                </View>

                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                    <View>
                        <MyText xSmall opacity={.65} color={colors.shipGray} style={{ marginVertical: 2 }}><Icon name={"clock-outline"} /> {moment(props.tanggal).format('YYYY-MM-DD hh:mm:ss')}</MyText>
                        <MyText xSmall opacity={.65} color={colors.shipGray} style={{ marginVertical: 2 }}><Icon name={"account-group"} /> 2</MyText>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }}>
                        <TouchableOpacity activeOpacity={.7} onPress={props.onEdit}>
                            <Icon name={"pencil-outline"} size={20} opacity={.65} color={colors.shipGray} />
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={.7} onPress={props.onDone}>
                            <Icon name={"check"} size={20} opacity={.65} color={colors.shipGray} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </Animatable.View>
    )
})