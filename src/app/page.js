import Hero from '@/components/HompageComponents/Hero'
import PriceHighSection from '@/components/HompageComponents/PriceHighSection'
import React from 'react'

const page = async() => {
  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products')
  const data = await res.json()
  
  const highPriceProducts = data.filter((elem)=>{
    return elem.change.dir==='up'
  })

  const lowPriceProducts =  data.filter((elem)=>{
    return elem.change.dir==='down'
  })
  return (
    <div>
     <Hero/>
     <PriceHighSection data={highPriceProducts}/>
    </div>
  )
}

export default page
