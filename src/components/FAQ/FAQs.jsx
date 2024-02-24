import React from 'react'
import data from './FaqData.json'
import FAQ from './FAQ'

const FAQs = () => {
  return (
    <div className='min-h-[100vh] flex items-center justify-center my-10'>
      <section className='bg-[#FFFFFF] p-5 w-[80vw] md:w-[60vw]'>
      <h1 className='text-3xl text-center font-bold'>FAQ's</h1>
      {data.map((faq)=> <FAQ key={faq.id} {...faq}/>)}
      </section>
    </div>
  )
}

export default FAQs
