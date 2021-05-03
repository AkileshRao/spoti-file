import React, { useEffect, useState } from 'react'
import BigGridList from '../components/BigGridList'
import Loader from '../components/Loader'
import PlayListsContainer from '../styles/pages/Playlists'
import { getUserPlaylists } from '../utils/spotify'
function Playlist() {
    const [playlists, setPlaylists] = useState(null)

    useEffect(() => {
        getUserPlaylists().then(res => {
            console.log(res);
            const data = res.data.items.map(album => ({
                id: album.id,
                name: album.name,
                image: album.images.length > 0 ? album.images[0].url : "/album.png",
                subText: "Total Tracks: " + album.tracks.total
            }))
            setPlaylists(data)
        }).catch(err => console.log(err))
    }, [])

    if (!playlists) {
        return <Loader />
    } else {
        return (
            <PlayListsContainer>
                <h2>My Playlists</h2>
                <BigGridList data={playlists} type='playlists'></BigGridList>
            </PlayListsContainer>
        )
    }
}

export default Playlist
