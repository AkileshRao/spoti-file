import { getHashParams } from "."
import axios from 'axios'

const URL = "https://api.spotify.com/v1/"
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
        const { data } = await axios.get(`/refresh_token?refresh_token=${getLocalRefreshToken()}`);
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

const headers = {
    Authorization: `Bearer ${getLocalAccessToken()}`,
    'Content-Type': 'application/json',
};

export const getUserDetails = () => axios.get(`${URL}me`, { headers })

export const getUsersFollowedArtists = () => axios.get(`${URL}me/following`, { headers, params: { type: "artist", limit: "10" } })

export const getUsersTopArtists = (limit = 25) => axios.get(`${URL}me/top/artists`, { headers, params: { limit } })

export const getUsersTopTracks = (limit = 25) => axios.get(`${URL}me/top/tracks`, { headers, params: { limit } })

export const getATrack = (id) => axios.get(`${URL}tracks/${id}`, { headers })

export const getRelatedArtists = (id) => axios.get(`${URL}artists/${id}/related-artists`, { headers })

export const getArtistTopTracks = (id) => axios.get(`${URL}artists/${id}/top-tracks`, { headers, params: { country: "IN" } })
