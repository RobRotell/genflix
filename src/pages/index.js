import * as React from 'react'
import { graphql } from 'gatsby'

import MovieSpotlightGrid from '../components/MovieSpotlightGrid'
import MovieBillboard from '../components/MovieBillboard'

import { getRandomValueFromArray } from '../utils/getRandomValueFromArray'
import { mapifyMovies } from '../utils/mapifyMovies'


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

		console.log( movies.size )

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
		}

		console.log( movies.size )

		return selections
	}

	return (
		<>
			{
				<MovieBillboard
					movie={ getRandomMovies( 1 )[0] }
				/>
			}
			{
				<MovieSpotlightGrid
					headline="New Releases"
					link=""
					movies={ getRandomMovies( 5 ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="Trending Now"
					link=""
					movies={ getRandomMovies( 5 ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="We Think You'll Love These"
					link=""
					movies={ getRandomMovies( 5 ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="Action-Packed Rides"
					link=""
					movies={ getRandomMovies( 5, 'action' ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="Spooky Flicks"
					link=""
					movies={ getRandomMovies( 5, 'horror' ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="Not So Serious Romps"
					link=""
					movies={ getRandomMovies( 5, 'comedy' ) }
				/>
			}

			{
				<MovieSpotlightGrid
					headline="Date Night Ideas"
					link=""
					movies={ getRandomMovies( 5, 'romance' ) }
				/>
			}

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
