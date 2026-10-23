import React from 'react'
import ProductCard from '../ProductCard'
const AllProductSection = ({data,length}) => {
  return (
     <div className='w-full mt-15'>
      <div className='max-w-270 mx-auto'>
        {/* title */}
        <div className=' text-xl mb-3'>
            
            <h1 className='font-semibold'>সব পণ্য</h1>
            <p  className='font-light text-[15px]'>মোট {length.toLocaleString('bn-BD')} টি পন্য দেখানো হচ্ছে</p>
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

export default AllProductSection
