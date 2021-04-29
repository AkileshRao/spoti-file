import React, { useEffect, useState } from 'react'

import { getUserTopTracks } from '../utils/spotify'
import Loader from '../components/Loader'
import TracksContainer from '../styles/pages/Tracks'
import VerticalList from '../components/VerticalList'
import { msToMinSec } from '../utils'

const Tracks = () => {
    const [tracks, setTracks] = useState(null)
    const [range, setRange] = useState('long_term')
    useEffect(() => {
        getUserTopTracks(50)
            .then(res => {
                const data = res.data.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    image: track.album.images[2].url,
                    title: `${track.name}  ( ${msToMinSec(track.duration_ms)} )`,
                    subTitle: `${track.artists[0].name} · ${track.album.name}`
                }))
                setTracks(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleRangeChange = range => {
        setRange(range);
        getUserTopTracks(50, range)
            .then(res => {
                const data = res.data.items.map(track => ({
                    id: track.id,
                    name: track.name,
                    image: track.album.images[2].url,
                    title: `${track.name} by ${track.artists[0].name}`,
                    subTitle: `${msToMinSec(track.duration_ms)} · ${track.album.name}`
                }))
                setTracks(data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {
                tracks ? <TracksContainer>
                    <div className="tc-head">
                        <h1>Top Tracks</h1>
                        <div className='tc-head-filters'>
                            <p className={range === "long_term" ? "active" : null} onClick={() => handleRangeChange('long_term')}>All time</p>
                            <p className={range === "short_term" ? "active" : null} onClick={() => handleRangeChange('short_term')}>Last Month</p>
                            <p className={range === "medium_term" ? "active" : null} onClick={() => handleRangeChange('medium_term')}>Last 6 Months</p>
                        </div>
                    </div>
                    <VerticalList type='tracks' data={tracks}></VerticalList>
                </TracksContainer> : <Loader />
            }
        </div>
    )
}

export default Tracks
