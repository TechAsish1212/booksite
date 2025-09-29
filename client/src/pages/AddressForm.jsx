import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'

const AddressForm = () => {
  const {navigate ,user,method,setMethod}=useContext(ShopContext);

  const [address,setAddress]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  });

  const onChageHandler=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setAddress((data)=>({...data,[name]:value}));
    console.log(address)
  }

  const onSubmitHandler=(e)=>{
    e.preventDefault()
  }

  return (
    // <div className='max-padd-container py-16 pt-28'>
    //   {/* container */}
    //   <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
    //     {/* left side */}
    //     <form onSubmit={onSubmitHandler} className='flex flex-[2] flex-col gap-3 text-[95%]'>
    //       <Title title1={"Delivery"} title2={"Information"} title1Styles={"pb-5"} />
    //       <div className='flex gap-3'>
    //         <input
    //           type="text"
    //           onChange={onChageHandler}
    //           value={address.firstName}
    //           name='firstName'
    //           placeholder='First Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="text"
    //           onChange={onChageHandler}
    //           value={address.lastName}
    //           name='lastName'
    //           placeholder='Last Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="email"
    //           onChange={onChageHandler}
    //           value={address.email}
    //           name='emial'
    //           placeholder='Email'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="phone"
    //           onChange={onChageHandler}
    //           value={address.phone}
    //           name='phone'
    //           placeholder='Phone Number'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="street"
    //           onChange={onChageHandler}
    //           value={address.street}
    //           name='street'
    //           placeholder='Street Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="city"
    //           onChange={onChageHandler}
    //           value={address.city}
    //           name='city'
    //           placeholder='City Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="state"
    //           onChange={onChageHandler}
    //           value={address.state}
    //           name='state'
    //           placeholder='State Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="zipcode"
    //           onChange={onChageHandler}
    //           value={address.zipcode}
    //           name='zipcode'
    //           placeholder='Zip Code'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //         <input
    //           type="country"
    //           onChange={onChageHandler}
    //           value={address.country}
    //           name='country'
    //           placeholder='Country Name'
    //           className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none w-1/2' required
    //         />
    //       </div>
    //       <button type='submit' className='btn-dark rounded-md w-1/2 mt-2'>Add Address</button>
    //     </form>
    //     {/* right side */}
    //     <div className='flex flex-1 flex-col'>
    //       <div className='max-w-[397px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl'>
    //         <CartTotal method={method} setMethod={setMethod} />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className='max-padd-container py-16 pt-28'>
  {/* container */}
  <div className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
    {/* left side */}
    <form onSubmit={onSubmitHandler} className='flex flex-[2] flex-col gap-3 text-[95%]'>
      <Title title1={"Delivery"} title2={"Information"} title1Styles={"pb-5"} />

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
        <input
          type="text"
          onChange={onChageHandler}
          value={address.firstName}
          name='firstName'
          placeholder='First Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.lastName}
          name='lastName'
          placeholder='Last Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="email"
          onChange={onChageHandler}
          value={address.email}
          name='email'
          placeholder='Email'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="tel"
          onChange={onChageHandler}
          value={address.phone}
          name='phone'
          placeholder='Phone Number'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.street}
          name='street'
          placeholder='Street Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.city}
          name='city'
          placeholder='City Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.state}
          name='state'
          placeholder='State Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.zipcode}
          name='zipcode'
          placeholder='Zip Code'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
        <input
          type="text"
          onChange={onChageHandler}
          value={address.country}
          name='country'
          placeholder='Country Name'
          className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-primary outline-none'
          required
        />
      </div>

      <button type='submit' className='btn-dark rounded-md w-1/2 mt-2'>
        Add Address
      </button>
    </form>

    {/* right side */}
    <div className='flex flex-1 flex-col'>
      <div className='max-w-[397px] w-full bg-primary p-5 py-10 max-md:mt-16 rounded-xl'>
        <CartTotal method={method} setMethod={setMethod} />
      </div>
    </div>
  </div>
</div>

  )
}

export default AddressForm