export const isBrowser = () => typeof window !== "undefined"

export const getUser = () => (
    isBrowser() && window.localStorage.getItem('myUser') ? JSON.parse(window.localStorage.getItem("myUser")) : {}
)

const setUser =  (user) => window.localStorage.setItem("myUser", JSON.stringify(user))

export const handleLogin = ({username, password}) => {
    if(username === 'abc' && password === 'abc') {
        return setUser({
            username: 'abc',
            name: 'harsh pareek',
            email: 'abc@cdf.com'
        })
    }else
    return alert('wrong password or username');
}


export const isLoggedIn = () => {
    const user = getUser()

    return !!user.username
}

export const logout = callback => {
    setUser({})
    callback()
}