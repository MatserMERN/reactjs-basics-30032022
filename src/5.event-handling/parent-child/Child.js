import React from 'react'

function Child(props) {
    const {callParent} = props
  return (
    <div>
        <button className="btn btn-primary"
                onClick={() => callParent('Child')}
        >Call Parent</button>
    </div>
  )
}

export default Child