import React, { useEffect, useState } from 'react'
import SavedContainer from '../styles/pages/Saved'
import { getUserSavedAlbums, getUserSavedTracks } from '../utils/spotify'
import Loader from '../components/Loader'
import { msToMinSec } from '../utils'
import VerticalList from '../components/VerticalList'

function Saved() {
    const [tracks, setTracks] = useState(null)
    const [albums, setAlbums] = useState(null)
    useEffect(() => {
        getUserSavedTracks().then(res => {
            setTracks(res.data.items.map(track => ({
                id: track.track.id,
                name: track.track.name,
                image: track.track.album.images[2].url,
                title: `${track.track.name}  ( ${msToMinSec(track.track.duration_ms)} )`,
                subTitle: `${track.track.artists[0].name} · ${track.track.album.name}`
            })))
        }).catch(err => console.log(err))

        getUserSavedAlbums().then(res => {
            setAlbums(res.data.items.map(album => ({
                id: album.album.id,
                name: album.album.name,
                image: album.album.images[2].url,
                title: `${album.album.name} (${album.album.total_tracks})`,
                subTitle: `${album.album.artists[0].name} · ${album.album.release_date.slice(0, 4)}`
            })))
        }).catch(err => console.log(err))
    }, [])

    return (
        <div>
            {
                <SavedContainer>
                    <div className="saved-tracks">
                        <h1>Saved Tracks</h1>
                        <VerticalList type='tracks' data={tracks} />
                    </div>
                    <div className="saved-albums">
                        <h1>Saved Albums</h1>
                        <VerticalList type='albums' data={albums} />
                    </div>
                </SavedContainer>
            }
        </div>
    )
}

export default Saved
