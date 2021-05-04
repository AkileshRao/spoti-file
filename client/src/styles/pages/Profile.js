import styled from 'styled-components'
import mixins from '../common/Mixins';

const ProfileContainer = styled.div`
    padding:2rem;
    .pc-top{
        ${mixins.flexCenterColumn};
        gap:1rem;
        margin-top:2rem;
        img{ border-radius:100px; }
        .pc-top-data{
            ${mixins.flexCenterColumn};
            margin:0 1rem;
            h1{ margin: 0 }
            .pc-top-data-info{
                ${mixins.flexCenterRow};
                margin-bottom:.5rem;
                gap:1.5rem;
                .pc-top-data-info-count{
                    ${mixins.flexCenterColumn};
                    p{ letter-spacing:2px; }
                    .count-heading{
                        margin:1rem 0 0 0;
                        opacity:.5 ;
                    };
                    .count-value{ 
                        margin:.5rem;
                        color :var(--green);
                    }
                }
            }

            .logout-button{
                position:absolute;
                top:1rem;
                right:1rem;
            }
        }
    }

    @media(min-width:769px){
        .logout-button{
            display:none;
        }
    }
`

export default ProfileContainer;