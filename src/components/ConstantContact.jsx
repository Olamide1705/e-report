import React from 'react'
import Second from '../assets/second-image.png'

const Constant = [
    {
        value: '2X',
        paragraph: 'Improvement in client operational efficiency.',
    },

    {
        value: '94%',
        paragraph: 'Clients were satisfied and rated us positively.',
    },

    {
        value: '30K',
        paragraph: 'Hours of consulting delievered annually.',
    },

    {
        value: '500+',
        paragraph: 'Successful projects completed.',
    },
]

const ConstantContact = () => {
  return (
    <div className='pt-20 pb-20 font-Open'>
        <div className='px-5 md:px-0 flex flex-col md:flex-row flex-wrap items-center justify-center gap-[40px] md:gap-[60px] lg:gap-[40px]'>
        {Constant.map(({value, paragraph}, i) => (
            <div key={i} className='text-center space-y-3 w-full md:max-w-[230px] px-7 py-3 rounded-[20px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] backdrop-blur-[15px]'>
                 <h1 className='text-5xl font-bold'>{value}</h1>
                    <p className='text-base'>{paragraph}</p>
                </div>
          ))}
    </div>

<div className='px-5 md:px-25'>
   <div className='font-Open flex flex-col md:flex-row items-center justify-start gap-10 mt-10 md:mt-15 border border-black rounded-[30px] px-5 md:px-10 py-5'>
        <div className='w-auto'>
          <img src={Second} alt=''/>
        </div>
        <div className='flex flex-col space-y-5 w-full md:max-w-[500px] mx-auto text-sm md:text-[18px] leading-normal text-justify'>
          <p>Hey there, business owners! Whether you're running a tech startup in Silicon Valley, a cozy café in San Diego, or a boutique in Los Angeles, you know connecting with customers is the heartbeat of growth. Email marketing is your secret weapon, and Constant Contact is the tool to make it happen.</p>      
        <p>In this 2025 review, I'm sharing why Constant Contact is a game-changer for California entrepreneurs, its standout features, and an unbeatable offer: a  <a href='href="https://www.constantcontact.com/?clickid=U6-wsmX4nxyKTJDRqNwSeWvlUkpx3fUJv1NvwM0&AID=205991&PID=4287791&cc=CLK_DCLKAFF_IR_4287791_205991&pn=iraffiliate&utm_source=ir&utm_campaign=mu_p_cn_af_LT_4287791_aff&utm_content=205991&utm_medium=affiliate"' className='text-blue-600 font-semibold underline'>30-day free trial with no credit card required.</a>
        </p>
        <p>That's right, you've got everything to gain and nothing to lose! Let's dive into why Constant Contact is your ticket to marketing success.</p>
        </div>
        </div>
    </div>
    </div>
  )
  
}

export default ConstantContact