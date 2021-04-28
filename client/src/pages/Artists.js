import React, { useEffect, useState } from 'react'
import BigGridList from '../components/BigGridList';
import { getUserTopArtists } from '../utils/spotify';
import ArtistsContainer from '../styles/pages/Artists';
function Artists() {
    const [artists, setArtists] = useState(null);
    const [range, setRange] = useState('long_term')
    useEffect(() => {
        getUserTopArtists(50).then(res => {
            const data = res.data.items.map(artist => ({ id: artist.id, name: artist.name, image: artist.images[0].url }))
            setArtists(data);
        }).catch(err => console.log(err))
    }, [])

    const handleRangeChange = range => {
        setRange(range);
        getUserTopArtists(50, range)
            .then(res => {
                const data = res.data.items.map(artist => ({ id: artist.id, name: artist.name, image: artist.images[0].url }))
                setArtists(data);
            })
            .catch(err => console.log(err))
    }

    return (
        <ArtistsContainer>
            <div className='artists-head'>
                <h1>Top Artists</h1>
                <div className='artists-head-filters'>
                    <p className={range === "long_term" ? "active" : null} onClick={() => handleRangeChange('long_term')}>All time</p>
                    <p className={range === "short_term" ? "active" : null} onClick={() => handleRangeChange('short_term')}>Last Month</p>
                    <p className={range === "medium_term" ? "active" : null} onClick={() => handleRangeChange('medium_term')}>Last 6 Months</p>
                </div>
            </div>
            <BigGridList title='Top Artists' data={artists} type='artists' onRangeChange={handleRangeChange} filters={true} />
        </ArtistsContainer>
    )
}

export default Artists
