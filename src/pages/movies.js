import * as React from 'react'
import { graphql } from 'gatsby'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieGrid from '../components/MovieGrid'
import SEO from '../components/SEO'



const MoviesPage = ({ data }) => {
	let movies = data.allRestApiGetMovies.edges[0].node.movies

	movies.sort( ( a, b ) => {
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
				title="Movies"
				tagline="Experience the future of cinema with our cutting-edge AI-generated films. From thrilling suspense to heartwarming drama, we offer something for everyone."
			/>
			<FixedContainer>
				<MovieGrid movies={ movies } />
			</FixedContainer>
		</>
	)
}


export default MoviesPage


export const Head = () => (
	<SEO
		title="Movies | Synflix"
		description="Experience the future of cinema with our cutting-edge AI-generated films. From thrilling suspense to heartwarming drama, we offer something for everyone."
	/>
)


// todo -- fix query so that it only pulls movie of specific genre (conflicts with REST plugin?)
export const query = graphql`
	query {
		allRestApiGetMovies {
			edges {
				node {
					movies {
						id
						title
						imageUrl
					}
				}
			}
		}
	}
`
