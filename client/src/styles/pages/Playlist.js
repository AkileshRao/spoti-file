import styled from "styled-components";

const PlaylistContainer = styled.div`
    min-height:100vh;
    padding:3rem;
    color : var(--white);
    display:flex;
    align-items:flex-start;
    gap:2rem;
    
    .p-head{
        display:flex;
        position:static;
        flex-direction:column;
        align-items:center;
        gap : 1rem;
        align-items:center;
        p,h1{
            margin:.5rem 0;
            text-align:center;
        }
        img{
            border-radius:10px;
        }
    }
    .p-tracks{
        flex:1;
        h5 {letter-spacing : 3px}
        .p-track{
            padding:.7rem;
            border-radius: 5px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            p{
                margin:0;
                display: flex;
                flex-direction:column;
                span{
                    opacity:.5; 
                    font-size: .9rem;
                }
            }
            svg{
                font-size:2rem;
                color:var(--green);
                cursor:pointer;
            }
            &:hover{
                background: var(--lightgrey);
            }
        }
    }
`

export default PlaylistContainer