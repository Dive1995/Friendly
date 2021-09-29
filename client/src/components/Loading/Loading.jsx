import React from 'react'
import StyledLoading from './Loading.styled'

function Loading() {
    return (
        <StyledLoading>
            <div className="lds-ripple"><div></div><div></div></div>
        </StyledLoading>
    )
}

export default Loading
