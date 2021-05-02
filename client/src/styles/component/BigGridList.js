import styled from 'styled-components'

const BigGridListContainer = styled.div`
    h1{
        color : var(--white);
            letter-spacing: 2px;
            margin: 1rem 0;
            text-decoration:none;
            font-size: .9rem;
            font-family: Circular Bold;
            transition : .2s ease-in-out;
            &:hover{
                color:var(--green) !important;
            }
    }
    .bg-data{
        display:grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        grid-gap:2rem;
        .bg-element{
            position:relative;
            cursor:pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            img { 
                border-radius:5px;
                width:100%;
                box-shadow: 0px 0px 20px rgba(0,0,0,.1);
                transition: .2s ease-in-out;
            };
            .bg-element-info{
                opacity:0;
                position:absolute;
                color: var(--white);
                text-align:center;
                width:100%;
                p{
                    font-family: Circular Bold;
                    font-size:1.1rem;
                    margin:.5rem 0;
                };
                transition: .2s ease-in-out;
                .sub-text{
                    font-family: Circular Book;
                }
            }
           &:hover{
               img{
                   filter:brightness(.5) blur(1px);
               }
               .bg-element-info{
                   opacity:1;
               }
           }
        }
    }
`

export default BigGridListContainer;