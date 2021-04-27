import React, { useEffect, useState } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'

import { getArtistTopTracks, getATrack, getRelatedArtists } from '../utils/spotify';
import { OutlineButton } from '../styles/common/Buttons';
import { msToMinSec } from '../utils';
import HorizontalList from '../components/HorizontalList';
import TrackContainer from '../styles/pages/Track';

const Track = ({ match }) => {
    const [track, setTrack] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState(null);
    const [topTracks, setTopTracks] = useState(null);

    useEffect(() => {
        getATrack(match.params.id).then(res => {
            setTrack(res.data);
            getRelatedArtists(res.data.artists[0].id).then(res => {
                const data = res.data.artists.map(artist => ({ id: artist.id, name: artist.name, image: artist.images[0] }))
                setRelatedArtists(data);
            }).catch(err => console.log(err))

            getArtistTopTracks(res.data.artists[0].id).then(res => {
                const data = res.data.tracks.map(track => ({ id: track.id, name: track.name, image: track.album.images[0] }))
                setTopTracks(data)
            }).catch(err => console.log(err))
        }).catch(err => console.log(err))
    }, [match.params.id])

    return (
        <div>
            { track &&
                <TrackContainer>
                    <div className='track-info'>
                        <div className='track-image' onClick={() => { window.location.href = track.external_urls.spotify }}>
                            <img src={track.album.images[0].url} alt={track.name} height='150' />
                            <AiFillPlayCircle />
                        </div>
                        <div className='track-text'>
                            <h1>{track.name}</h1>
                            <p>{msToMinSec(track.duration_ms)}&nbsp;·&nbsp;{track.album.name} ( {track.album.release_date.slice(0, 4)} )  </p>
                            {track.artists && track.artists.map(artist => <OutlineButton key={artist.id} style={{ margin: "0 .5rem 0 0" }}>{artist.name}</OutlineButton>)}
                        </div>
                    </div>
                    <HorizontalList title="RELATED ARTISTS" data={relatedArtists} link="#"></HorizontalList>
                    <HorizontalList title={`TOP TRACKS BY ${track.artists[0].name.toUpperCase()}`} data={topTracks} link="#"></HorizontalList>
                </TrackContainer>
            }
        </div>

    )
}

export default Track
