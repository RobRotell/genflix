import React from 'react'
import { ucWordsString } from '../utils/ucWordsString'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieGrid from '../components/MovieGrid'
import SEO from '../components/SEO'



const SingleGenreTemplate = ({ pageContext }) => {
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


export const Head = ({ pageContext }) => {
	const { genre } = pageContext

	return (
		<SEO
			title={`${ucWordsString( genre )} Movies | Synflix`}
			description="Experience the future of cinema with our cutting-edge AI-generated films. From thrilling suspense to heartwarming drama, we offer something for everyone."
		/>
	)
}


export default SingleGenreTemplate
