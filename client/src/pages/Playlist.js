import React, { useEffect, useState } from 'react'
import PlaylistContainer from '../styles/pages/Playlist'
import { msToMinSec } from '../utils'
import { getAPlaylist } from '../utils/spotify'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useHistory } from 'react-router-dom'
function Playlist({ match }) {
    const [playlist, setPlaylist] = useState(null)
    const history = useHistory()
    useEffect(() => {
        getAPlaylist(match.params.id).then(res => {
            setPlaylist(res.data);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                playlist &&
                <PlaylistContainer>
                    <div className='p-head'>
                        <div className='p-head-image' onClick={() => { window.location.href = playlist.external_urls.spotify }}>
                            <img src={playlist.images.length > 0 ? playlist.images[0].url : '/album.png'} alt={playlist.name} height='300' />
                        </div>
                        <div className='p-head-text'>
                            <h1>{playlist.name}</h1>
                            <p>{playlist.tracks.total} tracks</p>
                        </div>
                    </div>
                    <div className="p-tracks">
                        {
                            playlist.tracks.items.map((track, i) => (
                                <div className='p-track' key='i'>
                                    <p onClick={() => history.push(`/tracks/${track.track.id}`)}>{track.track.name.slice(0, 40)}... <span>{msToMinSec(track.track.duration_ms)}</span></p>
                                    <AiFillPlayCircle onClick={() => window.location.href = track.track.external_urls.spotify} />
                                </div>
                            ))
                        }
                    </div>
                </PlaylistContainer>
            }
        </div>
    )
}

export default Playlist
