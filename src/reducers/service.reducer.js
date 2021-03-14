import { serviceConstants } from '../actions/conatants'

const initialState = {
    service: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case serviceConstants.GET_ALL_SERVICES_SUCCESS:
            state = {
                ...state,
                service: action.payload.services
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state
}