import React from 'react'

function Artist({ match }) {
    return (
        <div>
            {match.params.pathname}
        </div>
    )
}

export default Artist
