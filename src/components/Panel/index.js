import React from 'react'

function PanelWhite({children}) {

    return (
        <div className=" px-4 py-1 my-10 h-fit bg-zinc-50 rounded-3xl bg-white drop-shadow-sm">
            {children}
        </div>
    )
}

export default PanelWhite;