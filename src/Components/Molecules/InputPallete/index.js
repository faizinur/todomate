import { log } from '@Utils';
import React, { useState, useCallback } from 'react';
import { TextInput, Button, useTheme, Chip } from 'react-native-paper';
import { MyText } from '@Atoms';
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MyTextInput = (props) => {
    const { colors } = useTheme();
    // color
    let value = typeof props.value === 'undefined' ? '' : props.value;
    const defaultColor = props.error ? colors.valencia : colors.caribbeanGreen;
    const defaultIconColor = props.error ? colors.valencia : JSON.stringify(value) === '""' ? colors.lightgray : colors.caribbeanGreen;
    const placeholderColor = props.error ? `${colors.valencia}cd` : `${colors.shark}cd`;
    const [secureText, setSecureText] = useState(props?.secureTextEntry || false)
    const _onRightPress = useCallback(() => {
        log('_onLeftPress');
        if ('secureTextEntry' in props) {
            setSecureText(prevState => !prevState);
        } else {
            props.onResetField(props.name)
        }
    }, [secureText])
    return (
        <>
            <View style={{ width: '100%', marginVertical: 5 }}>
                <TextInput
                    {...props.register}
                    onBlur={props.onBlur}
                    onChangeText={props.onChangeText}
                    value={value}
                    key={props.id}
                    placeholderTextColor={placeholderColor}
                    theme={{
                        colors: { primary: defaultColor },
                        fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
                    }}
                    mode={'outlined'} placeholder={props.label}
                    style={{ backgroundColor: colors.zircon, opacity: .9, fontSize: 12 }}
                    right={<></>}
                    left={'left' in props && <></>}
                    secureTextEntry={secureText}
                    numberOfLines={'numberOfLines' in props ? props.numberOfLines : 1}
                    multiline={'numberOfLines' in props}
                />
                {/* kecuali textarea dan kalau textnya terisi maka print tombol sebelah kanan */}
                {('numberOfLines' in props == false && value.length > 0) && <View style={{ position: 'absolute', right: 3.4, top: 8.6, width: 60, height: 53, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <TextInput.Icon onPress={_onRightPress} name={'secureTextEntry' in props ? (secureText ? 'eye-outline' : 'eye-off-outline') : 'close-circle'} size={20} color={defaultIconColor} />
                </View>}
                {props.error && <MyText small left color={colors.valencia} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
            </View>
            {/* {('appendNode' in props && Array.isArray(props.appendNode)) && props.appendNode.map(Node => <View key={'myUniqueKey'}>{Node}</View>)} */}
        </>
    )
}


const MyButton = (props) => {
    const { colors } = useTheme();
    const disabled = props?.loading == true ? true : props?.disabled || false;
    const backgroundColor = props?.disabled ? colors.lightgray : colors.caribbeanGreen;
    const labelColor = props?.disabled ? colors.zircon : colors.white;
    return (
        <View style={{ width: '100%', marginVertical: 20 }}>
            <Button
                disabled={disabled}
                mode="contained"
                labelStyle={{ color: labelColor, fontWeight: 'bold', fontFamily: 'ReadexProRegular', fontSize: 14 }}
                contentStyle={{ height: 50, opacity: .9 }}
                onPress={props?.onPress}
                theme={{ colors: { primary: backgroundColor } }}>
                {props?.label}
            </Button>
        </View>
    )
}


const MyAvatar = props => {
    const { colors } = useTheme();
    return <View style={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={.8} onPress={() => log('ambil foto')} style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: `${colors.shark}33`, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={"camera"} size={30} color={`${colors.shark}77`} />
        </TouchableOpacity>
        {props.error && <MyText small left color={colors.valencia} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
    </View>
}


const MyColorList = props => {
    const { colors } = useTheme();
    return <View style={{ height: 66, width: '100%' }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <MyText small opacity={.7}>{props.label} </MyText>
            <View style={{ flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                {props.config.data.colors.map(color =>
                    <View key={color} style={{ borderWidth: 5, borderColor: props.value == color ? color : 'transparent', width: 25, height: 25, borderRadius: 13, justifyContent: 'center', alignItems: 'center', marginHorizontal: 8, }}>
                        <TouchableOpacity onPress={() => props?.onselectedColor(color)} activeOpacity={.7} style={{ width: 23, height: 23, borderRadius: 13, backgroundColor: color, borderColor: 'white', borderWidth: 2 }} />
                    </View>)}
            </View>
            <View style={{ width: 30, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput.Icon onPress={() => log('tambah warna')} name={"plus-circle"} size={25} color={`${colors.shark}77`} />
            </View>
        </ScrollView>
        {props.error && <MyText small left color={colors.valencia} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
    </View >
}

const MyTaskType = props => {
    const { colors } = useTheme();
    return <View style={{ height: 66, width: '100%', marginVertical: 10 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <MyText small opacity={.7}>{props.label}</MyText>
            {props.config.data.task.map(task => <Chip key={task.code} mode={'outlined'}
                style={{ marginHorizontal: 8, backgroundColor: task.code == props.value ? `${colors.caribbeanGreen}cd` : colors.zircon, borderWidth: .8, borderColor: task.code == props.value ? colors.zircon : `${colors.shark}cd`, width: 100, height: 33 }}
                textStyle={{ fontSize: 10, color: task.code == props.value ? colors.zircon : `${colors.shark}cd` }}
                onPress={() => props?.onselectedChips(task.code)}
                selectedColor={colors.caribbeanGreen}
                theme={{
                    colors: { primary: colors.caribbeanGreen },
                    fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
                }}> {task.description} </Chip>)}
        </ScrollView>
    </View>
}

export {
    MyTextInput,
    MyButton,
    MyAvatar,
    MyColorList,
    MyTaskType,
}
