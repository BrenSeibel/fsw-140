import React from 'react'
import { useDispatch } from 'react-redux';
import axios from "axios";

const ListItems = ({ collection, deleteItem, type }) => {

    const dispatch = useDispatch()

    return (
        <>
            <div className="collection-div">
                <div className="collection-header">
                    <h1>{type} Collection</h1>
                </div>
                {collection.map((item, i) =>
                    <div className="collection-list" key={`${type}${i}`}>
                        <p>Title : {item.title}</p>
                        <br />
                        <p>Description : {item.description}</p>
                        <br />
                        <p>Year : {item.year}</p>
                        <br />
                        <p>Genre: {item.genre} </p>
                        <br />
                        <button onClick={() => {
                            axios.delete("/deletedb/"+item.idmovies).then(res => console.log(res.data)).catch()
                            dispatch(deleteItem(i))}}> Delete </button>
                    </div>
                )
                }
            </div>
        </>
    )
}

export default ListItems