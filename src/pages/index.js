import * as React from 'react'
import { graphql } from 'gatsby'

import MovieGrid from '../components/MovieGrid'
import MovieBillboard from '../components/MovieBillboard'

import { getRandomValueFromArray } from '../utils/getRandomValueFromArray'
import { mapifyMovies } from '../utils/mapifyMovies'
import FixedContainer from '../components/FixedContainer'


export default function HomePage({ data }) {
	let movies = data.allRestApiGetMovies.edges[0].node.movies // I know, I know

	// create map for easier setting/removing
	movies = mapifyMovies( movies )

	/**
	 * Get random movie(s)
	 *
	 * @param {number} count
	 * @param {string} genre
	 *
	 * @return {array} movies
	 */
	const getRandomMovies = ( count, genre = '' ) => {
		const selections = []

		let selectableMovies = movies

		// if provided, pull movies only from genre
		if( genre ) {
			selectableMovies = new Map

			movies.forEach( ( val, key ) => {
				if( genre === val.genre ) {
					selectableMovies.set( key, val )
				}
			})
		}

		for( let i = 0; i < count; i++ ) {
			const movieIndex = getRandomValueFromArray( Array.from( selectableMovies.keys() ) )

			selections.push( selectableMovies.get( movieIndex ) )

			// prevent movie from being picked again
			movies.delete( movieIndex )
			selectableMovies.delete( movieIndex )
		}

		return selections
	}

	return (
		<>
			<MovieBillboard
				movie={ getRandomMovies( 1 )[0] }
			/>
			<FixedContainer>
				<MovieGrid
					headline="New Releases"
					movies={ getRandomMovies( 4 ) }
				/>
				<MovieGrid
					headline="Trending Now"
					movies={ getRandomMovies( 4 ) }
				/>
				<MovieGrid
					headline="We Think You'll Love These"
					movies={ getRandomMovies( 4 ) }
				/>
				<MovieGrid
					headline="Action-Packed Rides"
					link="/genres/action"
					linkText="View all Action movies"
					movies={ getRandomMovies( 4, 'action' ) }
				/>
				<MovieGrid
					headline="Spooky Frights"
					link="/genres/horror"
					linkText="View all Horror movies"
					movies={ getRandomMovies( 4, 'horror' ) }
				/>
				<MovieGrid
					headline="Not So Serious Romps"
					link="/genres/comedy"
					linkText="View all Comedy movies"
					movies={ getRandomMovies( 4, 'comedy' ) }
				/>
				<MovieGrid
					headline="Date Night Flicks"
					link="/genres/romance"
					linkText="View all Romance movies"
					movies={ getRandomMovies( 4, 'romance' ) }
				/>
			</FixedContainer>
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
