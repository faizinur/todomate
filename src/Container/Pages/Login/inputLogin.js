const INPUT_LOGIN_LIST = [
    {
        name: 'namaPengguna',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Nama Pengguna',
            placeholder: 'Nama Pengguna',
        },
        controllerProps: {
            rules: {
                required: {
                    value: false,
                    message: 'Nama Pengguna diperlukan',
                },
            }
        }
    },
    {
        name: 'kataSandi',
        value: '',
        type: 'text',
        inputProps: {
            secureTextEntry: true,
            label: 'kata sandi',
            placeholder: 'kata sandi',
        },
        controllerProps: {
            rules: {
                required: {
                    value: false,
                    message: 'kata sandi diperlukan',
                },
            }
        }
    },
];
const FORM_LOGIN_NAME = 'loginForm';
export { INPUT_LOGIN_LIST, FORM_LOGIN_NAME }