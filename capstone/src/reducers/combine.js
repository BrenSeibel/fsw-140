import movieReducer from './movieReducer'
import tvReducer from './tvReducer'
import formTypeReducer from './formTypeReducer'
import { combineReducers }from 'redux'

const combine = combineReducers({
    movieReducer,
    tvReducer,
    formTypeReducer
})

export default combine