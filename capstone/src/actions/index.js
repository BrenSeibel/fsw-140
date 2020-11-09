//MOVIE-ACTIONS

export const addToCollection = (movies) =>{
    return {
        type: "ADD_TO_COLLECTION",
        payload: movies
    }
}
export const deleteMovie = (movie) =>{
    return {
        type: "DELETE_MOVIE",
        payload: movie
    }
}
export const clearMovies = () => {
    return {
        type: "CLEAR_MOVIES"
    }
}
export const getMovies = () => {
    return {
        type: "GET_FOR_COLLECTION"
    }
}

//TV-ACTIONS

export const addToTvCollection = (show) =>{
    return {
        type: "ADD_TO_TV_COLLECTION",
        payload: show
    }
}
export const deleteShows = (shows) =>{
    return {
        type: "DELETE_SHOWS",
        payload: shows
    }
}
export const clearShows = () => {
    return {
        type: "CLEAR_SHOWS"
    }
}

//FORM-SELECT-ACTIONS

export const selectForm = (formType) =>{
    return{
        type: "SELECT-FORM",
        payload: formType
    }
}
