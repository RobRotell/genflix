import React from 'react'
import { Link } from 'gatsby'

import Icon from '../Icon'
import MovieGridItem from '../MovieGridItem'

import * as styles from './style.module.css'



const MovieGrid = ({ movies, headline, link, linkText }) => {


	return (
		<section className={styles.grid}>
			{ headline ? ( <h2 className={styles.headline}>{ headline }</h2> ) : '' }
			<div className={styles.items}>
				{movies.map( movie => {
					return (
						<MovieGridItem
							key={movie.id}
							movie={movie}
						/>
					)
				})}
			</div>
			{ link && linkText ? (
				<Link to={link} className={styles.link}>
					{ linkText }
					<Icon
						symbol="chevron"
						className={styles.icon}
					/>
				</Link>
			) : '' }
		</section>
	)
}


export default MovieGrid
