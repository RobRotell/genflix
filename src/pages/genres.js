import * as React from 'react'
import { graphql } from 'gatsby'
import { ucWordsString } from '../utils/ucWordsString'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieGrid from '../components/MovieGrid'



const GenresPage = ({ data }) => {
	let genreMap = new Map

	data.allRestApiGetMovies.edges[0].node.movies.forEach( movie => {
		const { genre } = movie

		if( !genreMap.has( genre ) ) {
			genreMap.set( genre, [] )
		}

		genreMap.get( genre ).push( movie )
	})

	genreMap = new Map( [ ...genreMap.entries() ].sort() )


	return (
		<>
			<Billboard
				title="Genres"
			/>
			<FixedContainer>
				{Array.from( genreMap ).map( ( [ genre, movies ] ) => {
					const genreUc = ucWordsString( genre )

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
						<MovieGrid
							key={genre}
							headline={genreUc}
							link={`/genres/${genre}`}
							linkText={`View All ${genreUc} Movies`}
							movies={ movies.toSorted().slice( 0, 8 )}
						/>
					)
				} )}
			</FixedContainer>
		</>
	)
}


export default GenresPage


// todo -- fix query so that it only pulls movie of specific genre (conflicts with REST plugin?)
export const query = graphql`
	query {
		allRestApiGetMovies {
			edges {
				node {
					movies {
						id
						title
						genre
						imageUrl
					}
				}
			}
		}
	}
`
