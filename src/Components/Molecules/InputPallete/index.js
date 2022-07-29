import { log } from '@Utils';
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { TextInput, Button, useTheme, Chip } from 'react-native-paper';
import { MyText } from '@Atoms';
import { View, TouchableOpacity, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const MyTextInput = (props) => {
    // color
    let value = typeof props.value === 'undefined' ? '' : props.value;
    const defaultColor = props.error ? props.theme.error : props.theme.secondary;
    const defaultIconColor = props.error ? props.theme.error : JSON.stringify(value) === '""' ? props.theme.placeholderAlt : props.theme.secondary;
    const placeholderColor = props.error ? `${props.theme.error}cd` : `${props.theme.placeholder}77`;
    const [secureText, setSecureText] = useState(props?.secureTextEntry || false)
    const display = props?.display || 'flex'
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
            <View style={{ width: '100%', marginVertical: 5, display }}>
                <TextInput
                    {...props.register}
                    onBlur={props.onBlur}
                    onChangeText={props.onChangeText}
                    value={value}
                    key={props.id}
                    placeholderTextColor={placeholderColor}
                    theme={{
                        colors: { primary: defaultColor, text: `${props.theme.placeholder}ef` },
                        fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
                    }}
                    mode={'outlined'} placeholder={props.label}
                    style={{ backgroundColor: props.theme.primary, opacity: .9, fontSize: 12, paddingLeft: 'right' in props ? 35 : 0, paddingRight: 'left' in props ? 60 : 0 }}
                    left={'left' in props && <></>}
                    right={'right' in props && <></>}
                    secureTextEntry={secureText}
                    numberOfLines={'numberOfLines' in props ? props.numberOfLines : 1}
                    multiline={'numberOfLines' in props}
                />
                {/* bagian kanan */}
                {('numberOfLines' in props == false && 'right' in props) && <View style={{ position: 'absolute', right: 3.4, top: 21, width: 60, left: 0, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <Icon name={props.right} size={25} color={props.theme.secondary} />
                </View>}
                {/* kecuali textarea dan kalau textnya terisi maka print tombol sebelah kanan */}
                {('numberOfLines' in props == false && value.length > 0) && <View style={{ position: 'absolute', right: 3.4, top: 8.6, width: 60, height: 53, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                    <TextInput.Icon onPress={_onRightPress} name={'secureTextEntry' in props ? (secureText ? 'eye-outline' : 'eye-off-outline') : 'close-circle'} size={20} color={defaultIconColor} />
                </View>}
                {props.error && <MyText small left color={props.theme.error} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
            </View>
            {props?.display == 'none' && <View style={{ position: 'absolute', top: -1, left: -1, height: 2, width: 2, backgroundColor: props.theme.primary }} />}
        </>
    )
}

const MyButton = (props) => {
    const disabled = props?.loading == true ? true : props?.disabled || false;
    const backgroundColor = props?.disabled ? props.theme.placeholderAlt : props.theme.secondary;
    const labelColor = props?.disabled ? props.theme.primary : props.theme.primaryAlt;
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
    return <View style={{ height: 150, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={.8} onPress={() => log('ambil foto')} style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: `${props.theme.placeholder}33`, justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={"camera"} size={30} color={`${props.theme.placeholder}77`} />
        </TouchableOpacity>
        {props.error && <MyText small left color={props.theme.error} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
    </View>
}

const MyColorScheme = props => {
    return <View style={{ height: 60, width: '100%', marginVertical: 10 }}>
        <MyText small opacity={.7}>{props.label} </MyText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flexGrow: 1, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                {props?.defaultDataset[props?.type]?.map(color =>
                    <View key={color} style={{ borderWidth: 5, borderColor: props.value == color ? color : 'transparent', width: 25, height: 25, borderRadius: 13, marginHorizontal: 8, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => props?.onSelectedColor(color)} activeOpacity={.7} style={{ width: 21, height: 21, borderRadius: 13, backgroundColor: color, borderColor: 'white', borderWidth: 2, alignSelf: "center" }} />
                    </View>)}
            </View>
            <View style={{ width: 30, marginLeft: 15, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput.Icon onPress={() => log('tambah warna')} name={"plus-circle"} size={25} color={`${props.theme.placeholder}77`} />
            </View>
        </ScrollView>
        {props.error && <MyText small left color={props.theme.error} style={{ marginVertical: 5 }}>* {props.errorText}</MyText>}
    </View >
}

const MyTaskType = props => {
    return <View style={{ height: 70, width: '100%', marginVertical: 0 }}>
        <MyText small opacity={.7}>{props.label}</MyText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row' }} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}>
            {props?.defaultDataset[props?.type]?.map(task => <Chip key={task.code} mode={'outlined'}
                style={{ marginHorizontal: 8, backgroundColor: task.code == props.value ? `${props.theme.secondary}cd` : props.theme.primary, borderWidth: .8, borderColor: task.code == props.value ? props.theme.primary : `${props.theme.placeholder}cd`, height: 33 }}
                textStyle={{ fontSize: 10, fontWeight: task.code == props.value ? 'bold' : '600', color: task.code == props.value ? props.theme.primary : `${props.theme.placeholder}cd` }}
                onPress={() => props?.onselectedChips(task.code)}
                selectedColor={props.theme.secondary}
                theme={{
                    colors: { primary: props.theme.secondary },
                    fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
                }}> {task.description} </Chip>)}
        </ScrollView>
    </View>
}


const MyTagText = (props) => {
    const refTagText = useRef(<TextInput />);
    const [textTag, setTextTag] = useState('')
    let timeOutRef = null;
    const _onChangeText = text => {
        clearTimeout(timeOutRef)
        timeOutRef = setTimeout(() => { setTextTag(text); }, 700)
    }

    const filteredPeople = useMemo(() => {
        return props?.defaultDataset[props?.type]
            .filter(name => name.toLowerCase().includes(textTag.toLowerCase()))
            .sort((next, prev) => JSON.parse(props.value || '[]').includes(prev))
    }, [textTag, props.value]);

    const _onTagPeople = people => {
        let selectedPeople = JSON.parse(props.value || '[]');
        if ([...selectedPeople].includes(people)) {
            selectedPeople = [...new Set([...selectedPeople].filter(name => name.toLowerCase() !== people.toLowerCase()))];
        } else {
            selectedPeople = [...new Set([...selectedPeople, people])];
        }
        props?.onselectedPeople(JSON.stringify(selectedPeople));
        refTagText?.current?.clear()
    }

    return <View style={{ width: '100%', marginVertical: 5 }}>
        <TextInput
            ref={refTagText}
            key={props.id}
            onChangeText={_onChangeText}
            placeholderTextColor={`${props.theme.placeholder}77`}
            theme={{
                colors: { primary: props.theme.secondary, text: `${props.theme.placeholder}ef` },
                fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
            }}
            mode={'outlined'} placeholder={props.label}
            style={{ backgroundColor: props.theme.primary, opacity: .9, fontSize: 12 }}
        />
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1, flexDirection: 'row' }}
            contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', height: 40, marginVertical: 3 }}>
            {filteredPeople.map(name => <Chip key={`chip-${name}`} mode={'outlined'}
                style={{ marginHorizontal: 8, height: 33, borderWidth: .8, justifyContent: 'center', borderColor: JSON.parse(props.value || '[]').includes(name) ? props.theme.secondary : `${props.theme.placeholder}cd`, backgroundColor: JSON.parse(props.value || '[]').includes(name) ? props.theme.secondary : props.theme.primary }}
                textStyle={{ fontSize: 10, fontWeight: JSON.parse(props.value || '[]').includes(name) ? 'bold' : '600', color: JSON.parse(props.value || '[]').includes(name) ? props.theme.primary : `${props.theme.placeholder}cd` }}
                closeIcon={<TextInput.Icon name='close'></TextInput.Icon>}
                onClose={() => _onTagPeople(name)}
                onPress={() => _onTagPeople(name)}
                avatar={<Icon name={"face-man-profile"} size={24} color={JSON.parse(props.value || '[]').includes(name) ? props.theme.primary : `${props.theme.placeholder}cd`} />}
                selectedColor={props.theme.secondary}
                theme={{
                    colors: { primary: props.theme.secondary },
                    fonts: { regular: { fontFamily: 'ReadexProRegular', fontWeight: '600' } }
                }}> {name} </Chip>)}
        </ScrollView>
        <MyTextInput {...props} display={'none'} />
    </View>
}

export {
    MyTextInput,
    MyButton,
    MyAvatar,
    MyColorScheme,
    MyTaskType,
    MyTagText,
}
