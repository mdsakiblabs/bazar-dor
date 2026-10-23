import Link from 'next/link'
import React from 'react'

const NavLinks = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories')
    const data = await res.json()
    // console.log(data)
  return (
    <div className='parent w-full border-gray-200 border-t border-b py-4'>
        <div className='max-w-270 mx-auto flex items-center gap-8'>
            {data.map((elem,ind)=>{
                return (
                    <Link href={`/category/${elem.id}`} key={ind}>
                    
                    <div  className='flex cursor-pointer'>
                        <span>{elem.icon}</span>
                        <h2 className='font-semibold '>{elem.nameBn}</h2>
                    </div>
                    
                    </Link>
                )
            })}
        </div>
      
    </div>
  )
}

export default NavLinks
