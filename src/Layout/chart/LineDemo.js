import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


export default function LineDemo(props) {

  const [dataChart, setDataChart] = useState({});
  const bookings = useSelector((state) => state.bookings);
  const bookingList = bookings.booking

  useEffect(() => {
      let confirmedCases = [];
      let dateOfCases = [];
      bookingList.map((list,i)=>(
        confirmedCases.push(list.id)
      ))

      setDataChart({
        labels: dateOfCases,
        datasets: [{
          label: 'Confirmed bookings',
          data: confirmedCases
        }]
      })
    }, [])

  console.log(dataChart)
  console.log(bookingList)

  return (
    <div>
      <h2>Line Example</h2>
      <Line data={dataChart} />
    </div>
  );
}