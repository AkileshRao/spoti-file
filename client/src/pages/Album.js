import React, { useEffect, useState } from 'react'
import AlbumContainer from '../styles/pages/Album';
import { msToMinSec } from '../utils';
import { getAnAlbum } from '../utils/spotify';
import { AiFillPlayCircle } from 'react-icons/ai'
import Loader from '../components/Loader'
import { useHistory } from 'react-router-dom'
function Album({ match }) {
    const [album, setAlbum] = useState(null);
    const history = useHistory()
    useEffect(() => {
        getAnAlbum(match.params.id).then(res => {
            setAlbum(res.data)
        }).catch(err => console.log(err))
    }, [])

    if (!album) {
        return <Loader />
    } else {
        return (
            <div>

                <AlbumContainer>
                    <div className='a-head'>
                        <div className='a-head-image' onClick={() => { window.location.href = album.external_urls.spotify }}>
                            <img src={album.images[0].url} alt={album.name} height='300' />
                        </div>
                        <div className='a-head-text'>
                            <h1>{album.name}</h1>
                            <p>{album.artists[0].name} · {album.release_date.slice(0, 4)} </p>
                            <p>{album.total_tracks} tracks</p>
                        </div>
                    </div>
                    <div className="a-tracks">
                        {
                            album.tracks.items.map((track, i) => (
                                <div className='a-track' >
                                    <p class='track-title' onClick={() => history.push(`/tracks/${track.id}`)}>{track.name.slice(0, 40)}... <span>{msToMinSec(track.duration_ms)}</span></p>
                                    <AiFillPlayCircle onClick={() => window.location.href = track.external_urls.spotify} />                                </div>
                            ))
                        }
                    </div>
                </AlbumContainer>

            </div>
        )
    }

}

export default Album
