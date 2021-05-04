import React from 'react'
import LoaderContainer from '../styles/component/Loader'
const Loader = () => {

    return (
        <LoaderContainer>
            <div className='icon'>
                <div className='icon-line line-one'></div>
                <div className='icon-line line-two'></div>
                <div className='icon-line line-three'></div>
            </div>
        </LoaderContainer>
    )
}

export default Loader
