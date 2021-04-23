import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaRegUserCircle, FaHistory, FaMusic } from 'react-icons/fa'
import { IoMdMusicalNote } from 'react-icons/io'
import { RiHistoryLine } from 'react-icons/ri'
import { IoMdPower } from 'react-icons/io'
import { LinksList, NavItem, SidebarContainer } from '../styles/Sidebar'
import styled from 'styled-components'
import { logout } from '../spotify'

const SVGIcon = styled.a`
    svg{
        font-size: 1.5rem;
        color: var(--white);
        opacity:.5;
        cursor:pointer;
        text-decoration:none;
        transition:.2s ease-in-out;
        &:hover{
            opacity:1;
        }
    }
`

function Sidebar() {
    const [currentPage, setCurrentPage] = useState('');
    const history = useHistory()

    useEffect(() => {
        setCurrentPage(history.location.pathname);
    }, [history.location.pathname])
    return (
        <SidebarContainer>
            <a href='/'>
                <img src="/spotify-32.png" alt="Home Spotify Icon" />
            </a>
            <LinksList>
                <NavItem>
                    <Link to='/profile' className={currentPage == '/profile' ? 'active' : null}><FaRegUserCircle /></Link>
                </NavItem>
                <NavItem>
                    <Link to='/recents' className={currentPage == '/recents' ? 'active' : null}><RiHistoryLine /></Link>
                </NavItem>
                <NavItem>
                    <Link to='/tracks' className={currentPage == '/tracks' ? 'active' : null}><IoMdMusicalNote /></Link>
                </NavItem>
            </LinksList>
            <SVGIcon onClick={logout} >
                <IoMdPower />
            </SVGIcon>
        </SidebarContainer>
    )
}

export default Sidebar
