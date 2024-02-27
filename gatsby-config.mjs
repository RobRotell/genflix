import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'


dotenv.config({
	path: '.env'
})


const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )


export default {
	siteMetadata: {
		title: 'Synflix',
		siteUrl: 'https://synflix.robr.app',
		description: 'A streaming library for all of your favorite AI-generated movies!',
	},
	plugins: [
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-emotion',
		'gatsby-plugin-remove-generator',
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaults: {
					formats: [ 'auto', 'webp', 'avif' ],
					quality: 80,
					breakpoints: [ 600, 768, 1024, 1200, 1600 ],
				},
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-rest-api',
			options: {
				endpoints: [
					process.env.MOOVI_ALL_MOVIES_ENDPOINT_URL
				],
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
			  	name: 'Synflix',
			  	short_name: 'Synflix',
			  	start_url: '/',
			  	background_color: '#1F1F1F',
			  	theme_color: '#E50914',
			  	display: 'standalone',
				icon: 'src/images/favicon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'movieImages',
			  	path: `${__dirname}/src/images/movies`,
				fastHash: true,
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'G-8N7ZDQM6D4',
				includeInDevelopment: true,
			},
		},
	]
}
