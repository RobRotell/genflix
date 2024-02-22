import React, { useEffect, useRef, useState } from 'react'

import { Link, graphql, useStaticQuery } from 'gatsby'
import { ucWordsString } from '../../utils/ucWordsString'

import Icon from '../Icon'

import * as styles from './style.module.css'



const Nav = ({ location: { pathname } }) => {

	// get genres to appear as submenu items
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
	const refNav = useRef( null )
	const refGenreSubMenu = useRef( null )
	const refHamburgerIcon = useRef( null )
	const refGenreSubMenuBtn = useRef( null )

	const handleMobileMenuClick = () => {
		const menuIsActive = refNav.current.classList.contains( styles.navIsActive )

		refNav.current.classList.toggle( styles.navIsActive, !menuIsActive )
		refHamburgerIcon.current.classList.toggle( styles.navIsActive, !menuIsActive )
	}

	const handleSubMenuClick = () => {
		const subMenuIsActive = refGenreSubMenu.current.classList.contains( styles.subMenuIsActive )

		refGenreSubMenu.current.classList.toggle( styles.subMenuIsActive, !subMenuIsActive )
		refGenreSubMenuBtn.current.classList.toggle( styles.subMenuIsActive, !subMenuIsActive )
	}

	// detect page change and auto-hide menu
	useEffect( () => {
		refNav.current.classList.remove( styles.navIsActive )
		refHamburgerIcon.current.classList.remove( styles.navIsActive )

		refGenreSubMenu.current.classList.remove( styles.subMenuIsActive )
		refGenreSubMenuBtn.current.classList.remove( styles.subMenuIsActive )
	}, [ pathname ] )


	return (
		<div className={styles.container}>
			<button
				className={styles.hamburgerBtn}
				onClick={handleMobileMenuClick}
				type="button"
				ref={refHamburgerIcon}
			>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
				<span className={styles.line}></span>
			</button>

			<nav className={styles.nav} ref={refNav}>
				<ul className={styles.navItems}>

					<li className={styles.navItem}>
						<Link
							to="/genres"
							className={styles.navItemLink}
							activeClassName={styles.navItemLinkActive}
						>
							Genres
						</Link>

						<button
							className={styles.subNavBtn}
							type="button"
							onClick={handleSubMenuClick}
							ref={refGenreSubMenuBtn}
						>
							<Icon
								symbol="chevron"
								className={styles.subNavBtnIcon}
							/>
						</button>

						<ul className={styles.subNavItems} ref={refGenreSubMenu}>
							{genres.map( genre => (
								<li key={genre} className={styles.subNavItem}>
									<Link
										to={`/genres/${genre}`}
										className={styles.subNavItemLink}
										activeClassName={styles.subNavItemLinkActive}
									>
										{ucWordsString( genre )}
									</Link>
								</li>
							)) }
						</ul>
					</li>

					<li className={styles.navItem}>
						<Link
							to="/about"
							className={styles.navItemLink}
							activeClassName={styles.navItemLinkActive}
						>
							About
						</Link>
					</li>

				</ul>
			</nav>
		</div>
	)
}


export default Nav
