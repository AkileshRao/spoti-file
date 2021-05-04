import styled from "styled-components";
import mixins from '../common/Mixins'

const TracksContainer = styled.div`
    padding: 1rem 2rem;
    .tc-head{
        margin-bottom:2rem;
        color: var(--white);
        ${mixins.flexSBRow};        
        align-items: flex-end;
        h2{
            font-family: Circular Medium; 
            margin-bottom:0;
        }
        .tc-head-filters{
            ${mixins.flexCenterRow};
            gap:1rem;
            p{
                font-family: Circular Book;
                cursor:pointer;
                transition: .2s ease-in-out;
                opacity:.5;
                margin:0;
                &:hover{
                    opacity: 1;
                    font-family: Circular Bold;    
                }
            }
            .active{
                opacity: 1;
                font-family: Circular Bold;
            }
        }
    }

    @media(max-width:426px){
        padding:1rem;
        .tc-head{
            flex-direction:column !important;
            align-items:center;
            gap:1rem;
        }
    }
`

export default TracksContainer