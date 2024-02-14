import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { GatsbyImage } from 'gatsby-plugin-image'
import path from 'path-browserify'
import * as styles from './style.module.css'
import SimpleButton from '../SimpleButton'


const MovieBillboard = ({ movie }) => {
	const { title, tagline, imageUrl } = movie
	const imageBaseName = path.basename( imageUrl )

	// todo -- optimize query
	const query = useStaticQuery( graphql`
		{
			allFile {
				nodes {
					base
					childImageSharp {
						gatsbyImageData(
							width: 1600,
							height: 800,
							quality: 80,
							formats: [ AUTO, WEBP, AVIF ]
						),
					}
				}
			}
		}
	`)

	const movieImgObj = query.allFile.nodes.find( node => imageBaseName === node.base ).childImageSharp.gatsbyImageData

	return (
		<div className={styles.billboard}>

			<div className={styles.metaWrapper}>
				<div className={styles.meta}>
					<h2 className={styles.title}>{ title }</h2>
					<p className={styles.description}>{ tagline }</p>
					<SimpleButton linkTo={createMovieUrl( title )} style="light">More Info</SimpleButton>
				</div>
			</div>

			<GatsbyImage
				className={styles.pic}
				imgClassName={styles.img}
				image={movieImgObj}
				alt={`Poster for "${title}"`}
				title={`Poster for "${title}"`}
				height={800}
				loading="eager"
			/>
		</div>
	)
}


export default MovieBillboard
