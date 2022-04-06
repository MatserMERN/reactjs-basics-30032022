import React from 'react'
import './Styling.css'

function StylesheetOne(props) {
    let className = props.primary ? 'primary' : 'secondary'
  return (
    <div>
        <h1 className={`${className} enlarge-text`}>Style applied on this Header </h1>
    </div>
  )
}

export default StylesheetOne