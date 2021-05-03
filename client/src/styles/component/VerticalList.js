import styled from 'styled-components'

const VerticalListContainer = styled.div`
    .vl-element{
        color: var(--white);
        display: flex;
        align-items:center;
        justify-content:space-between;
        padding:.8rem;
        border-radius: 5px;
        cursor:pointer;
        transition:.2s ease-in-out;
        &:hover{
            transform: scale(1.01);
            background : var(--lightgrey);
        }
        .vl-element-info{
            display:flex;
            align-items:center;
            gap:1rem;
            p{
                margin:.3rem 0;
                font-family:Circular Book;
                font-size:.9rem;
            }
            img{ border-radius : 5px}
        }
    }
`

export default VerticalListContainer;