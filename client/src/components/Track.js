import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getArtistTopTracks, getATrack, getRelatedArtists } from '../spotify';
import { $OutlineButton } from '../styles/Buttons';
import { msToMinSec } from '../utils';
import HorizontalList from './HorizontalList';
import { AiFillPlayCircle } from 'react-icons/ai'
import { useHistory } from 'react-router';
const $TrackContainer = styled.div`
    color : var(--white);
    padding:2rem;
    .track-info{
        display: flex;
        align-items:center;
        gap:1.5rem;
        margin-bottom:2rem;
        h1{ margin : .5rem 0};
        .track-image{
            position:relative;
            display:flex;
            align-items:center;
            justify-content : center;
            cursor:pointer;
            img{transition: .2s ease-in-out;}
            svg{
                position: absolute;
                opacity:0;
                transition: .2s ease-in-out;
                font-size:4rem;
                color: var(--green);
                filter: brightness(1);
            };
            &:hover{
                img{filter: brightness(.5);}
                svg{opacity:1;}
            }
        }
        p{
            margin : .5rem 0 .8rem 0;
            opacity: .5;
            font-family: Circular Book;
            letter-spacing : 1px;
            font-size : .9rem;
        }
    }
    .related-artists{ margin-top:2rem }
`

function Track({ match }) {
    const history = useHistory()
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
    }, [])


    return (
        <div>
            { track &&
                <$TrackContainer>
                    <div className='track-info'>
                        <div className='track-image' onClick={() => { window.location.href = track.external_urls.spotify }}>
                            <img src={track.album.images[0].url} alt={track.name} height='150' style={{ borderRadius: "5px" }} />
                            <AiFillPlayCircle />
                        </div>
                        <div className='track-text'>
                            <h1>{track.name}</h1>
                            <p>{msToMinSec(track.duration_ms)}&nbsp;·&nbsp;{track.album.name} ( {track.album.release_date.slice(0, 4)} )  </p>
                            {track.artists && track.artists.map(artist => <$OutlineButton key={artist.id} style={{ margin: "0 .5rem 0 0" }}>{artist.name}</$OutlineButton>)}
                        </div>
                    </div>
                    <HorizontalList title="RELATED ARTISTS" data={relatedArtists} link="#"></HorizontalList>
                    <HorizontalList title={`TOP TRACKS BY ${track.artists[0].name.toUpperCase()}`} data={topTracks} link="#"></HorizontalList>
                </$TrackContainer>
            }
        </div>

    )
}

export default Track
