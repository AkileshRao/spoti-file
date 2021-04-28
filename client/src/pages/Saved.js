import React, { useEffect, useState } from 'react'
import TrackList from '../components/TrackList'
import { getUserSavedTracks } from '../utils/spotify'

function Saved() {
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        getUserSavedTracks().then(res => setTracks(res.data.items.map(track => track.track))).catch(err => console.log(err))
    })

    return (
        <div>
            <TrackList title='Saved Tracks' data={tracks} filters={false} />
        </div>
    )
}

export default Saved
