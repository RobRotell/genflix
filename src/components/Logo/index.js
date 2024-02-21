import React from 'react'

import * as styles from './style.module.css'



const Logo = ({ width = 180, height = 80 }) => {


	return (
		<div
			className={styles.logoContainer}
			style={{
				'--width': `${width}px`,
				'--height': `${height}px`,
			}}
		>
			<>Logo</>
		</div>
	)
}


export default Logo
