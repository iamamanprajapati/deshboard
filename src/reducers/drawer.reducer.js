import { drawerConstants } from '../actions/conatants'

const initialState = {
    data: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case drawerConstants.CHANGE_DRAWER_TO_TRUE:
            state = {
                data: true
            }
            break;
        case drawerConstants.CHARGE_DRAWER_TO_FALSE:
            state = {
                data: false
            }
            break;
        default:
            state = {
                data: false
            }
    }
    return state
}