import { View, Modal, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { forwardRef, memo, useCallback, useImperativeHandle, useState } from 'react'
import { MyText } from '@Atoms';
import { useTheme } from 'react-native-paper';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { log } from '@Utils';
export default memo(forwardRef((props, ref) => {
    const { colors } = useTheme();
    const [modalVisible, setModalVisible] = useState(false);
    const { height } = Dimensions.get('window');
    useImperativeHandle(ref, () => ({
        toggle,
    }));
    const toggle = useCallback(() => {
        if (modalVisible) {
            // log('tutup')
            contentValue.value = { backgroundColor: `transparent` }
            setTimeout(() => setModalVisible(prevState => !prevState), 250)
        } else {
            // log('buka')
            setModalVisible(prevState => !prevState)
            setTimeout(() => contentValue.value = { backgroundColor: `${colors.shark}bb` }, 250);
        }
    }, [modalVisible])

    const contentValue = useSharedValue({ backgroundColor: 'transparent' })
    const slideUpContentStyle = useAnimatedStyle(() => ({
        backgroundColor: withTiming(contentValue.value.backgroundColor, { duration: 200 })
    }))

    const getValidChildren = children => React.Children.toArray(children).filter((child) => React.isValidElement(child))
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggle}
            hardwareAccelerated={true}>
            <Animated.View style={[slideUpContentStyle, { flex: 1 }]}>
                <TouchableOpacity style={{ flex: 1 }} activeOpacity={.8} onPress={toggle} />
                <View style={{ width: '100%', backgroundColor: colors.zircon, paddingHorizontal: '5%', paddingTop: '5%', borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {getValidChildren(props.children)}
                    </ScrollView>
                </View>
            </Animated.View>
        </Modal >
    )
}))

