import React from 'react'
import { graphql } from 'gatsby'
import { ucWordsString } from '../utils/ucWordsString'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieMeta from '../components/MovieMeta'
import MovieGrid from '../components/MovieGrid'



const SingleMovieTemplate = ({ pageContext }) => {
	const { movie, movieImg, allMovies } = pageContext
	const { id, title, tagline, director, year, genre } = movie

	// get movies in same genre to show in related movies grid underneath meta
	const moviesInSameGenre = allMovies.filter( item => {
		return genre === item.genre && id !== item.id
	})


	return (
		<>
			<Billboard
				title={title}
				imageObj={movieImg}
			/>
			<FixedContainer>
				<MovieMeta
					tagline={tagline}
					director={director}
					year={year}
					genre={genre}
				/>
				<MovieGrid
					headline="More Movies Like This"
					movies={moviesInSameGenre.slice( 0, 8 )}
					link={`/genres/${genre}`}
					linkText={`View All ${ucWordsString( genre )} Movies`}
				/>
			</FixedContainer>
		</>
	)
}


export default SingleMovieTemplate
