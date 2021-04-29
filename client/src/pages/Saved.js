import React, { useEffect, useState } from 'react'
import SavedContainer from '../styles/pages/Saved'
import { getUserSavedAlbums, getUserSavedTracks } from '../utils/spotify'
import Loader from '../components/Loader'

function Saved() {
    const [tracks, setTracks] = useState(null)
    const [albums, setAlbums] = useState(null)
    useEffect(() => {
        getUserSavedTracks().then(res => setTracks(res.data.items.map(track => track.track))).catch(err => console.log(err))

        getUserSavedAlbums().then(res => console.log(res)).catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                (tracks && albums) ? <SavedContainer>
                    <div className="saved-tracks">
                        <h1>Saved Tracks</h1>
                    </div>
                    <div className="saved-albums">
                        <h1>Saved Albums</h1>
                    </div>
                </SavedContainer>
                    : <Loader />
            }
        </div>
    )
}

export default Saved
