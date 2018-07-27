import React from 'react'
import PropTypes from 'prop-types'

import styles from './Notification.css'

const OptIn = props => (
    <div className={styles.optInContainer}>
        {props.children}
        <div className={styles.optInTextContainer}>
            <p className={styles.optIn}>Change tracking</p>
        </div>
    </div>
)

OptIn.propTypes = {
    children: PropTypes.node.isRequired,
}

export default OptIn