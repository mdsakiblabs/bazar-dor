import React from 'react'
import ProductCard from '../ProductCard'
const PriceLowSection = ({data}) => {
  return (
    <div className='w-full mt-15'>
      <div className='max-w-270 mx-auto'>
        {/* title */}
        <div className='flex text-xl mb-3'>
            <span className='text-green-500'>▼</span>
            <h1 className='font-semibold'>আজ দাম কমেছে</h1>
        </div>

        {/* cards */}
        <div className='grid grid-cols-3 gap-4'>
            {data.map((elem,ind)=>{
                return <ProductCard data={elem} key={ind}/>
            })}
            
        </div>

      </div>
    </div>
  )
}

export default PriceLowSection
