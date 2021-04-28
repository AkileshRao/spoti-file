import React, { useState } from 'react'
import TrackListContainer from '../styles/component/TrackList'
import { useHistory } from 'react-router-dom'
import { msToMinSec } from '../utils'

function TrackList({ title, data, filters, onRangeChange }) {
    const history = useHistory()
    const [range, setRange] = useState('all');

    const dispatchRange = (rangeVal) => {
        setRange(rangeVal);
        onRangeChange(rangeVal)
    }
    return (
        <TrackListContainer>
            <div className="tl-head">
                <h1>{title}</h1>
                {
                    filters &&
                    <div className='tl-head-filters'>
                        <p className={range === "all" ? "active" : null} onClick={() => dispatchRange('all')}>All time</p>
                        <p className={range === "month" ? "active" : null} onClick={() => dispatchRange('month')}>Last Month</p>
                        <p className={range === "sixmonths" ? "active" : null} onClick={() => dispatchRange('sixmonths')}>Last 6 Months</p>
                    </div>
                }
            </div>
            {data && data.map((track, i) => (
                <div className='tl-track' key={i} onClick={() => history.push(`/tracks/${track.id}`)}>
                    <div className='tl-track-info'>
                        <img src={track.album.images[0].url} alt={track.name} height='50' />
                        <div>
                            <p>{track.name}</p>
                            <p style={{ opacity: '.5' }}>{track.album.artists[0].name} &nbsp;·&nbsp; {track.album.name}</p>
                        </div>
                    </div>
                    <p>{msToMinSec(track.duration_ms)}</p>
                </div>

            ))}
        </TrackListContainer>
    )
}

export default TrackList
