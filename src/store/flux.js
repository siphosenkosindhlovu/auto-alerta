const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            //path: 'http://10.105.104.222:5000',
            path: 'http://localhost:5000',
            email: '',
            password: '',
            isAuthenticated: false,
            currentUser: null,
            error: null,
            users: []
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
                        if (data.msg) setStore({ error: data })
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

                            history.push('/')
                        }

                    });
            },
            getUsers: (url) => {
                const store = getStore();
                fetch(store.path + url, {
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
            isAuthenticated: () => {
                if(sessionStorage.getItem('currentUser') && sessionStorage.getItem('isAuthenticated')){
                    setStore({
                        isAuthenticated: sessionStorage.getItem('isAuthenticated'),
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            }
        }
    }
}

export default getState;