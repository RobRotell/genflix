import React from 'react'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'

import SimpleButton from '../SimpleButton'

import * as styles from './style.module.css'



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

	const maybeRenderTagline = () => {
		if( tagline ) {
			return (
				<p className={styles.description}>{ tagline }</p>
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
					{maybeRenderTagline()}
					{maybeRenderLink()}
				</div>
			</div>

			{renderImage()}
		</div>
	)
}


export default Billboard
