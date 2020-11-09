import axios from "axios";
var movies=[]

console.log(movies)

const movieReducer = (movieCollection = movies, action) => {
    
    switch(action.type) {

        case "ADD_TO_COLLECTION":
            return movieCollection = [...movieCollection , action.payload]
        
        case "GET_FOR_COLLECTION":
           axios.get("/selectdb").then(res => {console.log(res.data, "reducer line 3")
        return movieCollection = res.data
        }).catch()
                // return movieCollection = [...movieCollection , action.payload]    

        case "DELETE_MOVIE":

            return movieCollection = movieCollection.filter((item, index) => index !== action.payload)
                 
        
        case "CLEAR_MOVIES":
        return movieCollection= []
       
        default:
            return movieCollection
    
    }
}
export default movieReducer