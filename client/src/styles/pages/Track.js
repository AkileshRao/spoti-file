import styled from 'styled-components';
import mixins from '../common/Mixins'

const TrackContainer = styled.div`
    color : var(--white);
    padding:2rem;
    .track-info{
        ${mixins.flexCenterRow};
        justify-content:flex-start;
        gap:1.5rem;
        margin:1rem 0 4rem 0;
        h1{ margin : .5rem 0};
        .track-image{
            position:relative;
            ${mixins.flexCenterRow};
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
        }
    }
    .related-artists{ margin-top:2rem }

    @media(max-width:426px){
        .track-info{
            flex-direction:column !important;
            align-items:center;
            gap:1rem;
            .track-text{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
        }
    }
`

export default TrackContainer;