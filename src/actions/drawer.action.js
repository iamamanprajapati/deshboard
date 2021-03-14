import { drawerConstants } from './conatants'

export const drawerAction = (e) => {
    return async (dispatch) => {
        console.log(e)
        dispatch({
            type: drawerConstants.CHANGE_DRAWER_TO_TRUE,
            data : e
        })
    }
}


export const drawerActionToFalse = (e) =>{
    return async (dispatch) =>{
        dispatch({
            type:drawerConstants.CHARGE_DRAWER_TO_FALSE,
            data : e
        })
    }
}