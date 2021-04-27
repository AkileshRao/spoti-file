import styled from 'styled-components'

const HorizontalListContainer = styled.div`
    scroll-behavior: smooth;
    .h-list-items{
        scroll-behavior: smooth;
        display:flex;
        overflow-x:auto;
        width: calc(100vw - 160px);
        ::-webkit-scrollbar {
            width: 0;
            height:0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
    }   

    .h-list-head{
        display:flex;
        justify-content:space-between;
        align-items:center;
        .h-list-head-title {
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

        .h-list-head-buttons{
            display: flex;
            gap: .5rem;
            margin-bottom: 1rem;
        }
    }
`

export default HorizontalListContainer;