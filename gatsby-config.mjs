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
		// 'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: [
					'inter:400,600,700',
				],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'movieImages',
			  	path: `${__dirname}/src/images/movies`,
				fastHash: true,
			},
		},
		// {
		// 	resolve: 'gatsby-plugin-remote-images',
		// 	options: {
		// 	  	nodeType: 'RestApiGetMovies',
		// 		imagePath: 'nodes.imageUrl',
		// 	},
		// }
	]
}
