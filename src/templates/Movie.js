import { graphql } from 'gatsby'
import React from 'react'
import MovieBillboard from '../components/MovieBillboard'


export default function SingleMovieTemplate({ data, pageContext }) {
	const { movie } = pageContext

	return (
		<>
			<MovieBillboard
				movie={movie}
			/>
		</>
	)
}
