import { bookingConstants } from '../actions/conatants'

const initialState = {
    booking: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case bookingConstants.GET_ALL_BOOKING_SUCCESS:
            state = {
                ...state,
                booking: action.payload.bookings
            }
            break;
        default:
            state = {
                ...state
            }
    }
    return state
}