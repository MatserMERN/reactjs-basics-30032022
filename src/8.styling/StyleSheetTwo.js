import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function StyleSheetTwo() {
  return (
    <div>
        <h1 style={heading}>Inline Styling</h1>
        <h1 style={{fontSize: '72px', color: 'orange'}}>Inline Styling Again</h1>
    </div>
  )
}

export default StyleSheetTwo