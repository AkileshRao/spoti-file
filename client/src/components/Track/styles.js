import styled from 'styled-components';

const TrackContainer = styled.div`
    color : var(--white);
    padding:2rem;
    .track-info{
        display: flex;
        align-items:center;
        gap:1.5rem;
        margin-bottom:2rem;
        h1{ margin : .5rem 0};
        .track-image{
            position:relative;
            display:flex;
            align-items:center;
            justify-content : center;
            cursor:pointer;
            img{
                transition: .2s ease-in-out;
                border-radius : 5px;
            }
            svg{
                position: absolute;
                opacity:0;
                transition: .2s ease-in-out;
                font-size:4rem;
                color: var(--green);
                filter: brightness(1);
            };
            &:hover{
                img{filter: brightness(.5);}
                svg{opacity:1;}
            }
        }
        p{
            margin : .5rem 0 .8rem 0;
            opacity: .5;
            font-family: Circular Book;
            letter-spacing : 1px;
            font-size : .9rem;
        }
    }
    .related-artists{ margin-top:2rem }
`

export default TrackContainer;