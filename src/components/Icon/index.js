import React from 'react'

import * as styles from './style.module.css'



// todo -- abstract into icon component
const IconChevon = ({ symbol = 'chevron', className = '' }) => {

	const renderIcon = () => {
		if( 'chevron' === symbol ) {
			return (
				<span className={className}>
					<svg className={styles.icon} width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2.29517 2.08276L7.27682 6.70859L2.29517 11.3344" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
				</span>
			)
		}

		// add additional icons as needed
	}


	return (
		<>
			{renderIcon()}
		</>
	)
}


export default IconChevon
