import axios from "axios";
import { categoryConstants } from "./conatants";


export const getCategory = () => {
    return async (dispatch) => {
        const res = await axios.get('http://147.139.33.186/category/list')
        console.log(res)

        if (res.status === 200) {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload: {
                    categories: res.data.data
                }
            })

        } else {
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_FAILURE,
                payload: { error: res && res.data && res.data.error }
            })
        }


    }
}