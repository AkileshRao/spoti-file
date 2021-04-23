import React, { useRef } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DirectionButton } from '../styles/Buttons'
import HorizontalListItem from './HorizontalListItem'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const HList = styled.div`
    padding:0 2rem;
    scroll-behavior: smooth;
    .item-list{
        scroll-behavior: smooth;
        display:flex;
        // align-items:center;
        overflow-x:auto;
        width: calc(100vw - 160px);
        ::-webkit-scrollbar {
            width: 0;
            height:0;  /* Remove scrollbar space */
            background: transparent;  /* Optional: just make scrollbar invisible */
        }
    }   
`

const HListHead = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    a{
        text-decoration:none;
        font-size: .9rem;
        font-family: Circular Bold;
        transition : .2s ease-in-out;
        &:hover{
            color:var(--green) !important;
        }
    }
`

function HorizontalList({ title, data, link }) {
    const listRef = useRef(null)

    const goBack = () => {
        listRef.current.scrollBy(-300, 0)
        // console.log("Hehe");
    }

    const goNext = () => {
        listRef.current.scrollBy(300, 0)
    }

    return (
        <HList >
            <HListHead>
                <Link to={link} style={{
                    color: 'var(--white)',
                    letterSpacing: '2px',
                    margin: '1rem 0'
                }}>{title}</Link>
                <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1rem' }}>
                    <DirectionButton onClick={goBack}><MdChevronLeft /></DirectionButton>
                    <DirectionButton onClick={goNext}><MdChevronRight /></DirectionButton>
                </div>
            </HListHead>
            <div className='item-list' ref={listRef}>
                {
                    data && data.map(el => (
                        <HorizontalListItem key={el.id} id={el.id} name={el.name} image={el.image.url} />
                    ))
                }
            </div>
        </HList>
    )
}

export default HorizontalList
