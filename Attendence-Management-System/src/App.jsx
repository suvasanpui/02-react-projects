import React from 'react'
import { useGlobalContext } from './hook/Context';
import Login from './Auth/Login';
import Registration from './Auth/Registration'


function App() {
    const {isLogin}=useGlobalContext();
    return (
        <div>
            {isLogin ? <Login/> : <Registration/>}
        </div>
    )
}

export default App
