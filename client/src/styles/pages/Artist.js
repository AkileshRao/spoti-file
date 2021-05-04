import styled from 'styled-components'

const ArtistContainer = styled.div`
    padding:2rem;
    color : var(--white);
    .a-head{
        display:flex;
        align-items:center;
        gap:2rem;
        margin-bottom:3rem;
        h1{margin:0 0 .5rem 0};
        img{ border-radius: 5px};
        .popularity{
            margin:0 0 1rem  0;
            span{ color :var(--green)};
        }
    }
`

export default ArtistContainer;