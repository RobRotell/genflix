import React from 'react'
import { Link } from 'gatsby'

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
			{ link && linkText ? ( <Link to={link} className={styles.link}>{ linkText }</Link> ) : '' }
		</section>
	)
}


export default MovieGrid
