import React from 'react'

import { ucWordsString } from '../../utils/ucWordsString'

import * as styles from './style.module.css'



const MovieMeta = ({ tagline, director, year, genre }) => {

	const createRandomRuntime = () => {
		const totalMinutes = Math.ceil( Math.random() * ( 160 - 80 ) + 80 )
		const hours = Math.floor( totalMinutes / 60 )
		const minutes = totalMinutes - ( 60 * hours )

		return `${hours}h ${minutes}m`
	}

	const runtime = createRandomRuntime()


	return (
		<>
			<div className={styles.metaContainer}>

				<div className={styles.metaLeft}>
					<span className={styles.year}>{year}</span>
					<span className={styles.runtime}>{runtime}</span>

					<div className={styles.tagline}>{tagline}</div>
				</div>

				<div className={styles.metaRight}>
					<div className={styles.metaRow}>
						<span className={styles.label}>Director</span>
						<span className={styles.value}>{director}</span>
					</div>
					<div className={styles.metaRow}>
						<span className={styles.label}>Genre</span>
						<span className={styles.value}>{ucWordsString( genre )}</span>
					</div>
				</div>

			</div>
		</>
	)
}


export default MovieMeta
