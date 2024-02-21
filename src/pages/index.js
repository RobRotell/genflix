import * as React from 'react'
import path from 'path-browserify'
import { graphql } from 'gatsby'
import { createMovieUrl } from '../utils/createMovieUrl'
import { mapifyMovies } from '../utils/mapifyMovies'

import Billboard from '../components/Billboard'
import FixedContainer from '../components/FixedContainer'
import MovieGrid from '../components/MovieGrid'
import SEO from "../components/SEO"



const HomePage = ({ data }) => {
	const movieImages = data.allFile.nodes
	let movies = data.allRestApiGetMovies.edges[0].node.movies // I know, I know

	// create map for easier setting/removing
	movies = mapifyMovies( movies )

	/**
	 * Get specific movie
	 *
	 * @param {number} id
	 * @param {bool} deleteId If true, delete movie from movies array
	 *
	 * @return {obj|false}
	 */
	const getMovieById = ( id, deleteId = true ) => {
		if( !movies.has( id ) ) {
			return false
		}

		const movie = movies.get( id )

		if( deleteId ) {
			movies.delete( id )
		}

		return movie
	}

	/**
	 * Get movies by genre
	 *
	 * @param {string} genre
	 * @param {number} count
	 *
	 * @return {array}
	 */
	const getMoviesByGenre = ( genre, count = 4 ) => {
		const genreMovies = []

		movies.forEach( ( movie, id ) => {
			if( genre === movie.genre ) {
				genreMovies.push( movie )

				// ensure movie isn't used again
				movies.delete( id )
			}
		})

		return genreMovies.slice( 0, count )
	}

	/**
	 * Get movie image based on movie
	 *
	 * @param {obj} movie
	 * @return {obj|false}
	 */
	const getMovieImage = ({ imageUrl }) => {
		const match = movieImages.find( node => node.base === path.basename( imageUrl ) )

		if( !match ) {
			return false
		}

		return match.childImageSharp.gatsbyImageData
	}

	// these are some of my favorites
	const idBillboard = 84
	const idsNewReleases = [ 64, 88, 61, 176 ]
	const idsTrendingNow = [ 196, 32, 69, 238 ]
	const idsLoveThese = [ 438, 62, 56, 14 ]

	const movieBillboard = getMovieById( idBillboard )


	return (
		<>
			<Billboard
				title={movieBillboard.title}
				tagline={movieBillboard.tagline}
				linkUrl={createMovieUrl( movieBillboard.title )}
				linkText="More Info"
				imageObj={getMovieImage( movieBillboard )}
			/>
			<FixedContainer>
				<MovieGrid
					headline="New Releases"
					movies={idsNewReleases.map( getMovieById )}
				/>
				<MovieGrid
					headline="Trending Now"
					movies={idsTrendingNow.map( getMovieById )}
				/>
				<MovieGrid
					headline="We Think You'll Love These"
					movies={idsLoveThese.map( getMovieById )}
				/>
				<MovieGrid
					headline="Action-Packed Adrenaline Rushes"
					link="/genres/action"
					linkText="View Action Movies"
					movies={getMoviesByGenre( 'action' )}
				/>
				<MovieGrid
					headline="Spooky Heart-Pounding Frights"
					link="/genres/horror"
					linkText="View Horror Movies"
					movies={getMoviesByGenre( 'horror' )}
				/>
				<MovieGrid
					headline="Not So Serious Romps"
					link="/genres/comedy"
					linkText="View Comedy Movies"
					movies={getMoviesByGenre( 'comedy' )}
				/>
				<MovieGrid
					headline="Date Night Hijinks"
					link="/genres/romance"
					linkText="View Romance Movies"
					movies={getMoviesByGenre( 'romance' )}
				/>
				<MovieGrid
					headline="Infinite Mind-Bending Wonders"
					link="/genres/science-fiction"
					linkText="View Science Fiction Movies"
					movies={getMoviesByGenre( 'science fiction' )}
				/>
				<MovieGrid
					headline="Gun-Slingin' Tall Tales"
					link="/genres/western"
					linkText="View Western Movies"
					movies={getMoviesByGenre( 'western' )}
				/>
				<MovieGrid
					headline="Best of Rubber Hose Cinema"
					link="/genres/animation"
					linkText="View Animation Movies"
					movies={getMoviesByGenre( 'animation' )}
				/>
				<MovieGrid
					headline="Enchanted and Magic Realms"
					link="/genres/fantasy"
					linkText="View Fantasy Movies"
					movies={getMoviesByGenre( 'fantasy' )}
				/>
			</FixedContainer>
		</>
	)
}


export default HomePage


export const Head = () => (
	<SEO />
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
