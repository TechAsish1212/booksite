// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../../context/ShopContext'

// const AdminLogin = () => {
//   const { isAdmin, setIsAdmin, navigate } = useContext(ShopContext);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState('');

//   useEffect(() => {
//     if (isAdmin) {
//       navigate('/admin');
//     }
//   }, [isAdmin])

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     setIsAdmin(true); //temporary
//   }

//   return !isAdmin &&
//     <div className='fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center text-sm text-gray-600 bg-black/50'>
//       <form onSubmit={onSubmitHandler} className='flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white '>
//         <h3 className='bold-28 mx-auto mb-3'>
//           <span className='text-secondary capitalize'>Admin </span>
//           <span className='capitalize'>Login</span>
//         </h3>
//         <div className='w-full'>
//           <p className='medium-14'>Email</p>
//           <input
//             type="email"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             placeholder='your email.......'
//             className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80'
//             required
//           />
//         </div>
//         <div className='w-full'>
//           <p className='medium-14'>Password</p>
//           <input
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             placeholder='your password.......'
//             className='border border-gray-200 rounded w-full p-2 mt-1 outline-black/80'
//             required
//           />
//         </div>
//         <button className='btn-secondary w-full rounded !py-2.5 mt-3' type='submit'>
//           Login
//         </button>
//       </form>
//     </div>
// }

// export default AdminLogin

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'

const AdminLogin = () => {
  const { isAdmin, setIsAdmin, navigate } = useContext(ShopContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setIsAdmin(true); // temporary
  };

  return !isAdmin && (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-40 flex items-center justify-center text-sm text-gray-600 bg-black/50 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white/90 backdrop-blur-sm"
      >
        <h3 className="bold-28 mx-auto mb-3">
          <span className="text-secondary capitalize">Admin </span>
          <span className="capitalize">Login</span>
        </h3>
        <div className="w-full">
          <p className="medium-14">Email</p>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="your email......."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-black/80"
            required
          />
        </div>
        <div className="w-full">
          <p className="medium-14">Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="your password......."
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-black/80"
            required
          />
        </div>
        <button className="btn-secondary w-full rounded !py-2.5 mt-3" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
