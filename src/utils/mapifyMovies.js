/**
 * Create map of movies for easier getting/setting/removing
 *
 * @param {array} movies
 * @return {map}
 */
export const mapifyMovies = movies => {
	const movieMap = new Map

	movies.forEach( movie => {
		movieMap.set( movie.id, movie )
	})

	return movieMap
}
