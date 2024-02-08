import slugify from "slugify"

/**
 * Create movie movie URL
 *
 * @param {string} title Movie title
 * @return {string}
 */
export const createMovieUrl = title => {
	const slugifiedTitle = slugify( title, {
		lower: true,
		strict: true,
	})

	return `/movies/${slugifiedTitle}`
}
