import styled from "styled-components";

const ArtistsContainer = styled.div`
padding: 1rem 2rem;
.artists-head{
    margin-bottom:2rem;
    color: var(--white);
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-family: Circular Medium; 
        margin-bottom:0;
    }
    .artists-head-filters{
        display :flex;
        align-items: center;
        gap:1rem;
        p{
            cursor:pointer;
            transition: .2s ease-in-out;
            opacity:.5;
            margin:0;
        }
        .active{
            opacity: 1;
            font-family: Circular Bold;
        }
    }
}
`
export default ArtistsContainer