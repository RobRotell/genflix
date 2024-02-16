import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { createMovieUrl } from '../../utils/createMovieUrl'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import path from 'path-browserify'
import * as styles from './style.module.css'
import SimpleButton from '../SimpleButton'


const Billboard = ({
	title,
	tagline = '',
	imageObj = null,
	imageLoading = 'eager',
	linkUrl = '',
	linkText = ''
}) => {

	const maybeRenderLink = () => {
		if( linkUrl && linkText ) {
			return (
				<SimpleButton linkTo={linkUrl} style="light">{linkText}</SimpleButton>
			)
		}
	}


	const renderImage = () => {
		if( imageObj ) {
			return (
				<GatsbyImage
					className={styles.image}
					image={imageObj}
					alt={`Poster for "${title}"`}
					title={`Poster for "${title}"`}
					height={1000}
					loading={imageLoading}
				/>
			)
		} else {
			return (
				<StaticImage
					src="../../images/placeholder.jpg"
					className={styles.image}
					alt={`Poster for "${title}"`}
					title={`Poster for "${title}"`}
					height={1000}
					loading={imageLoading}
				/>
			)
		}
	}


	return (
		<div className={styles.billboard}>

			<div className={styles.metaWrapper}>
				<div className={styles.meta}>
					<h2 className={styles.title}>{ title }</h2>
					<p className={styles.description}>{ tagline }</p>
					{maybeRenderLink()}
				</div>
			</div>

			{renderImage()}
		</div>
	)
}


export default Billboard
