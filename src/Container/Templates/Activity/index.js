import { View, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useCallback, useState, useEffect, useMemo } from 'react'
import { useTheme } from 'react-native-paper';
import { Navbar } from '@Molecules';
import { MyText, MyTabItem } from '@Atoms';
import { MyCardTodo } from '@Molecules'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { log } from '@Utils'
import moment from 'moment';

export default ({ onHideMenu }) => {
    const { colors } = useTheme();
    const { height, width } = Dimensions.get('window')
    // todos
    const [todoType, setTodoType] = useState('AWATING');
    const todosType = [{ title: 'Permintaan', id: 0, status: 'AWATING' }, { title: 'Berjalan', id: 1, status: 'APPROVED' }, { title: 'Selesai', id: 2, status: 'DONE' }];
    const renderTodos = ({ item: { title, id, status } }) => <MyTabItem text={title} value={status == todoType} onPress={() => _onPressTodosType(status)} />
    const _onPressTodosType = useCallback(setTodoType, [todoType]);

    // todolist
    const [selectedTodo, setSelectedTodo] = useState({});
    const listTodo = [
        {
            id: 1411320,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 14120,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 124320,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 1412310,
            title: 'Mandi',
            tanggal: '2020-01-01 06:00:00',
            status: 'AWATING',
            description: 'while doing nothing, do something',
            priority: 'nyantai',
        },
        {
            id: 23,
            title: 'Belajar',
            tanggal: '2020-01-01 07:00:00',
            status: 'APPROVED',
            description: 'while doing nothing, do something',
            priority: 'buru buru',
        },
        {
            id: 15131,
            title: 'Belajar akhir',
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
    const renderListTodo = ({ item, index }) => <MyCardTodo index={index} {...item} onEdit={() => _onEditTodoCard(item)} onDone={() => _onDoneTodo(item)} />
    const _onEditTodoCard = useCallback(log, [selectedTodo]);
    const _onDoneTodo = useCallback(log, [selectedTodo]);

    const _filteredListTodo = useMemo(() => listTodo.filter(({ status }) => status == todoType), [todoType])

    // add TODO
    const _onAddTodo = () => {
        log('_onAddTodo')
    }

    useEffect(() => {
        log('Mount Activity')
        return () => {
            log('Unmount Activity')
        }
    }, [])
    return (
        <View style={{ width, height }}>
            <Navbar leftPress={onHideMenu} Left={() =>
                <View activeOpacity={.8} style={{ flexDirection: 'row', paddingHorizontal: '5%', minWidth: 60, height: 60, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name={'magnify'} size={25} color={colors.shark} />
                </View>}
            />
            < View style={{ flex: 1, paddingHorizontal: '5%' }}>
                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', marginVertical: 15 }}>
                    <View>
                        <MyText opacity={.7} color={colors.shark}>Hey, ketemu lagi nih!</MyText>
                        <MyText xLarge bold opacity={.8}>Wujudkan wacanamu.</MyText>
                    </View>
                    <MyText small opacity={.5}>{moment(new Date).format('DD MMMM')} <Icon name={'calendar-month-outline'} size={10} color={colors.shark} /></MyText>
                </View>
                <View style={{ height: 30, width: '100%', marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <FlatList
                        data={todosType}
                        keyExtractor={({ id }) => id}
                        renderItem={renderTodos}
                        horizontal
                        showsHorizontalScrollIndicator={false} />
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={_filteredListTodo}
                        keyExtractor={({ id, tanggal }) => `${id}-${tanggal}`}
                        renderItem={renderListTodo}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 80 }}
                    />
                </View>
                <LinearGradient colors={['transparent', colors.zircon]} style={{ position: 'absolute', bottom: 0, left: 0, height: 80, width, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity activeOpacity={.9} onPress={_onAddTodo} style={{ width: 120, borderRadius: 30, paddingHorizontal: 20, height: 40, backgroundColor: colors.shark, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row' }}>
                        <View style={{ backgroundColor: colors.zircon, padding: 2, borderRadius: 5 }}>
                            <Icon name={'plus'} size={11} color={colors.shark} />
                        </View>
                        <MyText small color={colors.zircon}>Activity</MyText>
                    </TouchableOpacity>
                </LinearGradient>
            </View >
        </View >
    )
}