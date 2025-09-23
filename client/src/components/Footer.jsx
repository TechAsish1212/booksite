import React from 'react'
import { logo } from '../assets/assets';
import { Link } from 'react-router-dom';


const Footer = () => {

  const linkSections=[
    {
      title:"Quick Links",
      links:["Home","Best Seller","Offers & Deals","Contact Us","FAQs"],
    },
    {
      title:"Need Help?",
      links:[
        "Delivery Information",
        "Return & Refund Policy",
        "Payments Methods",
        "Track Your Ondered",
        "Contact Us",
      ],
    },
    {
      title:"Follow us",
      links:["Instagram","Twitter","Linkedin","Facebook"],
    },
  ];

  return (
    <footer className='max-padd-container bg-gradient-to-l from-primary via-white to-primary'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30'>
        <div>
          {/* logo */}
          <div className='flex flex-1'>
            <Link to={"/"} className="bold-22 xl:bold-28 flex items-end gap-1">
              <img src={logo} alt="" className='h-9'/>
              <div className='relative top-1.5'>
                Ink<span className='text-secondary'>Well.</span>
              </div>
            </Link>
          </div>
          <p className='max-w-[410px] mt-6 text-[16px] leading-tight'>
            Welcome to InkWell, your one-stop destination for books across every genre. From timeless classics to the latest bestsellers, we believe in bringing stories and knowledge closer to every reader.
          </p>
        </div>
        <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'>
          {
            linkSections.map((sec,ind)=>(
              <div key={ind}>
                <h3 className='font-semibold text-base md:mb-5 mb-2'>
                  {sec.title}
                </h3>
                <ul className='text-sm space-y-2'>
                  {
                    sec.links.map((link,ind)=>(
                      <li key={ind}>
                        <a href="#" className='hover:underline transition'>
                          {link}
                        </a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <p className='text-center p-4'>
        Copyright 2025 &copy; CrixAsish All Right Reserved.
      </p>
    </footer>
  )
}

export default Footer