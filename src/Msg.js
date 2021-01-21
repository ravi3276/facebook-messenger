import React from 'react'

function Msg(props) {
    return (
        <div>
            <h2>{props.username}:{props.text}</h2>
        </div>
    )
}

export default Msg
