import { categoryConstants } from '../actions/conatants'

const initialState = {
    category: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
            state = {
                ...state,
                category: action.payload.categories
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state
}