import React from 'react'

import * as styles from './style.module.css'



const FixedContainer = ({ children }) => {


	return (
		<div className={styles.container}>
			{children}
		</div>
	)
}


export default FixedContainer
