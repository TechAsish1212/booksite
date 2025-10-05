import React, { useState } from 'react'
import { uploadIcon } from '../../assets/assets';

const AddProducts = () => {
    const [files, setFiles] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('10');
    const [offerPrice, setOfferprice] = useState('10')
    const [category, setCategory] = useState('Academic');
    const [popular, setpopular] = useState(false);

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-full px-2 sm:px-6 py-12 m-2 h-[97vh] bg-primary overflow-y-scroll lg:w-4/5 rounded-xl '>
            <form onSubmit={onSubmitHandler} className='flex flex-col gap-y-3 medium-14'>
                <div>
                    <h5 className='h5'>Product Name</h5>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Write book name here....' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl' />
                </div>
                <div>
                    <h5 className='h5'>Product description</h5>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder='Write book description here....' className='px-3 py-1.5 ring-1 ring-slate-900/10 rounded bg-white mt-1 w-full max-w-xl' />
                </div>
                <div>
                    <div className='flex gap-x-4'>
                        <div>
                            <h5 className='h5'>Product Category</h5>
                            <select onChange={(e) => setCategory(e.target.value)} className='px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 max-w-30 text-gray-500'>
                                <option value="Academic">Academic</option>
                                <option value="Children">Children</option>
                                <option value="Health">Health</option>
                                <option value="Horror">Horror</option>
                                <option value="Business">Business</option>
                                <option value="History">History</option>
                                <option value="Advanture">Advanture</option>
                            </select>
                        </div>
                        <div>
                            <h5 className='h5'>Product Original Price</h5>
                            <input onChange={(e) => setPrice(e.target.value)} value={price} type="number" placeholder='e.g 10' className='px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 max-w-25' />
                        </div>
                        <div>
                            <h5 className='h5'>Product offer Price</h5>
                            <input onChange={(e) => setOfferprice(e.target.value)} value={offerPrice} type="number" placeholder='e.g 10' className='px-3 py-2 ring-1 ring-slate-900/10 rounded bg-white mt-1 max-w-25' />
                        </div>
                    </div>
                </div>
                {/* images upload */}
                <div className='flex gap-2 mt-2 p-2'>
                    {Array(4).fill("").map((_, ind) => (
                        <label htmlFor={`images${ind}`} className='ring-1 ring-slate-900/10 overflow-hidden rounded '>
                            <input onChange={(e) => {
                                const updateFiles = [...files]
                                updateFiles[ind] = e.target.files[0]
                                setFiles()
                            }}
                                type="file"
                                id={`images${ind}`}
                                hidden
                            />
                            <img src={files[ind] ? URL.createObjectURL(files[ind]) : uploadIcon} alt="uploadIcon image" height={65} width={65} className='bg-white overflow-hidden aspect-square object-cover cursor-pointer' />
                        </label>
                    ))}
                </div>
                <div className='flexStart gap-2 my-2 '>
                    <input onChange={() => setpopular(prev=>!prev)} checked={popular} id='popular' type="checkbox" />
                    <label htmlFor="popular" className='cursor-pointer'>Add to popular</label>
                </div>
                <button type='submit' className='btn-dark mt-3 max-w-44 sm:w-full rounded'>Add Product</button>
            </form>
        </div>
    )
}

export default AddProducts