import React, { useEffect, useState } from 'react'

import { getUserTopTracks } from '../utils/spotify'
import Loader from '../components/Loader'
import TrackList from '../components/TrackList'

const Tracks = () => {
    const [tracks, setTracks] = useState(null)
    useEffect(() => {
        getUserTopTracks(50)
            .then(res => setTracks(res.data.items))
            .catch(err => console.log(err))
    }, [])

    const handleRangeChange = range => {
        switch (range) {
            case "all":
                getUserTopTracks(50)
                    .then(res => setTracks(res.data.items))
                    .catch(err => console.log(err))
                break;
            case "month":
                getUserTopTracks(50, "short_term")
                    .then(res => setTracks(res.data.items))
                    .catch(err => console.log(err))
                break;
            case "sixmonths":
                getUserTopTracks(50, "medium_term")
                    .then(res => setTracks(res.data.items))
                    .catch(err => console.log(err))
                break;
            default:
                break;
        }
    }
    return (
        <div>
            {
                tracks ? <TrackList title='Top Tracks' data={tracks} filters={true} onRangeChange={handleRangeChange} /> : <Loader />
            }
        </div>
    )
}

export default Tracks
