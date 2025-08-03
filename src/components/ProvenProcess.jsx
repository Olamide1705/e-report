import React, { useState } from 'react'


const data = [
    {
        id: '1.',
        heading: 'Initial Consultation',
        content: 'Engaging with your team to understand your business challenges and objectives.',
    },

     {
        id: '2.',
        heading: 'In-depth Analysis',
        content: 'Conducting detailed assessments to identify key areas for improvement and opportunities for growth.',
    },

     {
        id: '3.',
        heading: 'Strategic Implementation',
        content: 'Developing and executing customised strategies to achieve your business goals.',
    },  
]

const ProvenProcess = () => {
    const [email, setEmail] = useState("")
const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
}

  return (
   <>
   <setion id="process">
   <div className='font-Open px-[20px] md:px-[100px] pt-15 md:pt-20 pb-15 md:pb-20 bg-blue-600'>
          <h1 className='font-bold text-[26px] md:text-5xl text-white pb-5 md:pb-10'>Our Proven Process</h1>
        <div className='flex flex-col md:flex-row gap-10 pb-15 md:pb-20'>
          {data.map(({id, heading, content}, index) => (
            <div key={index} className='flex flex-col text-center text-white space-y-1 md:space-y-3'>
              <h3 className='font-bold text-4xl md:text-6xl'>{id}</h3>
              <p className='font-semibold text-base md:text-[20px]'>{heading}</p>
              <p className='text-sm md:text-[18px]'>{content}</p>
            </div>
         ))}
        </div>
        <a href='mailto:dasebitmoney@gmail.com' className='font-semibold bg-white text-sm md:text-base text-black w-full px-3 py-3 rounded-md md:max-w-[230px]'>Schedule Intro Call</a>
    </div>

    <div className='w-full pt-5 md:pt-10 pb-20 space-y-7 md:space-y-0 flex flex-col md:flex-row items-center justify-between font-Open px-[20px] md:px-[100px] '>
         <h1 className='flex-1 font-bold text-sm md:text-[18px]'>Receive latest emails in your inbox</h1>
         
         <form onSubmit={handleSubmit} className='w-full flex-1 flex flex-col md:flex-row items-center gap-5'>
          <label htmlFor="email" className='w-full md:max-w-[400px]'>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="Email"
                className="w-full rounded-lg border border-red-300 px-3 py-3 text-sm focus:outline-none focus:border-red-500"
                onChange={(e) => setEmail(e.target.value)}
            />
            </label>
             <button type='submit' className='text-white text-center font-semibold bg-red-600 px-5 py-3 rounded-md w-full md:max-w-[150px]'>Subscribe</button>
       </form>
    </div>
    </setion>
</>  
)
}

export default ProvenProcess