import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import TrackList from '../components/TrackList'
import { getUserRecentlyPlayedTracks } from '../utils/spotify'

const Recents = () => {
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        getUserRecentlyPlayedTracks(20).then(res => {
            setTracks(res.data.items.map(track => track.track))
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            {tracks ? <TrackList title='Recently Played' data={tracks} filters={false} /> : <Loader />}
        </div>
    );
}

export default Recents
