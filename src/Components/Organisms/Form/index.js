import React, { useCallback, useEffect, useImperativeHandle, forwardRef, useState } from 'react'
import { View, } from 'react-native'
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { MyText } from '@Atoms';
import { log } from '@Utils';
import { InputPallete } from '@Molecules';
import { useTheme } from 'react-native-paper';

export default forwardRef(({ formname = 'myForm', inputList = [], defaultValue = {}, onFormSubmit = () => { }, autoClear = false, submitLabel = '', loading = false, renderButton = undefined }, ref) => {

    //Forms
    const FORM_NAME = formname;
    let focusedInput = '';
    let populatedInputlist = inputList.map((inputList) => ({ ...inputList, [inputList.name]: inputList.name in defaultValue ? defaultValue.value : inputList.value }));
    let inputTypes = inputList.map(({ type }) => ({ type })).reduce((acc, { type }) => ([...new Set([...acc, type])]), [])
    let defaultDataset = {}
    if (inputTypes.includes('colorScheme')) {
        defaultDataset = { ...defaultDataset, colorScheme: ['#fbe114', '#4beed1', '#13d3fb', '#b6adff', '#fb1467', '#f5815c', '#148cfb', '#a949c1'] }
    }
    if (inputTypes.includes('tagText')) {
        defaultDataset = { ...defaultDataset, tagText: ['Jibril', 'Mikail', 'Israfil', 'Izrail', 'Munkar', 'Nakir', 'Raqib', 'Atid', 'Malik', 'Ridwan'] }
    }
    if (inputTypes.includes('chipTask')) {
        defaultDataset = {
            ...defaultDataset, chipTask: [
                { code: 'wajib', description: 'wajib' },
                { code: 'sunnah', description: 'sunnah' },
                { code: 'mubah', description: 'mubah' },
            ]
        }
    }
    const {
        register,
        control,
        handleSubmit,
        reset,
        setValue,
        getValues,
        trigger,
        setError,
        formState: { errors, isValid },
    } = useForm({ defaultValues: { [FORM_NAME]: populatedInputlist }, mode: 'onChange', reValidateMode: 'onChange', });
    const { fields } = useFieldArray({ control, name: FORM_NAME });

    const _onResetField = (name, value = '') => {
        setValue(name, value);
        trigger(name);
    }

    const _onSubmit = async serialized => {
        delete serialized[FORM_NAME];
        onFormSubmit(serialized);
        autoClear == true && reset();
    }

    const _setDefaultValue = useCallback(() => {
        if (JSON.stringify(defaultValue) == '{}') return false;
        Object.keys(defaultValue).map(key => {
            _onResetField(key, defaultValue[key])
            trigger(key)
        })
    }, [])



    //colors 
    const { colors } = useTheme();
    const [inputTheme, setInputTheme] = useState({
        primary: colors.zircon,
        primaryAlt: colors.white,
        secondary: colors.caribbeanGreen,
        placeholder: colors.shark,
        placeholderAlt: colors.lightgray,
        error: colors.valencia,
    })

    useImperativeHandle(ref, () => ({
        resetForms: () => reset(),
        setErrorField: (...args) => setError(...args)
    }));

    useEffect(() => {
        log('Mount Forms')
        _setDefaultValue();
        return () => {
            log('Unmount Forms')
            focusedInput = '';
            populatedInputlist = [];
            inputTypes.map(type => delete defaultDataset[type]);
            inputTypes = {};
        }
    }, [])

    return (
        <View>
            {fields?.map(({ id, name, type, inputProps, controllerProps, config }, index) => (
                <View key={`controller-${id}`} >
                    <Controller
                        control={control}
                        name={name}
                        rules={controllerProps?.rules}
                        render={({ field: { onChange, onBlur, value, name, ref } }) => (
                            type == 'text' &&
                            <InputPallete.MyTextInput
                                type={type}
                                loading={loading}
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                theme={inputTheme}
                                {...inputProps} />
                            || type == 'avatar' &&
                            <InputPallete.MyAvatar
                                type={type}
                                loading={loading}
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                config={{ ...config }}
                                theme={inputTheme}
                                {...inputProps} />
                            || type == 'colorScheme' &&
                            <InputPallete.MyColorScheme
                                type={type}
                                loading={loading}
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                onSelectedColor={color => {
                                    _onResetField(name, color)
                                    setInputTheme(prevState => ({ ...prevState, secondary: color }))
                                }}
                                config={{ ...config }}
                                defaultDataset={defaultDataset}
                                theme={inputTheme}
                                {...inputProps}
                            />
                            || type == 'chipTask' &&
                            <InputPallete.MyTaskType
                                type={type}
                                loading={loading}
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                onselectedChips={color => _onResetField(name, color)}
                                config={{ ...config }}
                                defaultDataset={defaultDataset}
                                theme={inputTheme}
                                {...inputProps}
                            />
                            || type == 'tagText' &&
                            <InputPallete.MyTagText
                                type={type}
                                loading={loading}
                                id={id}
                                register={register(`${FORM_NAME}.${name}.value`)}
                                name={name}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                error={name in errors}
                                errorText={errors[name]?.message}
                                onResetField={_onResetField}
                                onFocus={name => focusedInput = name}
                                defaultDataset={defaultDataset}
                                onselectedPeople={people => _onResetField(name, people)}
                                config={{ ...config }}
                                theme={inputTheme}
                                {...inputProps}
                            />
                            || <MyText>input undefined {type}</MyText>
                        )}
                    />
                </View>
            ))}
            {fields.length > 0 && (
                renderButton === undefined ? <InputPallete.MyButton
                    theme={inputTheme}
                    loading={loading}
                    label={submitLabel}
                    onPress={handleSubmit(_onSubmit)}
                /> : renderButton(handleSubmit(_onSubmit))
            )}
        </View>
    )
});