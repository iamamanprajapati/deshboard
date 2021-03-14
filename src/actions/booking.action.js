import axios from "axios";
import { bookingConstants } from "./conatants";

export const getBooking = () => {
    return async (dispatch) => {
        const res = await axios.get('http://147.139.33.186/booking/list')
        console.log(res)

        if (res.status === 200) {
            dispatch({
                type: bookingConstants.GET_ALL_BOOKING_SUCCESS,
                payload: {
                    bookings: res.data.data
                }
            })
            
        } else {
            dispatch({
                type: bookingConstants.GET_ALL_BOOKING_FAILURE,
                payload: { error: res && res.data && res.data.error }
            })
        }
    }
}