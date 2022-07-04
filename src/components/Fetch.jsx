const url = 'localhost:3000'

const method = (type, body={}) => fetch(url, {
    method:'post',
    headers: {
        'content-type':'application/json; charset=utf-8'
    },
    body: JSON.stringify({
        type,
        body: {
            ...body,
            token:localStorage.getItem('token')
        }
    })
})
.then(e => e.json())


export const checkAuth = () => method('checkAuth')
export const authUser = (login, password) => method('authUser', {
    login,
    password
})
export const RegUser = () => method('RegUser', {
    login,
    inn,
    password,
    password2
})