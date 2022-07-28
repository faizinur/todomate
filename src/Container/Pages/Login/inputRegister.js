const INPUT_REGISTER_LIST = [
    {
        name: 'avatar',
        value: '',
        type: 'avatar',
        inputProps: {
            label: 'Avatar',
            placeholder: 'Avatar',
        },
        controllerProps: {
            rules: {
                required: {
                    value: false,
                    message: 'Input Avatar diperlukan',
                },
            }
        }
    },
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
                    message: 'Input Nama Pengguna diperlukan',
                },
            }
        }
    },
    {
        name: 'email',
        value: '',
        type: 'text',
        inputProps: {
            label: 'Email',
            placeholder: 'Email',
        },
        controllerProps: {
            rules: {
                required: {
                    value: false,
                    message: 'Input Email diperlukan',
                },
                pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: 'Email tidak valid'
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
                    message: 'Input kata sandi diperlukan',
                },
            }
        }
    },
];
const FORM_REGISTER_NAME = 'loginForm';
export { INPUT_REGISTER_LIST, FORM_REGISTER_NAME }