import React, { useEffect, useState } from 'react'

import { getUserDetails, getUsersFollowedArtists, getUsersTopTracks, getUsersTopArtists } from '../../common/scripts/spotify'
import HorizontalList from '../../components/HorizontalList'
import Loader from '../../components/Loader'
import ProfileContainer from './styles'

const Profile = () => {
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
        <div style={{ padding: '2rem' }}>
            {
                user ?
                    <ProfileContainer>
                        <div className='pc-top'>
                            <img src={user.images[0].url} alt="" height='175' />
                            <div className='pc-top-data'>
                                <h1>{user.display_name}</h1>
                                <div className='pc-top-data-info'>
                                    <div className='pc-top-data-info-count'>
                                        <p className='count-heading'>FOLLOWERS</p>
                                        <p className='count-value'>{user.followers.total}</p>
                                    </div>
                                    <div className='pc-top-data-info-count'>
                                        <p className='count-heading'>FOLLOWING</p>
                                        <p className='count-value'>{followingCount}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HorizontalList title="TOP TRACKS" data={topTracks} link='/tracks'></HorizontalList>
                        <HorizontalList title="TOP ARTISTS" data={topArtists} link='/artists'></HorizontalList>
                    </ProfileContainer>
                    :
                    <Loader />
            }
        </div>
    )
}

export default Profile
