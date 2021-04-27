import styled from 'styled-components'

const HorizontalGridItemContainer = styled.div`
    display:flex;
    gap:1rem;
    align-items:center;
    font-family : Circular Book;
    color:var(--white);
    background:var(--lightgrey);
    border-radius:5px;
    img{ border-radius: 5px; }
    padding:.5rem;
    opacity:.7;
    cursor:pointer;
    transition:.2s ease-in-out;
    &:hover{
        opacity:1;
    }
`

export default HorizontalGridItemContainer;