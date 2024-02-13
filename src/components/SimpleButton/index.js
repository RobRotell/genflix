import React from 'react'
import { Link } from 'gatsby'
import * as styles from './style.module.css'


const SimpleButton = ({ linkTo, style, children }) => {

	const classes = [
		styles.btn,
	]

	if( 'light' === style ) {
		classes.push( styles.btnLight )
	}

	return (
		<Link
			to={linkTo}
			className={classes.join( ' ' ) }
		>
			{children}
		</Link>
	)


}


export default SimpleButton
