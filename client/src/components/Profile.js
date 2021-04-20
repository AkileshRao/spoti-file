import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { logout, getUserDetails } from '../spotify'
import { OutlineButton } from '../styles/Buttons'
import Loader from './Loader'

const ProfileContainer = styled.div`
    min-height:100vh;
    background:var(--grey);
`
const Heading = styled.h1`
    color: var(--white);
`

const PlainText = styled.p`
    color: var(--white);
`

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserDetails()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                user ?
                    <ProfileContainer className='hey'>
                        <div>
                            <Heading>{user.display_name}</Heading>
                            <PlainText>{user.email}</PlainText>
                        </div>
                        <OutlineButton onClick={logout}>Logout</OutlineButton>
                    </ProfileContainer>
                    :
                    <Loader />
            }
        </div>
    )
}

export default Profile
