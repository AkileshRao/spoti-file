import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getUserDetails, getUsersFollowedArtists, getUsersTopTracks, getUsersTopArtists } from '../spotify'
import HorizontalList from './HorizontalList'
import Loader from './Loader'

const Top = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    gap:1rem;
    margin-top:2rem;
    img{ border-radius:100px; border : 3px solid var(--green); padding:.7rem;};
`

const TopData = styled.div`
    margin:0 1rem;
    display:flex;
    flex-direction:column;
    align-items:center;
    h1{ color: var(--white); margin: 0; };
`
const Data = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:.5rem;
    gap:1.5rem;
`
const FCount = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    p{letter-spacing:2px;font-size:.9rem;}
    .count-heading{ margin:1rem 0 0 0; opacity:.5 ;color: var(--white)};
    .count-value{ margin:.5rem; color :var(--green)}
`

function Profile() {
    const [user, setUser] = useState(null);
    const [followingCount, setFollowingCount] = useState(0)
    const [topTracks, setTopTracks] = useState(null)
    const [topArtists, setTopArtits] = useState(null)

    useEffect(() => {
        getUserDetails()
            .then(res => setUser(res.data))
            .catch(err => console.log(err))

        getUsersFollowedArtists()
            .then(res => setFollowingCount(res.data.artists.total))
            .catch(err => console.log(err))

        getUsersTopTracks(10)
            .then(res => {
                const data = res.data.items.map(track => ({ id: track.id, name: track.name, image: track.album.images[0] }));
                setTopTracks(data);
            })
            .catch(err => console.log(err))

        getUsersTopArtists(10)
            .then(res => {
                const data = res.data.items.map(artist => ({ id: artist.id, name: artist.name, image: artist.images[0] }));
                setTopArtits(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            {
                user ?
                    <div>
                        <Top>
                            <img src={user.images[0].url} alt="" height='175' />
                            <TopData>
                                <h1>{user.display_name}</h1>
                                <Data>
                                    <FCount>
                                        <p className='count-heading'>FOLLOWERS</p>
                                        <p className='count-value'>{user.followers.total}</p>
                                    </FCount>
                                    <FCount>
                                        <p className='count-heading'>FOLLOWING</p>
                                        <p className='count-value'>{followingCount}</p>
                                    </FCount>
                                </Data>
                            </TopData>
                        </Top>

                        <HorizontalList title="TOP TRACKS" data={topTracks} link='/tracks'></HorizontalList>
                        <HorizontalList title="TOP ARTISTS" data={topArtists} link='/artists'></HorizontalList>
                    </div>
                    :
                    <Loader />
            }
        </div>
    )
}

export default Profile
