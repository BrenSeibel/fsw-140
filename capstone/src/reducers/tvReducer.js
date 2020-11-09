
const tvReducer = (tvCollection = [], action) => {
    switch(action.type) {
        
        case "ADD_TO_TV_COLLECTION":
            return tvCollection = [...tvCollection, action.payload]

        case "DELETE_SHOWS":
            
        return tvCollection = tvCollection.filter((item, index) => index !== action.payload)

        case "CLEAR_SHOWS": 
        return tvCollection = []

       default:
            return tvCollection
    }
}

export default tvReducer

