import { graphql } from 'gatsby'
import React from 'react'


export default function SingleMovieTemplate({ data, pageContext }) {
	const { movie } = pageContext

	return (
		<>
			<h1>{movie.title}</h1>
			<p>{movie.tagline}</p>
		</>
	)
}
