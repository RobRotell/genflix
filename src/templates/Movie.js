import { graphql } from 'gatsby'
import React from 'react'
import Billboard from '../components/Billboard'


export default function SingleMovieTemplate({ pageContext }) {
	const { movie, movieImg } = pageContext

	return (
		<>
			<Billboard
				title={movie.title}
				tagline={movie.tagline}
				imageObj={movieImg}
			/>
		</>
	)
}
