/*
Build a component that books a one-way or return flight for specified dates.

Requirements:

-> The user can choose from two flight options: "One-way flight" and "Return flight".
-> Input date fields
  - The date input fields represent the departure date and return dates.
  - The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
Form validation should be done upon submission for invalid fields:
  - Dates are in the past.
  - Return date is before the departure date.
-> Upon successful submission, a message is displayed informing the user of the selection:
  - One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
  - Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"
*/

import './styles.css';
import { useState, useRef } from 'react'

export default function App() {

  const [flightType, setFlightType] = useState(false)

  const today = new Date().toISOString().split('T')[0]
  const departureDate = useRef()

  const changeFlightType = e => {
    setFlightType(e.target.selectedIndex)
  }

  return (
    <form>
      <select onChange={changeFlightType}>
        <option value="0">One-way flight</option>
        <option value="1">Return flight</option>
      </select>
      <input type="date" min={today} ref={departureDate} />
      {flightType ? <input type="date" min={departureDate.current.value} /> : null}
      <button type="submit">submit</button>
    </form>
  );
}