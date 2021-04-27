import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'
import { getUserTopTracks } from '../utils/spotify'
import { msToMinSec } from '../utils'
import Loader from '../components/Loader'
import TracksContainer from '../styles/pages/Tracks'

const Tracks = () => {
    const history = useHistory()
    const [tracks, setTracks] = useState(null)
    useEffect(() => {
        getUserTopTracks(50)
            .then(res => setTracks(res.data.items))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                tracks ?
                    <TracksContainer>
                        <h1>Top Tracks</h1>
                        <div>
                            {
                                tracks && tracks.map(track => (
                                    <div className='tc-track' key={track.id} onClick={() => history.push(`/tracks/${track.id}`)}>
                                        <div className='tc-track-info'>
                                            <img src={track.album.images[0].url} alt={track.name} height='50' />
                                            <div>
                                                <p>{track.name}</p>
                                                <p style={{ opacity: '.5' }}>{track.album.artists[0].name} &nbsp;·&nbsp; {track.album.name}</p>
                                            </div>
                                        </div>
                                        <p>{msToMinSec(track.duration_ms)}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </TracksContainer> :
                    <Loader />
            }
        </div>
    )
}

export default Tracks
