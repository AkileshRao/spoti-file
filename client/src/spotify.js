import { getHashParams } from "./utils"
import axios from 'axios'

const { access_token, refresh_token } = getHashParams();
const URL = "https://api.spotify.com/v1/"

if (access_token || refresh_token) {
    console.log(access_token, refresh_token);
    localStorage.setItem("spotifile_access_token", access_token)
    localStorage.setItem("spotifile_refresh_token", refresh_token)
    setTimeout(() => window.location.href = `${process.env.FRONTEND_URI || 'http://localhost:3000/profile'}`, 0)
}

const localAccessToken = localStorage.getItem('spotifile_access_token')
const localRefreshToken = localStorage.getItem('spotifile_refresh_token')

export const logout = () => {
    localStorage.removeItem("spotifile_access_token")
    localStorage.removeItem("spotifile_refresh_token")
    window.location.reload()
}

//APIs

const headers = {
    Authorization: `Bearer ${localAccessToken}`,
    'Content-Type': 'application/json',
};

export const getUserDetails = () => axios.get(`${URL}me`, { headers })

