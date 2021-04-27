import React from 'react'
import { Redirect, Route, useHistory, Switch } from 'react-router'

import Recents from './Recents'
import Tracks from './Tracks'
import Profile from './Profile'
import Saved from './Saved'
import Track from './Track'
import Sidebar from '../components/Sidebar'
import MainContainer from '../styles/pages/Main';

const Main = () => {
    const history = useHistory();
    if (!localStorage.getItem('spotifile_access_token') || !localStorage.getItem("spotifile_refresh_token")) { history.push('/login') }

    return (
        <MainContainer>
            <Sidebar />
            <div className='routes'>
                <Switch>
                    <Route path='/profile' component={Profile} />
                    <Route path='/recents' component={Recents} />
                    <Route path='/saved' component={Saved} />
                    <Route exact path='/tracks' component={Tracks} />
                    <Route path='/tracks/:id' component={Track} />
                    <Redirect path='*' to='/profile' />
                </Switch>
            </div>
        </MainContainer>
    )
}

export default Main
