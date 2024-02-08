import React from 'react'
import path from 'path-browserify'
import { GatsbyImage } from 'gatsby-plugin-image'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { Link, graphql, useStaticQuery } from 'gatsby'


export default function MovieGridItem({ headline, link, linkText, movie }) {
	const { title, imageUrl } = movie
	const imageBaseName = path.basename( imageUrl )

	// todo -- optimize query
	const query = useStaticQuery( graphql`
		{
			allFile {
				nodes {
					base
					childImageSharp {
						gatsbyImageData( width: 320, height: 220, formats: [ AUTO, WEBP, AVIF ] ),
					}
				}
			}
		}
	`)

	const movieImgObj = query.allFile.nodes.find( node => imageBaseName === node.base ).childImageSharp.gatsbyImageData

	return (
		<>
			<h2 className="movie-headline">{ movie.title }</h2>

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
