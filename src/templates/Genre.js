import { graphql } from 'gatsby'
import React from 'react'


export default function SingleGenreTemplate({ data, pageContext }) {
	const genre = pageContext.genreName
	let movies = data.allRestApiGetMovies.edges[0].node.movies // I know, I know

	movies = movies.filter( movie => genre === movie.genre )

	console.log( movies )



	return (
		<>
			bob
		</>
	)
}


// todo -- fix query so that it only pulls movie of specific genre (conflicts with REST plugin?)
export const query = graphql`
	query {
		allRestApiGetMovies {
			edges {
				node {
					movies {
						id
						title
						tagline
						director
						genre
						year
						imageUrl
					}
				}
			}
		}
	}
`
