import * as React from 'react'
import path from 'path-browserify'
import { graphql, useStaticQuery } from 'gatsby'
import { createMovieUrl } from '../utils/createMovieUrl'
import { getRandomValueFromArray } from '../utils/getRandomValueFromArray'
import { mapifyMovies } from '../utils/mapifyMovies'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieGrid from '../components/MovieGrid'



const HomePage = ({ data }) => {
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


	const billboardMovie = getRandomMovies( 1 )[0]

	// create Gatsby image object of movie image
	const billboardMovieImageObj = data.allFile.nodes.find( node => path.basename( billboardMovie.imageUrl ) === node.base ).childImageSharp.gatsbyImageData


	return (
		<>
			<Billboard
				title={billboardMovie.title}
				tagline={billboardMovie.tagline}
				linkUrl={createMovieUrl( billboardMovie.title )}
				linkText="More Info"
				imageObj={billboardMovieImageObj}
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
					headline="Action-Packed Adrenaline Rushes"
					link="/genres/action"
					linkText="View Action Movies"
					movies={ getRandomMovies( 4, 'action' ) }
				/>
				<MovieGrid
					headline="Spooky Heart-Pounding Frights"
					link="/genres/horror"
					linkText="View Horror Movies"
					movies={ getRandomMovies( 4, 'horror' ) }
				/>
				<MovieGrid
					headline="Not So Serious Romps"
					link="/genres/comedy"
					linkText="View Comedy Movies"
					movies={ getRandomMovies( 4, 'comedy' ) }
				/>
				<MovieGrid
					headline="Date Night Hijinks"
					link="/genres/romance"
					linkText="View Romance Movies"
					movies={ getRandomMovies( 4, 'romance' ) }
				/>
				<MovieGrid
					headline="Infinite Mind-Bending Wonders"
					link="/genres/science-fiction"
					linkText="View Science Fiction Movies"
					movies={ getRandomMovies( 4, 'science fiction' ) }
				/>
				<MovieGrid
					headline="Gun-Slingin' Tall Tales"
					link="/genres/western"
					linkText="View Western Movies"
					movies={ getRandomMovies( 4, 'western' ) }
				/>
				<MovieGrid
					headline="Best of Rubber Hose Cinema"
					link="/genres/animation"
					linkText="View Animation Movies"
					movies={ getRandomMovies( 4, 'animation' ) }
				/>
				<MovieGrid
					headline="Enchanted and Magic Realms"
					link="/genres/fantasy"
					linkText="View Fantasy Movies"
					movies={ getRandomMovies( 4, 'fantasy' ) }
				/>
			</FixedContainer>
		</>
	)
}


export default HomePage


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
						genre
						imageUrl
					}
				}
			}
		}
		allFile {
			nodes {
				base
				childImageSharp {
					gatsbyImageData(
						width: 1600,
						height: 1000,
						quality: 80,
						formats: [ AUTO, WEBP, AVIF ]
					),
				}
			}
		}
	}
`
