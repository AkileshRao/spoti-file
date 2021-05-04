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

    @media(max-width:426px){
        .a-head{
            text-align:center;
            flex-direction:column !important;
            align-items:center;
            gap:1rem;
            .a-head-info{
                display:flex;
                flex-direction:column;
                align-items:center;
                gap:.5rem;
            }
        }
    }
`

export default ArtistContainer;