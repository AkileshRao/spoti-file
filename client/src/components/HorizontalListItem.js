import React from 'react'
import { useHistory } from 'react-router';
import HorizontalListItemContainer from '../styles/component/HorizontalListItem';

const HorizontalListItem = ({ id, name, image, type }) => {
    const history = useHistory()
    const redirectToPage = () => {
        switch (type) {
            case "tracks":
                history.push(`/tracks/${id}`);
                break;
            case "artists":
                history.push(`/artists/${id}`);
                break;
            case "albums":
                history.push(`/albums/${id}`);
                break;
            default:
                break;
        }
    }
    return (
        <HorizontalListItemContainer title={name} onClick={redirectToPage}>
            <img src={image} alt={name} height="125" />
            <p >{name.length > 12 ? name.slice(0, 12) + "..." : name}</p>
        </HorizontalListItemContainer>
    )
}

export default HorizontalListItem
