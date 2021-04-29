import { getHashParams } from "."
import axios from 'axios'

const EXPIRATION_TIME = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

const setTokenTimestamp = () => window.localStorage.setItem('spotifile_token_timestamp', Date.now());
const setLocalAccessToken = token => {
    setTokenTimestamp();
    window.localStorage.setItem('spotifile_access_token', token);
};
const setLocalRefreshToken = token => window.localStorage.setItem('spotifile_refresh_token', token);
const getTokenTimestamp = () => window.localStorage.getItem('spotifile_token_timestamp');
const getLocalAccessToken = () => window.localStorage.getItem('spotifile_access_token');
const getLocalRefreshToken = () => window.localStorage.getItem('spotifile_refresh_token');

const refreshAccessToken = async () => {
    try {
        const { data } = await axios.get(`http://localhost:8000/refresh_token?refresh_token=${getLocalRefreshToken()}`);
        const { access_token } = data;
        setLocalAccessToken(access_token);
        window.location.reload();
        return;
    } catch (e) {
        console.error(e);
    }
};

export const getAccessToken = () => {
    const { error, access_token, refresh_token } = getHashParams();

    if (error) {
        console.error(error);
        refreshAccessToken();
    }

    if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
        console.warn('Access token has expired, refreshing...');
        refreshAccessToken();
    }

    const localAccessToken = getLocalAccessToken();

    if ((!localAccessToken || localAccessToken === 'undefined') && access_token) {
        setLocalAccessToken(access_token);
        setLocalRefreshToken(refresh_token);
        return access_token;
    }

    return localAccessToken;
};

export const token = getAccessToken();

export const logout = () => {
    window.localStorage.removeItem('spotifile_token_timestamp');
    window.localStorage.removeItem('spotifile_access_token');
    window.localStorage.removeItem('spotifile_refresh_token');
    window.location.reload();
};


//APIs

const URL = "https://api.spotify.com/v1/"

const headers = {
    Authorization: `Bearer ${getLocalAccessToken()}`,
    'Content-Type': 'application/json',
};

//Track
export const getATrack = id => axios.get(`${URL}tracks/${id}`, { headers });

//Playlist
export const getAPlaylist = id => axios.get(`${URL}playlists/${id}`, { headers });
export const getPlaylistItems = id => axios.get(`${URL}playlists/${id}/tracks`, { headers, params: { country: 'IN' } });
export const getPlaylistCover = id => axios.get(`${URL}playlists/${id}/images`, { headers });

//Album
export const getAnAlbum = id => axios.get(`${URL}albums/${id}`, { headers });
export const getAlbumTracks = id => axios.get(`${URL}albums/${id}/tracks`, { headers });

//Artist
export const getAnArtist = id => axios.get(`${URL}artists/${id}`, { headers });
export const getRelatedArtists = id => axios.get(`${URL}artists/${id}/related-artists`, { headers });
export const getArtistAlbums = id => axios.get(`${URL}artists/${id}/albums`, { headers });
export const getArtistTopTracks = id => axios.get(`${URL}artists/${id}/top-tracks`, { headers, params: { country: "IN" } });

//User
export const getUserDetails = () => axios.get(`${URL}me`, { headers });
export const getUserSavedAlbums = () => axios.get(`${URL}me/albums`, { headers });
export const getUserSavedTracks = (limit = 8) => axios.get(`${URL}me/tracks`, { headers, params: { limit } });
export const getUserPlaylists = () => axios.get(`${URL}me/playlists`, { headers });
export const getUserRecentlyPlayedTracks = (limit = 8) => axios.get(`${URL}me/player/recently-played`, { headers, params: { limit } });
export const getUserFollowedArtists = () => axios.get(`${URL}me/following`, { headers, params: { type: "artist", limit: "10" } })
export const getUserTopTracks = (limit = 25, time_range = 'long_term') => axios.get(`${URL}me/top/tracks`, { headers, params: { limit, time_range } })
export const getUserTopArtists = (limit = 25, time_range = 'long_term') => axios.get(`${URL}me/top/artists`, { headers, params: { limit, time_range } })



