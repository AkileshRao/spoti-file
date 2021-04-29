import React from 'react'
import VerticalListContainer from '../styles/component/VerticalList'
import { useHistory } from 'react-router-dom'

function VerticalList({ type, data }) {
    const history = useHistory()

    return (
        <VerticalListContainer>
            {data && data.map((element, i) => (
                <div className='vl-element' key={i} onClick={() => history.push(`/${type}/${element.id}`)}>
                    <div className='vl-element-info'>
                        <img src={element.image} alt={element.name} height='50' />
                        <div>
                            <p>{element.title}</p>
                            <p style={{ opacity: '.5' }}>{element.subTitle}</p>
                        </div>
                    </div>
                </div>
            ))}
        </VerticalListContainer>
    )
}

export default VerticalList
