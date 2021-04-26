import React from 'react'
import { Redirect, Route, useHistory, Switch } from 'react-router'
import Recents from './Recents'
import Sidebar from './Sidebar'
import Tracks from './Tracks'
import Track from './Track'
import Profile from './Profile'
import styled from 'styled-components'

const $RouteContainer = styled.div`
    flex: 1 1 0%;
    background: linear-gradient(to top, var(--black), var(--grey));
    min-height: 100vh;
    height: 100%;
`

function Main() {
    const history = useHistory();
    if (!localStorage.getItem('spotifile_access_token') || !localStorage.getItem("spotifile_refresh_token")) { history.push('/login') }

    return (
        <div style={{ display: "flex" }}>
            <Sidebar />
            <$RouteContainer style={{ flex: 1, paddingLeft: "75px" }}>
                <Switch>
                    <Route path='/profile' component={Profile} />
                    <Route path='/recents' component={Recents} />
                    <Route exact path='/tracks' component={Tracks} />
                    <Route path='/tracks/:id' component={Track} />
                    <Redirect path='*' to='/profile' />
                </Switch>
            </$RouteContainer>
        </div>
    )
}

export default Main
