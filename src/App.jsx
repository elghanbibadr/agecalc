import { useState } from "react"

const App = () => {
  const [day, setDay] = useState('30');
  const [month, setMonth] = useState('10');
  const [year, setYear] = useState('1999');

  const handleDayChange = (e) => setDay(e.target.value)
  const handleMonthChange = (e) => setMonth(e.target.value)
  const handleYearChange = (e) => setYear(e.target.value)

  return (
    <div className='h-screen   flex items-center justify-center bg-Offwhite' >
      <div className='bg-White w-[70%] h-[400px] p-4 lg:w-1/2  '>
        {/* header */}
        <form className='flex justify-between '>
          <div>
            <label htmlFor="day">day</label>
            <input id="day"
              type='number'
              value={day}
              name="day"
              onChange={handleDayChange}
              placeholder='DD' />
          </div>
          <div>
            <label htmlFor="month" >month</label>
            <input id="month"
            className="appearance-none"
              type='number'
              value={month}
              onChange={handleMonthChange}
              name="month"
              placeholder='MM' />
          </div>
          <div>
            <label htmlFor="year" >year</label>
            <input id="day"
              type='number'
              value={year}
              onChange={handleYearChange}
              name="year"
              placeholder='YYYY' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App