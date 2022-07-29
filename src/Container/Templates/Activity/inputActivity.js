const INPUT_ACTIVITY_LIST = [
    {
        name: 'tipeTugas',
        value: '',
        type: 'chipTask',
        inputProps: {
            label: 'Prioritas wacananya gimana nih?',
        },
    },
    {
        name: 'deadline',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Kapan emang wacanannya?',
            right: 'calendar-month-outline',
        },
    },
    {
        name: 'place',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Wacananya mau dimanasih?',
            right: 'map-marker-radius',
        }
    },
    {
        name: 'details',
        value: '',
        type: 'text',
        inputProps: {
            label: 'sini cerita wacananya dulu dong, mau ngapain aja coba...',
            numberOfLines: 10,
        }
    },
    {
        name: 'participant',
        value: '',
        type: 'tagText',
        inputProps: {
            label: 'tambah partisipan : Malik, Raqib...',
        }
    },
    {
        name: 'colorScheme',
        value: '',
        type: 'colorScheme',
        inputProps: {
            label: 'jangan lupa hiasin catetannya ya',
        },
    },
];
const FORM_ACTIVITY_NAME = 'activityForm';
export { INPUT_ACTIVITY_LIST, FORM_ACTIVITY_NAME }