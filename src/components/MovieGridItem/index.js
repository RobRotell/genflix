import React from 'react'
import path from 'path-browserify'
import { GatsbyImage } from 'gatsby-plugin-image'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as styles from './style.module.css'


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
						gatsbyImageData(
							layout: FULL_WIDTH,
							formats: [ AUTO, WEBP, AVIF ]
						),
					}
				}
			}
		}
	`)

	const movieImgObj = query.allFile.nodes.find( node => imageBaseName === node.base ).childImageSharp.gatsbyImageData

	return (
		<Link to={createMovieUrl( title )} className={styles.block}>
			<div className={styles.meta}>
				<h3 className={styles.headline}>{ movie.title }</h3>
				<div className={styles.pseudoLink}>chevron</div>
				<div className={styles.overlay}></div>
			</div>
			<GatsbyImage
				className={styles.pic}
				imgClassName={styles.img}
				image={movieImgObj}
				alt={`Poster for "${title}"`}
				title={`Poster for "${title}"`}
				loading="lazy"
			/>
		</Link>
	)
}
