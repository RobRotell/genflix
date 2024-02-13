import { graphql } from 'gatsby'
import React from 'react'
import MovieGrid from '../components/MovieGrid'
import FixedContainer from '../components/FixedContainer'


export default function SingleGenreTemplate({ data, pageContext }) {
	let { movies } = pageContext

	movies = movies.sort( ( a, b ) => {
		const aTitle = a.title.toLowerCase()
		const bTitle = b.title.toLowerCase()

		if( aTitle < bTitle ) {
			return -1
		} else if( bTitle < aTitle ) {
			return 1
		} else {
			return 0
		}
	})

	return (
		<FixedContainer>
			<MovieGrid
				movies={movies}
			/>
		</FixedContainer>
	)
}
