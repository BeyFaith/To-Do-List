import React from 'react'

const Test  = ({ color, ...rest }) => {
    console.log(color, rest)
    return (
        <div>
            {color}
        </div>
    )
}

export default Test
