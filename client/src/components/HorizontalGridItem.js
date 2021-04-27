import React from 'react'
import { useHistory } from 'react-router';
import HorizontalGridItemContainer from '../styles/component/HorizontalGridItem';

const HorizontalGridItem = ({ id, name, image, type }) => {
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
        <HorizontalGridItemContainer title={name} onClick={redirectToPage}>
            <img src={image} alt={name} height="50" />
            <p >{name.length > 30 ? name.slice(0, 30) + "..." : name}</p>
        </HorizontalGridItemContainer>
    )
}

export default HorizontalGridItem
