import styled from 'styled-components'

export const GreenButton = styled.a`
    text-decoration:none;
    padding: 1rem 2rem;
    background : var(--green);
    cursor:pointer;
    border-radius: 100px;
    transition: .2s ease-in-out;
    &:hover{
        background: var(--hover-green);
        transform : scale(1.05)
    }
`