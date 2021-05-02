import styled from 'styled-components'

const LoaderContainer = styled.div`
    background:var(--black);
    display:flex;
    align-items:center;
    justify-content:center;
    height : 100vh;
    .icon{
        background : var(--green);
        height:75px;
        width:75px;
        border-radius: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        gap:7px;
        .icon-line{
            background: var(--grey);
            height: 7px; 
            border-radius: 100px;
            width : calc(100% - 30px);
        }
    }
`

export default LoaderContainer;