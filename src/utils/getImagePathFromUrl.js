import path from 'path-browserify'

/**
 * Get local file path for movie image
 *
 * Since Gatsby doesn't support plain external URLs, we downloaded all movie images locally. These files retain the
 * original basenames so we just need to match them up with incoming URLs.
 *
 * @param {string} url
 * @return {string} file path
 */
export const getImagePathFromUrl = url => {
	const basename = path.basename( url )

	return `./images/movies/${basename}`
}
