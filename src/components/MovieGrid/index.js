import React from 'react'
import MovieGridItem from '../MovieGridItem'
import * as styles from './style.module.css'
import { Link } from 'gatsby'


const MovieGrid = ({ movies, headline, link, linkText }) => {

	console.log( headline, link )

	return (
		<section className={styles.movieGrid}>
			{ headline ? ( <h2 className={styles.movieGridHeadline}>{ headline }</h2> ) : '' }
			<div className={styles.movieGridItems}>
				{movies.map( movie => {
					return (
						<MovieGridItem
							key={movie.id}
							movie={movie}
						/>
					)
				})}
			</div>
			{ link && linkText ? ( <Link to={link} className={styles.movieGridLink}>{ linkText }</Link> ) : '' }
		</section>

	)
}


export default MovieGrid
