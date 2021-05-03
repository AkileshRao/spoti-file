import styled from "styled-components";
import mixins from "../common/Mixins";

const ArtistsContainer = styled.div`
padding: 1rem 2rem;
.artists-head{
    margin-bottom:2rem;
    color: var(--white);
    ${mixins.flexSBRow};
    align-items: flex-end;
    h2{
        font-family: Circular Medium; 
        margin-bottom:0;
    }
    .artists-head-filters{
        ${mixins.flexCenterRow};
        gap:1rem;
        p{
            font-family: Circular Book;
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