import styled from 'styled-components'

const MainContainer = styled.div`
    display: flex;
    .routes{
        flex: 1;
        padding-left: 75px;
        background: var(--grey);
        min-height: 100vh;
        height: 100%;
    }

    @media(max-width:769px){
        flex-direction:column-reverse;
        .routes{
            padding-left:0;
            padding-bottom : 4rem;
        }
    }
`

export default MainContainer;