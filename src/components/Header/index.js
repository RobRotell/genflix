import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import FixedContainer from '../FixedContainer'
import Logo from '../Logo'
import Nav from '../Nav'

import * as styles from './style.module.css'



const Header = ({ location }) => {

	// cache for later manipulation
	const headerRef = useRef( null )


	return (
		<header className={styles.header} ref={headerRef}>
			<FixedContainer>
				<div className={styles.content}>
					<Link to="/">
						<Logo />
					</Link>
					<Nav location={location} />
				</div>
			</FixedContainer>
		</header>
	)
}


export default Header
