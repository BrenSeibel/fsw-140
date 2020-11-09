import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteMovie, addToCollection, clearMovies } from '../actions'
import ListItems from './ListItems'
import axios from "axios";

let count = 0;
const MovieCollection = () => {

    const formType = useSelector(form => form)
    const dispatch = useDispatch()

     useEffect (() => {
        // console.log(formType, "movieCollectionEffect")
        // console.log(formType.movieReducer,"movieCollectionGet")
        if (count < 1)
        {
        axios.get("/selectdb").then(res => {console.log(res.data, "reducer line 3")
        for(let i=0; i < res.data.length; i++)
        {// console.log(res.data[i])
            dispatch(addToCollection(res.data[i]))}
        }).catch()
        count++
        }
      
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