import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { GreenButton } from '../styles/Buttons'

const Container = styled.div`
    background: var(--grey);
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Heading = styled.h1`
    color:var(--white);
    margin-bottom: 1rem;
`

function Login() {
    const history = useHistory()
    if (localStorage.getItem('spotifile_access_token') || localStorage.getItem("spotifile_refresh_token")) { history.push('/profile') }
    return (
        <Container>
            <Heading>Spoti<span style={{ color: "var(--green)" }}>File</span></Heading>
            <GreenButton href="http://localhost:8000/login" style={{
                fontFamily: 'Circular Bold',
                color: 'var(--white)'
            }}>Click me to login</GreenButton>
        </Container>
    )
}

export default Login
