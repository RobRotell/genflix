import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import slugify from 'slugify'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'


const MovieBillboard = ({ data, movie }) => {
	const { title, tagline, imageUrl } = movie
	// let { imageUrl } = movie


	const image = getImage( imageUrl )

	console.log( image )

	return (
		<>
			<h2 className="movie-headline">{ movie.title }</h2>
			<p className="movie-description">{ movie.tagline }</p>

			<Link to={createMovieUrl( title )}>More Info</Link>

			<GatsbyImage
				image={image}
				alt={`Poster for "${title}"`}
				height={800}
			/>
		</>
	)
}


export default MovieBillboard
