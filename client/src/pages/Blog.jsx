import React from 'react'
import { blogs } from '../assets/assets'

const Blog = () => {
  return (
    <section className='max-padd-container py-16 pt-20'>
      {/* container */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 gap-y-12 pt-6'>
        {blogs.map((blog)=>(
          <div key={blog.title} className='relative'>
            <img src={blog.image} alt={blog.title} className='rounded-xl'/>
            <p className='mt-3'>{blog.category}</p>
            <h5 className="h5 mb-1 line-clamp-1">{blog.title}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi incidunt consequuntur dolorum officiis deleniti rerum neque accusantium, voluptatum quae, magni pariatur suscipit alias corrupti facilis, iste reiciendis nihil fugiat enim?</p>
            <button className="underline mt-2 bold-14 line-clamp-2">Continue reading</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog