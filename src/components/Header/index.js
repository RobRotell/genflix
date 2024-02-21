import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'gatsby'

import FixedContainer from '../FixedContainer'
import Logo from '../Logo'
import Nav from '../Nav'

import * as styles from './style.module.css'



const Header = ({ location }) => {

	// cache for later manipulation
	const headerRef = useRef( null )

	// roundabout way to set event listener (without useState, event listener would be applied to page every time we changed route)
	const [ headerScrollCheck, setHeaderScrollCheck ] = useState( false )
    useEffect( () => {
		setHeaderScrollCheck( true )

		// todo -- debounce
		document.addEventListener( 'scroll', () => {
			if( 300 <= window.scrollY ) {
				if( !headerRef.current.classList.contains( styles.hasBg ) ) {
					headerRef.current.classList.add( styles.hasBg )
				}
			} else {
				if( headerRef.current.classList.contains( styles.hasBg ) ) {
					headerRef.current.classList.remove( styles.hasBg )
				}
			}
		}, {
			passive: true
		})

    }, [ headerScrollCheck ] )



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
