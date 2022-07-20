import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useTheme } from 'react-native-paper';
import { Navbar } from '@Molecules';
import { MyText, MyChip } from '@Atoms';
import { MyCardTodo } from '@Molecules'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { log } from '@Utils'

export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    const { width } = Dimensions.get('window')
    // todos
    const [todoType, setTodoType] = useState({});
    const todosType = [{ title: 'Permintaan', id: 0, status: 'AWATING' }, { title: 'Mendatang', id: 1, status: 'APPROVED' }, { title: 'Selesai', id: 2, status: 'DONE' }];
    const renderTodos = ({ item: { title, id } }) => <MyChip text={title} value={id == todoType?.id} onPress={() => _onPressTodosType({ title, id })} />
    const _onPressTodosType = useCallback(setTodoType, [todoType]);

    // todolist
    const [selectedTodo, setSelectedTodo] = useState({});
    const listTodo = [
        {
            id: 0,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
        },
        {
            id: 1,
            title: 'Belajar',
            tanggal: '2020-01-01 07:00:00',
            status: 'APPROVED',
        },
        {
            id: 2,
            title: 'Makan',
            tanggal: '2020-01-01 08:00:00',
            status: 'DONE',
        },
    ];
    const renderListTodo = ({ item }) => <MyCardTodo todo={item} onPress={() => _onPressTodosCard(item)} />
    const _onPressTodosCard = useCallback(setSelectedTodo, [selectedTodo]);

    // add TODO
    const _onAddTodo = () => {
        log('_onAddTodo')
    }

    return (<>
        <Navbar leftPress={onHideMenu} title={'Perjalanan Jalan Jalan'} />
        <View style={{ flex: 1, paddingHorizontal: '5%', backgroundColor: colors.zircon }}>
            <MyText >Hai, user</MyText>
            <MyText large bold>Pembaharuan hari ini! {`\n`}</MyText>
            <FlatList
                data={todosType}
                keyExtractor={({ id }) => id}
                renderItem={renderTodos}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 50 }} />}
            />
            <FlatList
                data={listTodo}
                keyExtractor={({ id, tanggal }) => `${id}-${tanggal}`}
                renderItem={renderListTodo}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 50 }} />}
            />
            <View style={{ position: 'absolute', width, height: 100, bottom: 0, left: 0 }}>
                <LinearGradient colors={['transparent', colors.zircon]} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={.9} onPress={_onAddTodo} style={{ width: 150, borderRadius: 30, paddingHorizontal: 20, height: 40, backgroundColor: colors.shark, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ backgroundColor: colors.zircon, padding: 2, borderRadius: 5 }}>
                            <Icon name={'plus'} size={15} color={colors.shark} />
                        </View>
                        <MyText color={colors.zircon}>Add Todo</MyText>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    </>)
}
