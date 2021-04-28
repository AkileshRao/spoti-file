import styled from 'styled-components'

const TrackListContainer = styled.div`
    padding: 1rem 2rem;
    .tl-head{
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: space-between;
        h1{
            font-family: Circular Medium; 
            margin-bottom:0;
        }
        .tl-head-filters{
            display :flex;
            align-items: center;
            gap:1rem;
            p{
                cursor:pointer;
                transition: .2s ease-in-out;
                opacity:.5;
                margin:0;
            }
            .active{
                opacity: 1;
                font-family: Circular Bold;
            }
        }
    }
    .tl-track{
        color: var(--white);
        display: flex;
        align-items:center;
        justify-content:space-between;
        margin:1.5rem 0;
        background : var(--lightgrey);
        padding:.8rem;
        border-radius: 5px;
        cursor:pointer;
        transition:.2s ease-in-out;
        &:hover{
            transform: scale(1.01);
            background : var(--black);
        }
        .tl-track-info{
            display:flex;
            align-items:center;
            gap:1rem;
            p{
                margin:.3rem 0;
                font-family:'Circular Book';
                font-size:.9rem;
            }
            img{ border-radius : 5px}
        }
    }
`

export default TrackListContainer;