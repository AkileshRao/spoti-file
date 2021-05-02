import React from 'react'
import { useHistory } from 'react-router-dom'
import BigGridListContainer from '../styles/component/BigGridList';

function BigGridList({ data, type, title }) {
    const history = useHistory()

    return (
        <BigGridListContainer>
            {title && <h1>{title}</h1>}
            <div className="bg-data">
                {
                    data && data.map(element => (
                        <div className='bg-element' key={element.id} onClick={() => history.push(`/${type}/${element.id}`)} title={element.name}>
                            <img src={element.image} alt={element.name} />
                            <div className='bg-element-info' >
                                <p>{element.name}</p>
                                {element.subText ? <p className='sub-text'>{element.subText}</p> : null}
                            </div>
                        </div>
                    ))
                }
            </div>
        </BigGridListContainer>
    )
}

export default BigGridList
