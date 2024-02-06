import path, { resolve } from 'path'


const turnGenresIntoPages = async ({ graphql, actions }) => {
	const template = path.resolve( './src/templates/Genre.js' )
	let genres = []

	const { data } = await graphql( `
		query {
			allRestApiGetMovies {
				edges {
					node {
						movies {
							genre
						}
					}
				}
			}
		}
	` )

	data.allRestApiGetMovies.edges[0].node.movies.forEach( node => {
		const { genre } = node

		if( !genres.includes( genre ) ) {
			genres.push( genre )
		}
	})

	genres = genres.sort()

	genres.forEach( genre => {
		actions.createPage({
			path: `genres/${genre}`,
			component: template,
			context: {
				slug: genre,
				genreName: genre,
			}
		})
	})
}


const turnMoviesIntoPages = async ({ graphql, action }) => {
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

}


export async function createPages( params ) {
	await Promise.all(
		[
			turnGenresIntoPages( params ),
			// turnMoviesIntoPages( params )
		]
	)
}


