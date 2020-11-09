import React from 'react'
import { useSelector} from 'react-redux'
import {
    addToCollection,
    clearMovies, addToTvCollection, clearShows
} from '../actions/'
import Form from './Form'

const FormType = () => {

    const formType = useSelector(form => form)
    
    return (
        <div className="main">

            {formType.formTypeReducer === "movies" ?
                <>
                    <Form
                        collection={addToCollection}
                        clearCollection={clearMovies}
                        btnName="Movies"
                    />
                </>
                :
                <>
                    <Form
                        collection={addToTvCollection}
                        clearCollection={clearShows}
                        btnName="TV Shows"
                    />
                </>

            }

        </div>
    )
}

export default FormType