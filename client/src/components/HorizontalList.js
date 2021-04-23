import React, { useRef } from 'react'
import styled from 'styled-components'
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
`

function HorizontalList({ title, data }) {
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
                <h5 style={{
                    color: 'var(--white)',
                    letterSpacing: '2px',
                    margin: '1rem 0'
                }}>{title}</h5>
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
