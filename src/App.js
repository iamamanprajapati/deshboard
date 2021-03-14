import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Drawer from './Layout/Drawer/Drawer'
import AppBar from './Layout/Appbar/Appbar'
import Category from './pages/category/Category'
import Service from './pages/service/Service'
import { useDispatch } from 'react-redux'
import { getCategory } from './actions/category.action'
import { getService } from './actions/service.action'
import { getBooking } from './actions/booking.action'
import Booking from './pages/booking/Booking'
import Notifications from './pages/notifications/Notifications'
import Partners from './pages/partner/Partners'
import Chart from './Layout/chart/Chart'



function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory());
    dispatch(getService());
    dispatch(getBooking());
  }, [])

  return (
    <div className="App">
      <Drawer />
      <AppBar />
      <Switch>
        <Route path="/" exact component={Chart} />
        <Route path="/categories" exact component={Category} />
        <Route path="/services" component={Service} />
        <Route path="/bookings" component={Booking} />
        <Route path="/notifications" component={Notifications} />
        <Route path="/partners" component={Partners} />
      </Switch>
    </div>
  );
}

export default App;