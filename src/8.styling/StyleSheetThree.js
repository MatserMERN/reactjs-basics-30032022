import React from 'react'
import './appStyles.css'
import styles from './appStyles.module.css'

function StyleSheetThree() {
  return (
    <div>
        <h1 className="error">Error class should be applied</h1>
        <h1 className="success">Success class should be applied</h1>

        <br />
        <h1 className={styles.error}>Error class should be applied</h1>
        <h1 className={styles.success}>Success class should be applied</h1>
    </div>
  )
}

export default StyleSheetThree