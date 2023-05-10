import { useState } from "react"

const App = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleDayChange = (e) => setDay(e.target.value)

  return (
    <div className='h-screen   flex items-center justify-center bg-Offwhite' >
      <div className='bg-White w-[70%] h-[400px] p-4 lg:w-1/2  '>
        {/* header */}
        <form className='flex justify-between '>
          <div>
            <label for="day">day</label>
            <input id="day"
              type='number'
              value="30"
              name="day"
              placeholder='DD' />
          </div>
          <div>
            <label for="month" >month</label>
            <input id="month"
              type='number'
              value="11"
              name="month"
              placeholder='MM' />
          </div>
          <div>
            <label for="year" >year</label>
            <input id="day"
              type='number'
              value="2020"
              name="year"
              placeholder='YYYY' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App