import { useState } from "react"
import iconArrow from "../src/assets/images/icon-arrow.svg"

const App = () => {
  const [day, setDay] = useState('30');
  const [month, setMonth] = useState('10');
  const [year, setYear] = useState('1999');

  const handleDayChange = (e) => setDay(e.target.value)
  const handleMonthChange = (e) => setMonth(e.target.value)
  const handleYearChange = (e) => setYear(e.target.value)

  return (
    <div className='h-screen  flex justify-center items-center   bg-Offwhite' >
        <div className='bg-White w-[70%] h-[400px] p-4 lg:w-1/2  '>
          {/* header */}
          <form className='flex flex-col justify-between '>
      <div className="flex items-center justify-between">
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
            </div>
             {/* <div className="  h-2  border-2 border-t-Purple" >

            </div>  */}
             <svg className="relative top-16 " width="100%" height="1">
      <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1" />
    </svg>
            <div className="bg-Purple  z-20 cursor-pointer self-center mt-10 h-12 w-12 rounded-full flex justify-center items-center">
              <img className="h-7 " src={iconArrow} alt='arrow icon' />
            </div>
          </form>
        </div>
      </div>
  )
}

export default App