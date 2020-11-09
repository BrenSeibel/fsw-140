import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteShows, clearShows } from '../actions'
import ListItems from './ListItems'

const TvCollection = () => {

    const formType = useSelector(form => form)
    const dispatch = useDispatch()

    return (
        <div className="main">
            <ListItems
                collection={formType.tvReducer}
                deleteItem={deleteShows}
                type=" new Tv Shows"
            />
            <button onClick={() => dispatch(clearShows())}>Clear Collection</button>
        </div>
    )
}

export default TvCollection
