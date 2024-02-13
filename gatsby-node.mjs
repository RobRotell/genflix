import path, { resolve } from 'path'
import slugify from 'slugify'


const turnGenresIntoPages = async ({ graphql, actions }) => {
	const template = path.resolve( './src/templates/Genre.js' )

	const { data } = await graphql( `
		query {
			allRestApiGetMovies {
				edges {
					node {
						movies {
							id
							title
							tagline
							director
							genre
							year
							imageUrl
						}
					}
				}
			}
		}
	` )

	const genreMap = new Map

	data.allRestApiGetMovies.edges[0].node.movies.forEach( movie => {
		const { genre } = movie

		if( !genreMap.has( genre ) ) {
			genreMap.set( genre, [] )
		}

		genreMap.get( genre ).push( movie )
	})

	// todo -- add movies
	genreMap.forEach( ( movies, genre ) => {
		actions.createPage({
			path: `genres/${genre}`,
			component: template,
			context: {
				slug: genre,
				genre,
				movies,
			}
		})
	})
}


const turnMoviesIntoPages = async ({ graphql, actions }) => {
	const template = path.resolve( './src/templates/Movie.js' )

	const { data } = await graphql( `
		query {
			allRestApiGetMovies {
				edges {
					node {
						movies {
							id
							title
							tagline
							director
							genre
							year
							imageUrl
						}
					}
				}
			}
		}
	` )

	data.allRestApiGetMovies.edges[0].node.movies.forEach( movie => {
		const movieSlug = slugify( movie.title, {
			lower: true,
			strict: true
		})

		// actions.createPage({
		// 	path: `movies/${movieSlug}`,
		// 	component: template,
		// 	context: {
		// 		movie,
		// 		slug: movieSlug,
		// 	}
		// })
	})
}


export async function createPages( params ) {
	await Promise.all(
		[
			turnGenresIntoPages( params ),
			turnMoviesIntoPages( params )
		]
	)
}


