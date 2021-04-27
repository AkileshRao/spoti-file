import React from 'react'
import { useHistory } from 'react-router'

import { $GreenButton } from '../../common/styles/Buttons'
import LoginContainer from './styles'

const Login = () => {
    const history = useHistory()
    if (localStorage.getItem('spotifile_access_token') || localStorage.getItem("spotifile_refresh_token")) { history.push('/') }
    return (
        <LoginContainer>
            <h1 className='login-head'>Spoti<span style={{}}>File</span></h1>
            <$GreenButton href="http://localhost:8000/login" style={{
                fontFamily: 'Circular Bold',
                color: 'var(--white)'
            }}>Click me to login</$GreenButton>
        </LoginContainer>
    )
}

export default Login
