import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default props => <KeyboardAwareScrollView
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    style={{
        flex: 1,
        alignContent: 'center',
    }}>
    {props.children}
</KeyboardAwareScrollView>