import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovie, getMovies, clearMovies } from '../actions'
import ListItems from './ListItems'

const MovieCollection = () => {

    const formType = useSelector(form => form)
    const dispatch = useDispatch()

     useEffect (() => {

        console.log("movieCollectionGet")
        if (!formType.movieReducer.length)
        {dispatch(getMovies())}
    }) 

    return (
        <div className="main">
            <ListItems
                collection={formType.movieReducer}
                deleteItem={deleteMovie}
                type=" New Movie "
            />
            <button onClick={() => dispatch(clearMovies())}>Clear Collection</button>
        </div>
    )
}

export default MovieCollection