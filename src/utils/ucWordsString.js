/**
 * Capitalize the first letter in each word in a string
 *
 * @param {string} string
 * @return {string}
 */
export const ucWordsString = string => {
	const words = string.split( ' ' )

	words.forEach( ( word, i ) => {
		words[i] = word.charAt( 0 ).toUpperCase() + word.slice( 1 )
	})

	return words.join( ' ' )
}
