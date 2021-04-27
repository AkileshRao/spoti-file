import styled from 'styled-components'

const ProfileContainer = styled.div`
    .pc-top{
        display:flex;
        align-items:center;
        flex-direction:column;
        gap:1rem;
        margin-top:2rem;
        img{ 
            border-radius:100px;
            border : 3px solid var(--green);
            padding:.7rem;
        }
        .pc-top-data{
            margin:0 1rem;
            display:flex;
            flex-direction:column;
            align-items:center;
            h1{ 
                color: var(--white);
                margin: 0;
            }
            .pc-top-data-info{
                display:flex;
                align-items:center;
                margin-bottom:.5rem;
                gap:1.5rem;
                .pc-top-data-info-count{
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    p{
                        letter-spacing:2px;
                        font-size:.9rem;
                    }
                    .count-heading{
                        margin:1rem 0 0 0;
                        opacity:.5 ;
                        color: var(--white);
                    };
                    .count-value{ 
                        margin:.5rem;
                        color :var(--green);
                    }
                }
            }
        }
    }
`

export default ProfileContainer;