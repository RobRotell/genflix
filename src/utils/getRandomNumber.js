/**
 * Get random number (based on provided ceiling value)
 *
 * @param {number} maxValue
 * @return {number}
 */
export const getRandomNumber = maxValue => {
	return Math.floor( Math.random() * ( 1 + maxValue ) )
}
