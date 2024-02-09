import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { GatsbyImage } from 'gatsby-plugin-image'
import path from 'path-browserify'


const MovieBillboard = ({ data, movie }) => {
	const { title, tagline, imageUrl } = movie
	const imageBaseName = path.basename( imageUrl )

	// todo -- optimize query
	const query = useStaticQuery( graphql`
		{
			allFile {
				nodes {
					base
					childImageSharp {
						gatsbyImageData( width: 1440, height: 800, quality: 80, breakpoints: [ 600, 768, 1024, 1366], formats: [ AUTO, WEBP, AVIF ] ),
						fluid(maxWidth: 1440, quality: 100) {
							...GatsbyImageSharpFluid
							...GatsbyImageSharpFluidLimitPresentationSize
						}
					}
				}
			}
		}
	`)

	const movieImgObj = query.allFile.nodes.find( node => imageBaseName === node.base ).childImageSharp.gatsbyImageData

	return (
		<>
			<h2 className="movie-headline">{ title }</h2>
			<p className="movie-description">{ tagline }</p>

			<Link to={createMovieUrl( title )}>More Info</Link>

			<GatsbyImage
				image={movieImgObj}
				alt={`Poster for "${title}"`}
				title={`Poster for "${title}"`}
				height={800}
				loading="eager"
			/>
		</>
	)
}


export default MovieBillboard
