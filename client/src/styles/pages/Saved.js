import styled from "styled-components";

const SavedContainer = styled.div`
    padding:1rem 2rem;
    display : grid;
    grid-gap:2rem;
    grid-template-columns : repeat(auto-fit, minmax(250px, 1fr)); 
    h2{ font-family : Circular Bold}

    @media(max-width:426px){
        padding:1rem;
    }
`

export default SavedContainer;