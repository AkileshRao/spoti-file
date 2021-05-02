import React from 'react'
import LoaderContainer from '../styles/component/Loader'
import anime from 'animejs'
const Loader = () => {

    return (
        <LoaderContainer>
            <div className='icon'>
                <div className='icon-line'></div>
                <div className='icon-line'></div>
                <div className='icon-line'></div>
            </div>
        </LoaderContainer>
    )
}

export default Loader
