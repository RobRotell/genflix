import React from 'react'
import { Link } from 'gatsby'

import FixedContainer from '../FixedContainer'
import Logo from '../Logo'

import * as styles from './style.module.css'



const Footer = ({ children }) => {

	const navItems = [
		{
			link: '/genres',
			text: 'Genres',
		},
		{
			link: '/about',
			text: 'About',
		}
	]


	return (
		<footer className={styles.footer}>
			<FixedContainer>
				<div className={styles.content}>
					<Link to="/" className={styles.logoContainer}>
						<Logo width={117} height={52} />
					</Link>
					<nav className={styles.nav}>
						{navItems.map( navItem => (
							<Link
								key={navItem.link}
								to={navItem.link}
								className={styles.navItem}
							>{navItem.text}</Link>
						) )}
					</nav>
					<a className={styles.githubLink} href="https://github.com/RobRotell/synflix" target="_blank">
						github logo
					</a>
				</div>
			</FixedContainer>
		</footer>
	)
}


export default Footer
