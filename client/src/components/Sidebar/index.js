import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdMusicalNote } from 'react-icons/io'
import { RiHistoryLine } from 'react-icons/ri'
import { IoMdPower } from 'react-icons/io'
import SidebarContainer from './styles'
import { logout } from '../../common/scripts/spotify'

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
                <Link to='/profile' className={currentPage == '/profile' ? 'active nav-link' : 'nav-link'}><FaRegUserCircle /></Link>
                <Link to='/recents' className={currentPage == '/recents' ? 'active nav-link' : 'nav-link'}><RiHistoryLine /></Link>
                <Link to='/tracks' className={currentPage == '/tracks' ? 'active nav-link' : 'nav-link'}><IoMdMusicalNote /></Link>
            </div>
            <IoMdPower class='svg-icon' onClick={logout} />
        </SidebarContainer>
    )
}

export default Sidebar
