const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            //path: 'http://10.105.104.222:5000',
            //path: 'http://localhost:5000',
            path: 'https://api.autoalerta.cl',
            email: '',
            password: '',
            isAuthenticated: false,
            currentUser: null,
            error: null,
            users: {},
            roles: {},
            contacts_web: {},

            //############## Datos Form Contacto #################################
            contacto_nombre: '',
            contacto_email: '',
            contacto_asunto: '',
            contacto_mensaje: '',
            contacto_recaptcha: '',
            contacto_errors: {
                "nombre": null,
                "email": null,
                "asunto": null,
                "mensaje": null,
                "recaptcha": null,
            },
            contacto_result: null,
            //############## Datos Form Registro #################################
            registro_nombre: '',
            registro_email: '',
            registro_password: '',
            registro_patente: '',
            registro_condiciones: false,
            registro_errors: {
                "nombre": null,
                "email": null,
                "password": null,
                "patente": null,
                "condiciones": null,
            },
            registro_result: null,
            registro_result_success: null,
            registro_result_error: null,
            registro_confirm_success: null,
            registro_confirm_msg: null,
            role: {
                id: 0,
                name: ''
            },
            notificar_patente: '',
            notificar_mensaje: '',
            notificar_email: '',
            notificar_errors: {
                "patente": null,
                "mensaje": null,
                "email": null,
            },
            notificar_result: null,
            notificar_result_success: null,
            notificar_result_error: null,
            notificar_confirm_success: null,
            notificar_confirm_msg: null,
        },
        actions: {
            handleChange: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            getLogin: (e, url, history) => {
                e.preventDefault();
                const store = getStore();
                const data = {
                    email: store.email,
                    password: store.password
                }
                fetch(store.path + url, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        if (data.msg) setStore({
                            error: data
                        })
                        else {
                            setStore({
                                email: '',
                                password: '',
                                error: null,
                                currentUser: data,
                                isAuthenticated: true
                            });

                            sessionStorage.setItem('currentUser', JSON.stringify(data))
                            sessionStorage.setItem('isAuthenticated', true)
                            getActions().getRoles('/api/roles');
                            getActions().getUsers('/api/users');
                            getActions().getContactWeb('/api/webcontacts');
                            history.push('/')
                        }

                    });
            },
            getUsers: (url, page = 1) => {
                const store = getStore();
                fetch(store.path + url + '?page=' + page, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            users: data
                        })

                    });
            },
            getRoles: (url, page = 1) => {
                const store = getStore();
                fetch(store.path + url + '?page=' + page, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data);
                        setStore({
                            roles: data
                        })

                    });
            },
            getContactWeb: (url, page = 1) => {
                const store = getStore();
                fetch(store.path + url + '?page=' + page, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        //console.log(data);
                        setStore({
                            contacts_web: data
                        })

                    });
            },
            isAuthenticated: () => {
                if (sessionStorage.getItem('currentUser') && sessionStorage.getItem('isAuthenticated')) {
                    setStore({
                        isAuthenticated: sessionStorage.getItem('isAuthenticated'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },
            verifyCallback: response => {
                console.log(response);
                setStore({
                    contacto_recaptcha: response
                })
            },
            clearData: () => {
                setStore({
                    contacto_nombre: '',
                    contacto_email: '',
                    contacto_asunto: '',
                    contacto_mensaje: '',
                    contacto_recaptcha: '',
                    contacto_result: null
                });
            },
            clearDataRegistro: () => {
                setStore({
                    registro_nombre: '',
                    registro_email: '',
                    registro_password: '',
                    registro_patente: '',
                    registro_condiciones: false,
                    registro_result: null,
                    registro_result_success: null,
                    registro_result_error: null,
                });
            },
            clearDataNotificacion: () => {
                setStore({
                    notificar_patente: '',
                    notificar_mensaje: '',
                    notificar_email: '',
                    notificar_errors: {
                        "patente": null,
                        "mensaje": null,
                        "email": null,
                    },
                    notificar_result: null,
                    notificar_result_success: null,
                    notificar_confirm_result_success: null,
                    notificar_result_error: null,
                    notificar_confirm_result_error: null,
                    notificar_confirm_success: null,
                    notificar_confirm_msg: null,
                })
            },
            handleSubmitContact: e => {
                e.preventDefault();
                const store = getStore();
                let error = Object.assign({}, store.contacto_errors);
                if (store.contacto_nombre === '') {
                    error['nombre'] = 'El nombre es requerido';
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                } else {
                    error['nombre'] = null;
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                }
                if (store.contacto_email === '') {
                    error['email'] = 'El email es requerido';
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                } else {
                    error['email'] = null;
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                }
                if (store.contacto_asunto === '') {
                    error['asunto'] = 'El asunto es requerido';
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                } else {
                    error['asunto'] = null;
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                }
                if (store.contacto_mensaje === '') {
                    error['mensaje'] = 'El mensaje es requerido';
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                } else {
                    error['mensaje'] = null;
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                }
                if (store.contacto_recaptcha === '') {
                    error['recaptcha'] = 'El recaptcha es requerido';
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                } else {
                    error['recaptcha'] = null;
                    setStore({
                        contacto_errors: Object.assign(store.contacto_errors, error)
                    })
                }

                if (
                    store.contacto_nombre !== '' &&
                    store.contacto_email !== '' &&
                    store.contacto_asunto !== '' &&
                    store.contacto_mensaje !== '' &&
                    store.contacto_recaptcha !== ''
                ) {
                    //console.log("Enviando Formulario de Contacto");
                    const data = {
                        "name": store.contacto_nombre,
                        "email": store.contacto_email,
                        "subject": store.contacto_asunto,
                        "message": store.contacto_mensaje
                    }
                    fetch(store.path + '/api/web-contact/', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            //console.log(data);
                            if (data.id) {
                                setStore({
                                    contacto_nombre: '',
                                    contacto_email: '',
                                    contacto_asunto: '',
                                    contacto_mensaje: '',
                                    contacto_recaptcha: '',
                                    contacto_result: 'Email enviado. Muchas Gracias por su aporte'
                                });
                            } else {
                                setStore({
                                    contacto_nombre: '',
                                    contacto_email: '',
                                    contacto_asunto: '',
                                    contacto_mensaje: '',
                                    contacto_recaptcha: '',
                                    contacto_result: 'Email no enviado. Por favor intente mas tarde'
                                });
                            }
                            getActions().getContactWeb('/api/webcontacts')
                        })
                        .catch(error => console.log(error));
                }
            },
            handleChangeContact: e => {
                setStore({
                    [e.target.name]: e.target.value
                })
            },
            handleSubmitRegistro: e => {
                e.preventDefault();
                const store = getStore();
                let error = Object.assign({}, store.registro_errors);
                if (store.registro_nombre === '') {
                    error['nombre'] = 'El nombre es requerido';
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                } else {
                    error['nombre'] = null;
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                }
                if (store.registro_email === '') {
                    error['email'] = 'El email es requerido';
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                } else {
                    error['email'] = null;
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                }
                if (store.registro_password === '') {
                    error['password'] = 'El password es requerido';
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                } else {
                    error['password'] = null;
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                }

                if (store.registro_patente === '') {
                    error['patente'] = 'La patente es requerida';
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                } else {
                    error['patente'] = null;
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                }

                if (store.registro_condiciones === false) {
                    error['condiciones'] = 'Debe aceptar las condiciones';
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                } else {
                    error['condiciones'] = null;
                    setStore({
                        registro_errors: Object.assign(store.registro_errors, error)
                    })
                }

                if (
                    store.registro_nombre !== '' &&
                    store.registro_email !== '' &&
                    store.registro_patente !== '' &&
                    store.registro_condiciones !== false
                ) {
                    //console.log("Enviando Formulario de Contacto");
                    const data = {
                        "name": store.registro_nombre,
                        "email": store.registro_email,
                        "password": store.registro_patente,
                        "patent": store.registro_patente
                    };
                    
                    fetch(store.path + '/api/register', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            //console.log(data);
                            if (data.user) {
                                setStore({
                                    //currentUser: data,
                                    registro_nombre: '',
                                    registro_email: '',
                                    registro_password: '',
                                    registro_patente: '',
                                    registro_condiciones: false,
                                    registro_result: true,
                                    registro_result_success: 'Gracias por registrarse. Por favor verificar cuenta mediante correo enviado.',
                                    registro_result_error: null,
                                });
                            } else {
                                setStore({
                                    currentUser: null,
                                    registro_nombre: '',
                                    registro_email: '',
                                    registro_password: '',
                                    registro_patente: '',
                                    registro_condiciones: false,
                                    registro_result: true,
                                    registro_result_success: null,
                                    registro_result_error: data.msg
                                });
                            }
                        })
                        .catch(error => console.log(error));
                }
            },
            handleChangeRegistro: e => {
                let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
                setStore({
                    [e.target.name]: value
                })
            },
            getConfirmation: token => {
                const store = getStore();

                fetch(store.path + '/api/confirm/' + token, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.success) {
                            setStore({
                                registro_confirm_success: data.success
                            })
                        } else {
                            setStore({
                                registro_confirm_msg: data.msg
                            })
                        }
                    })
            },
            getConfirmationNotify: token => {
                const store = getStore();

                fetch(store.path + '/api/notify/confirm/' + token, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.result) {
                            setStore({
                                notificar_confirm_result_success: data.result
                            })
                        } else {
                            setStore({
                                notificar_confirm_result_error: data.msg
                            })
                        }
                    })
            },
            createRole: url => {
                const store = getStore();
                fetch(store.path + url, {
                    method: 'POST',
                    body: JSON.stringify(store.role),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            role: {}
                        });
                        getActions().getRoles('/api/roles', store.roles.current_page);
                    });
            },
            editRole: url => {
                const store = getStore();
                fetch(store.path + url + '/' + store.role.id, {
                    method: 'PUT',
                    body: JSON.stringify(store.role),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.currentUser.access_token
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            role: {}
                        });
                        getActions().getRoles('/api/roles', store.roles.current_page);
                    });
            },
            handleChangeObject: (e, object) => {
                const store = getStore();
                const nObject = store[object];
                nObject[e.target.name] = e.target.value;
                setStore({
                    [object]: nObject
                });
            },
            setObject: (name, object) => {
                setStore({
                    [name]: Object.assign({}, object)
                })
            },
            handleSubmitNotificar: e => {
                e.preventDefault();
                const store = getStore();
                let error = Object.assign({}, store.notificar_errors);
                if (store.notificar_patente === '') {
                    error['patente'] = 'La patente es requerida';
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                } else {
                    error['patente'] = null;
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                }

                if (store.notificar_email === '') {
                    error['email'] = 'El email es requerido';
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                } else {
                    error['email'] = null;
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                }

                if (store.notificar_mensaje === '') {
                    error['mensaje'] = 'El mensaje es requerido';
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                } else {
                    error['mensaje'] = null;
                    setStore({
                        notificar_errors: Object.assign(store.notificar_errors, error)
                    })
                }

                if (
                    store.notificar_patente !== '' &&
                    store.notificar_email !== '' &&
                    store.notificar_mensaje !== ''
                ) {
                    //console.log("Enviando Formulario de Contacto");
                    const data = {
                        "patent": store.notificar_patente,
                        "email": store.notificar_email,
                        "message": store.notificar_mensaje
                    }
                    fetch(store.path + '/api/notify', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data);
                            if (data.id) {
                                setStore({
                                    notificar_patente: '',
                                    notificar_email: '',
                                    notificar_mensaje: '',
                                    notificar_result_success: 'Notificacion enviado. Muchas Gracias por su aporte'
                                });
                            } else {
                                setStore({
                                    notificar_patente: '',
                                    notificar_email: '',
                                    notificar_mensaje: '',
                                    notificar_result_error: 'Notificacion no enviado. Por favor intente mas tarde'
                                });
                            }
                            //getActions().getContactWeb('/api/notificar')
                        })
                        .catch(error => console.log(error));
                }
            },
            getPasswordChange: token => {
                const store = getStore();

                fetch(store.path + '/change-password-confirm/' + token, {
                    method: 'POST',
                    body: JSON.stringify({
                        'password': '123456',
                        'repassword': '123456'
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json())
                    .then(data => {
                        if (data.success) {
                            setStore({
                                registro_confirm_success: data.success
                            })
                        } else {
                            setStore({
                                registro_confirm_msg: data.msg
                            })
                        }
                    })
            },
        }
    }
}

export default getState;