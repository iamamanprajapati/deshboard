import { combineReducers } from 'redux'
import bookingReducer from './booking.reducer';
import categoryReducer from './category.reducer';
import drawerReducer from './drawer.reducer'
import serviceReducer from './service.reducer';

const rootReducer = combineReducers({
    drawer: drawerReducer,
    categories: categoryReducer,
    services:serviceReducer,
    bookings:bookingReducer
})

export default rootReducer;