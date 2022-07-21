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
    const { height, width } = Dimensions.get('window')
    // todos
    const [todoType, setTodoType] = useState('AWATING');
    const todosType = [{ title: 'Permintaan', id: 0, status: 'AWATING' }, { title: 'Mendatang', id: 1, status: 'APPROVED' }, { title: 'Selesai', id: 2, status: 'DONE' }];
    const renderTodos = ({ item: { title, id, status } }) => <MyChip text={title} value={status == todoType} onPress={() => _onPressTodosType(status)} />
    const _onPressTodosType = useCallback(setTodoType, [todoType]);

    // todolist
    const [selectedTodo, setSelectedTodo] = useState({});
    const listTodo = [
        {
            id: 0,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 11,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 1,
            title: 'Belajar',
            tanggal: '2020-01-01 07:00:00',
            status: 'APPROVED',
            description: 'while doing nothing, do something',
            priority: 'buru buru',
        },
        {
            id: 2,
            title: 'Makan',
            tanggal: '2020-01-01 08:00:00',
            status: 'DONE',
            description: 'while doing nothing, do something',
            priority: 'harus',
        },
    ];
    const renderListTodo = ({ item }) => <MyCardTodo {...item} onEdit={() => _onEditTodoCard(item)} onDone={() => _onDoneTodo(item)} />
    const _onEditTodoCard = useCallback(todo => {
        log(todo)
    }, [selectedTodo]);
    const _onDoneTodo = useCallback(todo => {
        log(todo)
    }, [selectedTodo]);

    // add TODO
    const _onAddTodo = () => {
        log('_onAddTodo')
    }

    return (<>
        <Navbar leftPress={onHideMenu} title={'Home'} />
        <View style={{ width: '100%', height: '100%', paddingHorizontal: '5%', backgroundColor: colors.zircon }}>
            <View>
                <MyText >Hai, user</MyText>
                <MyText large bold>Pembaharuan hari ini! {`\n`}</MyText>
                <FlatList
                    contentContainerStyle={{ height: 30, width: '100%' }}
                    data={todosType}
                    keyExtractor={({ id }) => id}
                    renderItem={renderTodos}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
                <FlatList
                    data={listTodo.filter(({ status }) => status == todoType)}
                    keyExtractor={({ id, tanggal }) => `${id}-${tanggal}`}
                    renderItem={renderListTodo}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <LinearGradient colors={['transparent', colors.zircon]} style={{ position: 'absolute', height: 100, bottom: 0, left: 0, justifyContent: 'center', alignItems: 'center', width }}>
                <TouchableOpacity activeOpacity={.9} onPress={_onAddTodo} style={{ width: 150, borderRadius: 30, paddingHorizontal: 20, height: 40, backgroundColor: colors.shark, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ backgroundColor: colors.zircon, padding: 2, borderRadius: 5 }}>
                        <Icon name={'plus'} size={15} color={colors.shark} />
                    </View>
                    <MyText color={colors.zircon}>Add Todo</MyText>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    </>)
}
