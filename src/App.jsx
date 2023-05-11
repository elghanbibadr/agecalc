import { useState } from "react"
import iconArrow from "../src/assets/images/icon-arrow.svg"

const App = () => {
  const [day, setDay] = useState('30');
  const [month, setMonth] = useState('10');
  const [year, setYear] = useState('1999');
  const [calculatedYear, setCalculatedYear] = useState('');
  const [calculatedMonth, setCalculatedMonth] = useState('');
  const [calculatedDay, setCalculatedDay] = useState('');
  const [isValidDay,setIsValidDay] = useState(true);

  const handleDayChange = (e) => {
    if (day.length>2)setIsValidDay(false)
    setDay(e.target.value)
  }
  const handleMonthChange = (e) => setMonth(e.target.value)
  const handleYearChange = (e) => setYear(e.target.value)

  const calcAge=() =>{
    let start = new Date(year,month,day);
   let end = new Date();
 
   // Calculate time difference in milliseconds
   let timeDiff = Math.abs(end - start);

   var yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365.25));
   var remainingTime = timeDiff % (1000 * 60 * 60 * 24 * 365.25);
   var monthsDiff = Math.floor(remainingTime / (1000 * 60 * 60 * 24 * 30.44));
   remainingTime %= 1000 * 60 * 60 * 24 *30.44;
   var daysDiff = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
 
   setCalculatedDay(daysDiff)
   setCalculatedMonth(monthsDiff + 1)
   setCalculatedYear(yearsDiff)
 
  }

  return (
    <div className='h-screen  flex justify-center items-center   bg-Offwhite' >
      <div className='bg-White w-[70%] h-[400px] p-4 lg:w-1/2  '>
        {/* header */}
        <form className='flex flex-col justify-between '>
          <div className="flex items-center justify-between">
            <div>
              <label htmlFor="day">day</label>
              <input id="day"
               maxLength={2}
                type='number'
                value={day}
                name="day"
                onChange={handleDayChange}
                placeholder='DD' />
             {isValidDay && <span className="text-Lightred ">must be a valid date</span>}
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
         
          <svg className="relative top-16 " width="100%" height="1">
            <line x1="0" y1="0" x2="100%" y2="0" stroke="black" strokeWidth="1" />
          </svg>
          <div onClick={calcAge} className="bg-Purple  z-20 cursor-pointer self-center mt-10 h-12 w-12 rounded-full flex justify-center items-center">
            <img className="h-7 " src={iconArrow} alt='arrow icon' />
          </div>
        </form>
        {/* date */}
        <div className="flex mt-4  items-center">
            {calculatedYear && <h2 className="text-Purple font-extrabold text-5xl mx-2">{calculatedYear}</h2>}
            {!calculatedYear &&  <div className="flex">
             <span className="h-2 mx-2 w-8 bg-Purple block">
            </span>
            <span className="h-2  w-8 mr-4 bg-Purple block">
            </span>
              </div> }
          <h1>years</h1>
        </div>
        <div className="flex mt-4  items-center">
          {calculatedMonth && <h2 className="text-Purple font-extrabold text-5xl mx-2">{calculatedMonth}</h2>}
          {!calculatedMonth &&  <div className="flex">
             <span className="h-2 mx-2 w-8 bg-Purple block">
            </span>
            <span className="h-2  w-8 mr-4 bg-Purple block">
            </span>
              </div> }
          <h1>months</h1>
        </div>
        <div className="flex mt-4  items-center">
          {calculatedDay && <h2 className="text-Purple font-extrabold text-5xl mx-2">{calculatedDay}</h2>}
             {!calculatedDay &&  <div className="flex">
             <span className="h-2 mx-2 w-8 bg-Purple block">
            </span>
            <span className="h-2  w-8 mr-4 bg-Purple block">
            </span>
              </div> }
          <h1>days</h1>
        </div>
      </div>
    </div>
  )
}

export default App