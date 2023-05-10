import React from 'react'

const App = () => {
  return (
    <div className='h-screen   flex items-center justify-center bg-Offwhite' >
    <div className='bg-White w-[70%] h-[400px] p-4 lg:w-1/2  '>
      {/* header */}
      <form className='flex justify-between '>
        <div>
          <label  className='flex text-Smokeygrey font-bold uppercase text-sm'  for="day">day</label>
                <input className='w-20 border-[1px]  py-2' id="day" type='number' value="30" name="day" />
        </div>
        <div>
          <label className='flex font-bold uppercase text-Smokeygrey text-sm' for="month" >month</label>
                <input className=' w-20 border-[1px]  py-2' id="month" type='number' value="11" name="month" />
        </div>
        <div>
          <label className='flex font-bold uppercase text-Smokeygrey text-sm'  for="year" >year</label>
                <input className=' w-20 border-[1px]  py-2' id="day" type='number' value="2020" name="year" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default App