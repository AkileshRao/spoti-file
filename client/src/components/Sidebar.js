import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaRegUser, FaHistory, FaGithub } from 'react-icons/fa'
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
                    <Link to='/profile' className={currentPage == '/profile' ? 'active' : null}><FaRegUser /></Link>
                </NavItem>
                <NavItem>
                    <Link to='/recents' className={currentPage == '/recents' ? 'active' : null}><FaHistory /></Link>
                </NavItem>
            </LinksList>
            <SVGIcon onClick={logout} >
                <IoMdPower />
            </SVGIcon>
        </SidebarContainer>
    )
}

export default Sidebar
