import styled from 'styled-components'

const HorizontalGridContainer = styled.div`
    margin:3rem 0 ;
    .h-grid-head{
        margin:1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        a,p{
            text-decoration:none;
            color:var(--white);
            letter-spacing: 2px;
            font-size:.9rem;
            transition:.2s ease-in-out;
            cursor:pointer;
        }
        a{
            font-family:Circular Bold;
            &:hover{
                color: var(--green);
            }
        }
        p{
            font-family:Circular Book;
            opacity:.5;
            font-size:.8rem;
            &:hover{
                opacity:1;
            }
        }
    }
    .h-list-items{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
        grid-gap:1rem;
    }
`

export default HorizontalGridContainer;