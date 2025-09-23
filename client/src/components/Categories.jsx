import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import { categories } from '../assets/assets'
const Categories = () => {

  const { navigate } = useContext(ShopContext)
  const colors = ["bg-[#aedae6]", "bg-[#fff6c9]", "bg-[#fddbdb]"]

  return (
    <section className='max-padd-container pt-16 pb-6'>
      <Title title1={"Category"} title2={"List"} title1Styles={"pb-6"} paraStyles={"hidden"}/>
      {/* container */}
      <div className='flex gap-9 flex-wrap'>
        {categories.map((cat,ind)=>(
          <div key={ind} onClick={()=>navigate(`/shop/${cat.name.toLowerCase()}`)} className='flexCenter flex-col cursor-pointer group'>
            <div className={`flexCenter flex-col h-36 w-36 sm:h-40 sm:w-40 rounded-xl ${colors[ind%3]}`}>
              <img src={cat.image} alt={cat.name} height={45} width={45} className='object-cover' />
              <h5 className='h5 capitalize mt-3'>{cat.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories