import React, { useState } from 'react'
import Plans from './plans/Plans'
import { ads, book, clock, scholar, tv } from '../assets';

const Hero = () => {

    const [selectedOption, setSelectedOption] = useState('');
    const [total, setTotal] = useState(149);

    const handleOptionChange = (event) => {
        const id = event.target.value;
        setSelectedOption(id);
        if (id == 1) {
            setTotal(99)
        }
        else if (id == 2) {
            setTotal(179)
        }
        else if (id == 3) {
            setTotal(149)
        }
        else {
            setTotal(99)
        }
    };

    return (
        <div className="flex w-full justify-between mt-[72px]">
            <div className="ml-[144px]" >
                <div className="mb-4">
                    <h1 className="text-6xl font-semibold text-white">Access Curated Course Worth</h1>
                    <div className="flex">
                        <p className="text-2xl">
                            <span className='text-6xl font-semibold mr-3 text-white'>₹</span>
                            <span className="text-6xl font-semibold text-white" style={{ textDecoration: 'line-through', textDecorationColor: 'red' }}>
                                18,500
                            </span>
                        </p>
                        <p className="text-6xl font-semibold mx-3 text-white">at just <span className='text-6xl font-semibold mx-3 text-blue-600' >₹99</span> per year</p>
                    </div>
                </div>
                <ul className="mt-12 w-[35rem] flex flex-col text-white font-semibold font-san">
                    <li className='flex justify-between text items-center mb-6'>
                        <img className='w-[60px] h-[60px]' src={book} alt="scholar" />
                        <p className='text-3xl '>100+ Job relevant courses</p>
                    </li>
                    <li className='flex justify-between text items-center mb-6'>
                        <img className='w-[60px] h-[60px]' src={clock} alt="scholar" />
                        <p className='text-3xl '>20,000+ Hours of content</p>
                    </li>
                    <li className='flex justify-between text items-center mb-6'>
                        <img className='w-[60px] h-[60px]' src={tv} alt="scholar" />
                        <p className='text-3xl '>Exclusive webinar access</p>
                    </li>
                    <li className='flex justify-between text items-center mb-6'>
                        <img className='w-[60px] h-[60px]' src={scholar} alt="scholar" />
                        <p className='text-3xl '>Scholarship worth ₹94,500</p>
                    </li>
                    <li className='flex justify-between text items-center mb-6'>
                        <img className='w-[60px] h-[60px]' src={ads} alt="scholar" />
                        <p className='text-3xl '>Ad Free learning experience</p>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end mr-[102px] ">
                <div className="bg-white rounded-lg shadow p-8 w-[449px]">

                    <div className="flex items-center justify-around mb-2 mx-6">
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-xl">
                                1
                            </div>
                            <p className='text-1xl'>Sign Up</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white text-xl">
                                2
                            </div>
                            <p className='text-1xl'>Subscribe</p>
                        </div>
                    </div>
                    <div className='flex justify-center my-3 font-semibold text-2xl'>
                        <p>Select Your Subscription Plan</p>
                    </div>
                    <div className="flex flex-col mb-4">
                        {newFunction({ data: 12, option: "1",price: 99 })}
                        {newFunction({ data: 12, option: "2", price: 179})}
                        {newFunction({ data: 6, option: "3",price: 149 })}
                        {newFunction({ data: 3, option: "4" , price: 99})}
                    </div>
                    <div className='w-full mb-3 h-[2px] bg-slate-500'></div>
                    <div className='flex justify-between px-3 mb-4'>
                        <p>Subscription Fee</p>
                        <span>₹18,500</span>
                    </div>
                    <div class="border  border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                    <div className='flex justify-between '>
                        <p>Limited time offer</p>
                        <span>-₹18,401</span>
                    </div>
                    <span className='text-xs'>Offer valid till 25th March 2023 </span>
                    </div>
                    <div className='flex justify-between mt-1'>
                        <p>Total (Incl. of 18% GST)</p>
                        <span>{total}</span>
                    </div>
                    <div className="flex justify-between">
                        <button className="w-[200px] h-[56px] bg-transparent border border-red-400 hover:bg-red-500 text-red-400 font-bold py-2 px-4 rounded mr-2">
                            Cancel
                        </button>
                        <button className="w-[200px] h-[56px] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            Proceed to Pay
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )

    function newFunction({ data, option ,price}) {
        return <div className={`relative flex items-center pl-4 border
                 rounded ${option != 2 ? "dark:border-gray-700" : "dark:border-green-700"}
                 ${option == "1" ? "mb-2" : "my-2"}
                    ${option == 2? "bg-green-200":""}
                    ${option == 1? "bg-gray-200":""}
                    
                 `}>
            <input id={option}
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                name="bordered-radio" className="w-4 h-4  bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for={option} className="w-full py-4 ml-2 text-sm font-medium text-black dark:text-gray-300">
                <div className=' flex justify-between text-black'>
                    {option == 2 && 
                        <p className='absolute w-32 rounded-b-lg text-center -top-0 text-xs bg-green-400 text-white' >Recommended</p>
                    }
                    {option == 1 && 
                        <p className='absolute w-32 rounded-b-lg text-center -top-0 text-xs bg-pink-400 text-white' >Offer expired</p>
                    }
                    <div className={`${option == 1? "text-gray-500":""}`}>
                        {data} month subscription
                    </div>

                    <div  className={`${option == 1? "text-gray-500":""} mr-1`}>
                        Total ₹ {price}
                    </div>
                </div>
            </label>
        </div>
    }
}



export default Hero