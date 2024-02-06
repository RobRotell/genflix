import dotenv from 'dotenv'


dotenv.config({
	path: '.env'
})


export default {
	siteMetadata: {
		title: 'Synflix',
		siteUrl: 'https://synflix.robr.app',
		description: 'A streaming library for all of your favorite AI-generated movies!',
	},
	plugins: [
		'gatsby-plugin-styled-components',
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
	]
}
