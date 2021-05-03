import styled from 'styled-components'

export const GreenButton = styled.a`
    text-decoration:none;
    color: var(--white);
    padding: .7rem 1.5rem;
    background : var(--green);
    cursor:pointer;
    border-radius: 100px;
    transition: .2s ease-in-out;
    font-family: Circular Bold;
    &:hover{
        background: var(--hover-green);
    }
`

export const OutlineButton = styled.button`
    padding: .5rem 1rem;
    background : var(--transparent);
    cursor:pointer;
    font-family:Circular Book;
    font-size:.8rem;
    color:var(--white);
    border:2px solid var(--white);
    border-radius: 100px;
    transition: .2s ease-in-out;
    &:hover{
        background:var(--white);
        color: var(--black);
    }
`

export const DirectionButton = styled.button`
    font-size: 1.2rem;
    border-radius: 100px;
    cursor: pointer;
    background: var(--lightgrey);
    border: 0px;
    color: var(--white);
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity:.5;
    transition: .2s ease-in-out;
    &:hover{
        opacity:1;
    }

`