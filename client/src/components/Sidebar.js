import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdMusicalNote } from 'react-icons/io'
import { RiPlayListFill } from 'react-icons/ri'
import { IoMdPower } from 'react-icons/io'
import SidebarContainer from '../styles/component/Sidebar'
import { logout } from '../utils/spotify'
import { IoMdMicrophone } from "react-icons/io";
import { IoSave } from 'react-icons/io5'
const Sidebar = () => {
    const [currentPage, setCurrentPage] = useState('');
    const history = useHistory()

    useEffect(() => setCurrentPage(history.location.pathname), [history.location.pathname])

    return (
        <SidebarContainer>
            <a href='/'>
                <img src="/spotify-32.png" alt="Home Spotify Icon" />
            </a>
            <div className='links-list'>
                <Link to='/profile' className={currentPage === '/profile' ? 'active nav-link' : 'nav-link'}><FaRegUserCircle /></Link>
                <Link to='/artists' className={currentPage === '/artists' ? 'active nav-link' : 'nav-link'}><IoMdMicrophone /></Link>
                <Link to='/tracks' className={currentPage === '/tracks' ? 'active nav-link' : 'nav-link'}><IoMdMusicalNote /></Link>
                <Link to='/saved' className={currentPage === '/saved' ? 'active nav-link' : 'nav-link'}><IoSave /></Link>
                <Link to='/playlists' className={currentPage === '/playlists' ? 'active nav-link' : 'nav-link'}><RiPlayListFill /></Link>
            </div>
            <IoMdPower className='svg-icon' onClick={logout} />
        </SidebarContainer>
    )
}

export default Sidebar
