import React, { useEffect, useState } from 'react'
import { Redirect, Route, useHistory } from 'react-router'

import Recents from './Recents'
import Sidebar from './Sidebar'
import Profile from './Profile'
import styled from 'styled-components'

const MainContainer = styled.div`
    display:flex;
`

function Main() {
    const history = useHistory();

    if (!localStorage.getItem('spotifile_access_token') || !localStorage.getItem("spotifile_refresh_token")) { history.push('/login') }



    return (
        <MainContainer>
            <Sidebar />
            <div style={{ flex: 1 }}>
                <Route path='/profile' component={Profile} />
                <Route path='/recents' component={Recents} />
                <Redirect path='*' to='/profile' />
            </div>
        </MainContainer>
    )
}

export default Main
