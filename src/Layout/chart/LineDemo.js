import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux'


// const data = {
//   labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
//   datasets: [
//     {
//       label: 'My First dataset',
//       fill: false,
//       lineTension: 0,
//       backgroundColor: 'rgba(75,192,192,0.4)',
//       borderColor: 'rgba(75,192,192,1)',
//       borderCapStyle: 'butt',
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: 'miter',
//       pointBorderColor: 'rgba(75,192,192,1)',
//       pointBackgroundColor: '#fff',
//       pointBorderWidth: 10,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//       pointHoverBorderColor: 'rgba(220,220,220,1)',
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
//     }
//   ]
// };

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