import styled from "styled-components";

const SidebarContainer = styled.div`
    padding:1rem 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-between;
    background:var(--black);
    height:100vh;
    min-width:75px;
    position:fixed;
    z-index:10;

    .links-list{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;

        .nav-link{
            width:100%;
            opacity:0.5;
            font-size:1.2rem;
            padding:1rem;
            color:var(--white);
            text-decoration:none;
            width:100%;
            display:flex;
            justify-content:center;
            border-left:5px solid var(--black);
            transition:.2s ease-in-out;
            &:hover, &.active{
                border-left:5px solid var(--green);
                opacity:1;
                background:var(--grey);
            }
        }
    }

    .svg-icon{
        font-size: 1.5rem;
        color: var(--white);
        opacity:.5;
        cursor:pointer;
        text-decoration:none;
        transition:.2s ease-in-out;
        &:hover{
            opacity:1;
        }
    }
`

export default SidebarContainer;
