import styled from 'styled-components'

const HorizontalListItemContainer = styled.div`
    position: relative;
    margin-bottom:2rem;
    display:flex;
    align-items:center;
    flex-direction:column;
    cursor:pointer;
    background: var(--lightgrey);
    padding:1rem;
    margin-right:1.5rem;
    border-radius:5px;
    opacity:.7;
    transition:.2s ease-in-out;
    box-shadow : 0px 0px 20px rgba(0,0,0, .1);  
    &:hover{
        opacity:1;
    }
    img{ 
        border-radius:5px;
        background-gradient : linear-gradient(to bottom, var(--transparent), var(--black));
        transition: .2s ease-in-out;
    }
    p{
        font-size:.9rem;
        width:120px;
        margin:1rem 0 0 0;
        color:var(--white);
        text-align:center;
        font-family: Circular Book;
    }
`

export default HorizontalListItemContainer;