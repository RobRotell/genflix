export default {
	siteMetadata: {
		title: 'Genflix',
		siteUrl: 'https://genflix.robr.app',
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
					'https://api.moovi.robr.app/get-movies'
				],
			},
		},
	]
}
