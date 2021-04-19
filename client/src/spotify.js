import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getHashParams } from "./utils"

const SpotifyContext = React.createContext()

const SpotifyProvider = ({ children }) => {
    const history = useHistory()
    useEffect(() => {
        const { access_token, refresh_token } = getHashParams();
        if (access_token || refresh_token) {
            localStorage.setItem("spotifile_access_token", access_token)
            localStorage.setItem("spotifile_refresh_token", refresh_token)
            setTimeout(() => history.push('/profile'), 0)
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("spotifile_access_token")
        localStorage.removeItem("spotifile_refresh_token")
        history.push("/")
    }

    return (
        <SpotifyContext.Provider value={{
            logout
        }}>{children}</SpotifyContext.Provider>
    )
}

export { SpotifyContext, SpotifyProvider }