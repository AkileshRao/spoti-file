import styled from 'styled-components'

const LoaderContainer = styled.div`
    background:var(--grey);
    display:flex;
    align-items:center;
    justify-content:center;
    height : 100vh;
    transition: .2s ease-in-out;
    .icon{
        background : var(--green);
        height:75px;
        width:75px;
        border-radius: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        gap:7px;
        .icon-line{
            animation :loading;
            animation-duration : .5s;
            animation-iteration-count : infinite;
            animation-direction: alternate;
            background: var(--grey);
            height: 30px; 
            border-radius: 100px;
            width : 7px
        }
        .line-two{
            animation-delay:.25s;
        }
        .line-three{
            animation-delay:.5s;
        }
    }
    
    @keyframes loading{
        from { height : 10px;}
        to {height :35px;}
    }
`

export default LoaderContainer;