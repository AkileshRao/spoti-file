import React from 'react'
import { Link } from 'react-router-dom'
import HorizontalGridContainer from '../styles/component/HorizontalGrid'
import HorizontalGridItem from './HorizontalGridItem'

const HorizontalGrid = ({ title, link, data, type }) => {
    return (
        <HorizontalGridContainer>
            <div className='h-grid-head'>
                <Link to={link} className='h-grid-head-title'>{title}</Link>
            </div>
            <div className='h-list-items'>
                {
                    data && data.map((el, index) => (
                        <HorizontalGridItem key={index} id={el.id} name={el.name} image={el.image.url} type={type} />
                    ))
                }
            </div>
        </HorizontalGridContainer>
    )
}

export default HorizontalGrid
