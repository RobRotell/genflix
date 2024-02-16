import { graphql } from 'gatsby'
import React from 'react'
import MovieGrid from '../components/MovieGrid'
import FixedContainer from '../components/FixedContainer'
import Billboard from '../components/Billboard'
import { ucWordsString } from '../utils/ucWordsString'


export default function SingleGenreTemplate({ pageContext }) {
	let { movies, genre } = pageContext

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
		<>
			<Billboard
				title={ucWordsString( genre )}
			/>
			<FixedContainer>
				<MovieGrid
					movies={movies}
				/>
			</FixedContainer>
		</>
	)
}
