
const formTypeReducer = (formType = "movies", action) => {
    
    switch(action.type) {

        case "SELECT-FORM":

            return formType = action.payload

       default:
            return formType
    }
}

export default formTypeReducer