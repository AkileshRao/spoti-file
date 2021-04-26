import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUsersTopTracks } from '../spotify'
import { msToMinSec } from '../utils'
import Loader from './Loader'
import { useHistory } from 'react-router-dom'

const $Track = styled.div`
    color: var(--white);
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin:1.5rem 0;
    background : var(--lightgrey);
    padding:.8rem;
    border-radius: 5px;
    cursor:pointer;
    transition:.2s ease-in-out;
    &:hover{
        transform: scale(1.01);
        background : var(--black);
    }
    .track-info{
        display:flex;
        align-items:center;
        gap:1rem;
        p{
            margin:.3rem 0;
            font-family:'Circular Book';
            font-size:.9rem;
        }
        img{ border-radius : 5px}
    }

`


function Tracks() {
    const history = useHistory()
    const [tracks, setTracks] = useState(null)
    useEffect(() => {
        getUsersTopTracks(50)
            .then(res => setTracks(res.data.items))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                tracks ?
                    <div style={{ padding: '1rem 2rem' }}>
                        <h1 style={{ color: "var(--white)", fontFamily: "Circular Medium" }}>Top Tracks</h1>
                        <div>
                            {
                                tracks && tracks.map(track => (
                                    <$Track key={track.id} onClick={() => history.push(`/tracks/${track.id}`)}>
                                        <div className='track-info'>
                                            <img src={track.album.images[0].url} alt={track.name} height='50' />
                                            <div className='track-info-text'>
                                                <p>{track.name}</p>
                                                <p style={{ opacity: '.5' }}>{track.album.artists[0].name} &nbsp;·&nbsp; {track.album.name}</p>
                                            </div>
                                        </div>
                                        <p>{msToMinSec(track.duration_ms)}</p>
                                    </$Track>
                                ))
                            }
                        </div>
                    </div> :
                    <Loader />
            }
        </div>
    )
}

export default Tracks
