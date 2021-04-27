import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { $DirectionButton } from '../../common/styles/Buttons'
import HorizontalListContainer from './styles';
import HorizontalListItem from '../HorizontalListItem';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const HorizontalList = ({ title, data, link }) => {
    const listRef = useRef(null)

    const goBack = () => listRef.current.scrollBy(-300, 0)
    const goNext = () => listRef.current.scrollBy(300, 0)

    return (
        <HorizontalListContainer>
            <div className='h-list-head'>
                <Link to={link} className='h-list-head-title'>{title}</Link>
                <div className='h-list-head-buttons'>
                    <$DirectionButton onClick={goBack}><MdChevronLeft /></$DirectionButton>
                    <$DirectionButton onClick={goNext}><MdChevronRight /></$DirectionButton>
                </div>
            </div>
            <div className='h-list-items' ref={listRef}>
                {
                    data && data.map(el => (
                        <HorizontalListItem key={el.id} id={el.id} name={el.name} image={el.image.url} />
                    ))
                }
            </div>
        </HorizontalListContainer>
    )
}

export default HorizontalList
