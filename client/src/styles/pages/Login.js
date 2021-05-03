import styled from 'styled-components'
import mixins from '../common/Mixins';

const LoginContainer = styled.div`
    background: var(--grey);
    height:100vh;
    ${mixins.flexCenterColumn};
    flex-direction:column;  
    .login-head{
        font-family:Circular Bold;
        margin-bottom: 1rem;
        span{ 
            color: var(--green);
        };
    }
`

export default LoginContainer;