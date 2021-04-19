import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { SpotifyContext } from '../spotify'
function Profile() {
    const history = useHistory();
    if (!localStorage.getItem('spotifile_access_token') || !localStorage.getItem("spotifile_refresh_token")) { history.push('/') }
    const { logout } = useContext(SpotifyContext)

    return (
        <div>
            Profile
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile
