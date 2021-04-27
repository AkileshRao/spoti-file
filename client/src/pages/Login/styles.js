import styled from 'styled-components'

const LoginContainer = styled.div`
    background: var(--grey);
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    .login-head{
        color:var(--white);
        margin-bottom: 1rem;
        span{ 
            color: var(--green);
        };
    }
`

export default LoginContainer;