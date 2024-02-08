import React from 'react'
import MovieGridItem from '../MovieGridItem'


const MovieSpotlightGrid = ({ movies }) => {

	console.log( movies )

	return (
		<>
			{movies.map( movie => {
				console.log( movie.id )
				return (
					<MovieGridItem
						key={movie.id}
						movie={movie}
					/>
				)
			})}
		</>
	)
}


export default MovieSpotlightGrid
