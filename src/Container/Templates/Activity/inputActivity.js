const INPUT_ACTIVITY_LIST = [
    {
        name: 'colorScheme',
        value: '',
        type: 'colorList',
        inputProps: {
            label: 'colorScheme',
        },
        config: {
            data: {
                colors: ['#fbe114', '#4beed1', '#13d3fb', '#b6adff', '#fb1467', '#f5815c', '#148cfb', '#a949c1']
            }
        }
    },
    {
        name: 'deadline',
        value: '',
        type: 'text',
        inputProps: {
            label: 'deadline',
        },
    },
    {
        name: 'place',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Tempat',
        }
    },
    {
        name: 'details',
        value: '',
        type: 'text',
        inputProps: {
            label: 'details',
            numberOfLines: 10,
        }
    },
    {
        name: 'Tipe Tugas',
        value: '',
        type: 'chipTask',
        inputProps: {
            label: 'Tipe Tugas',
        },
        config: {
            data: {
                task: [
                    { code: 'code 01', description: 'description 01' },
                    { code: 'code 02', description: 'description 02' },
                    { code: 'code 03', description: 'description 03' },
                ]
            }
        }
    },
];
const FORM_ACTIVITY_NAME = 'activityForm';
export { INPUT_ACTIVITY_LIST, FORM_ACTIVITY_NAME }