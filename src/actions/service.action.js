import axios from "axios";
import { serviceConstants } from "./conatants";


export const getService = () => {
    return async (dispatch) => {
        const res = await axios.get('http://147.139.33.186/service/list')
        console.log(res)
        if (res.status === 200) {
            dispatch({
                type: serviceConstants.GET_ALL_SERVICES_SUCCESS,
                payload: {
                    services: res.data.data
                }
            })
        } else {
            dispatch({
                type: serviceConstants.GET_ALL_SERVICES_FAILURE,
                payload: { error: res && res.data && res.data.error }
            })
        }
    }
}