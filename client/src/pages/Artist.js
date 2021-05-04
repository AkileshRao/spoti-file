import React, { useEffect, useState } from 'react'
import HorizontalList from '../components/HorizontalList';
import HorizontalGrid from '../components/HorizontalGrid';
import { OutlineButton } from '../styles/common/Buttons';
import ArtistContainer from '../styles/pages/Artist'
import { getAnArtist, getArtistAlbums, getArtistTopTracks, getRelatedArtists } from '../utils/spotify';

function Artist({ match }) {
    const [artist, setArtist] = useState(null);
    const [relatedArtists, setRelatedArtists] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [tracks, setTracks] = useState(null)
    useEffect(() => {
        getAnArtist(match.params.id).then(res => setArtist(res.data)).catch(err => console.log(err));

        getRelatedArtists(match.params.id).then(res => {
            const data = res.data.artists.map(artist => ({ id: artist.id, name: artist.name, image: artist.images[0] }))
            setRelatedArtists(data)
        }).catch(err => console.log(err))

        getArtistAlbums(match.params.id).then(res => {
            const data = res.data.items.map(album => ({ id: album.id, name: album.name, image: album.images[0] }))
            setAlbums(data)
        }).catch(err => console.log(err))

        getArtistTopTracks(match.params.id).then(res => {
            const data = res.data.tracks.map(track => ({ id: track.id, name: track.name, image: track.album.images[0] }))
            setTracks(data)
        }).catch(err => console.log(err))
    }, [match.params.id])
    return (
        <div>
            {
                artist &&
                <ArtistContainer>
                    <div className='a-head'>
                        <img src={artist.images[0].url} alt={artist.name} height='200' />
                        <div className='a-head-info'>
                            <h1>{artist.name}</h1>
                            <p className='popularity'><span>{artist.popularity}%</span> popularity</p>
                            {artist.genres && artist.genres.map(genre => <OutlineButton style={{ marginRight: '.5rem' }}>{genre}</OutlineButton>)}
                        </div>
                    </div>
                    <HorizontalGrid title='ALBUMS' data={albums} link='#' type='albums'></HorizontalGrid>
                    <HorizontalList title='TOP TRACKS' data={tracks} link='#' type='tracks'></HorizontalList>
                    <HorizontalList title='RELATED ARTISTS' data={relatedArtists} type='artists' ></HorizontalList>
                </ArtistContainer>
            }
        </div>

    )
}

export default Artist
