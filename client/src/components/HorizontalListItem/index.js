import React from 'react'
import HorizontalListItemContainer from './styles';

const HorizontalListItem = ({ id, name, image }) => {
    return (
        <HorizontalListItemContainer title={name}>
            <img src={image} alt={name} height="125" />
            <p >{name.length > 12 ? name.slice(0, 12) + "..." : name}</p>
        </HorizontalListItemContainer>
    )
}

export default HorizontalListItem
