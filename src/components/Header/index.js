import React, { useRef } from 'react'
import * as styles from './style.module.css'
import Logo from '../Logo'
import { Link, graphql, useStaticQuery } from 'gatsby'
import FixedContainer from '../FixedContainer'


const Header = ({ children, data }) => {

	// get genres to appear as submenu
	// todo -- optimize query
	const query = useStaticQuery( graphql`
		{
			allRestApiGetMovies {
				edges {
					node {
						movies {
							genre
						}
					}
				}
			}
		}
	`)

	let genres = []

	query.allRestApiGetMovies.edges[0].node.movies.forEach( movie => {
		if( !genres.includes( movie.genre ) ) {
			genres.push( movie.genre )
		}
	})

	genres = genres.sort()

	// cache for later manipulation
	const navRef = useRef( null )
	const headerRef = useRef( null )
	const genreSubMenuRef = useRef( null )

	const handleMobileMenuClick = e => {
		navRef.current.classList.toggle( styles.navIsActive, !navRef.current.classList.contains( styles.navIsActive ) )
	}

	const handleSubMenuClick = e => {
		genreSubMenuRef.current.classList.toggle( styles.subMenuIsActive, !genreSubMenuRef.current.classList.contains( styles.subMenuIsActive ) )
	}

	window.addEventListener( 'scroll', e => {

		// todo -- troubleshoot bug with ref erroring out when changing pages
		if( headerRef && headerRef.current ) {
			headerRef.current.classList.toggle( styles.hasBg, 250 < window.scrollY )
		}
	})


	return (
		<header className={styles.header} ref={headerRef}>
			<FixedContainer>
				<div className={styles.headerContentContainer}>
					<Link to="/">
						<Logo />
					</Link>

					<div className={styles.navContainer}>
						<button className={styles.hamburgerBtn} type="button" title="Expand Menu" onClick={handleMobileMenuClick}>
							<span className={styles.line}></span>
							<span className={styles.line}></span>
							<span className={styles.line}></span>
						</button>

						<nav className={styles.nav} ref={navRef}>
							<ul className={styles.navItems}>
								<li className={styles.navItem}>
									<Link to="/genres" className={styles.navItemLink}>
										Genres
									</Link>
									<button className={styles.subNavBtn} type="button" onClick={handleSubMenuClick}>&plus;</button>
									<ul className={styles.subNavItems} ref={genreSubMenuRef}>
										{genres.map( genre => (
											<li key={genre} className={styles.subNavItem}>
												<Link className={styles.navItemLink} to={`/genres/${genre}`}>
													{genre.charAt(0).toUpperCase() + genre.slice(1)}
												</Link>
											</li>
										)) }
									</ul>
								</li>
								<li className={styles.navItem}>
									<Link to="/about" className={styles.navItemLink}>
										About
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</FixedContainer>
		</header>
	)
}


export default Header
