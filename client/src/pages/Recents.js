import React, { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import RecentsContainer from '../styles/pages/Recents'
import { getUserRecentlyPlayedTracks } from '../utils/spotify'
import VerticalList from '../components/VerticalList'
import { msToMinSec } from '../utils'

const Recents = () => {
    const [tracks, setTracks] = useState(null)

    useEffect(() => {
        getUserRecentlyPlayedTracks(20).then(res => {
            setTracks(res.data.items.map(track => ({
                id: track.track.id,
                name: track.track.name,
                image: track.track.album.images[2].url,
                title: `${track.track.name}  ( ${msToMinSec(track.track.duration_ms)} )`,
                subTitle: `${track.track.artists[0].name} · ${track.track.album.name}`
            })))
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            {tracks ?
                <RecentsContainer>
                    <h1>Recently Played</h1>
                    <VerticalList type='tracks' data={tracks} />
                </RecentsContainer>
                : <Loader />}
        </div>
    );
}

export default Recents
