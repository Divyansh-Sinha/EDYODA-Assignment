import React, { useState } from 'react'
import { logo } from '../../assets'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [selectedOption, setSelectedOption] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const handleIconClick = () => {
        setShowDropdown(!showDropdown);
      };
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };


    return (
        <nav className="w-full flex items-center justify-between bg-white p-4">
            <div className="flex items-center">
                <img
                    src={logo}
                    alt="Icon"
                    className="ml-4"
                />
                <div className="" style={{marginLeft:"64px"}}>
                    <label htmlFor="course">
                        Course <FontAwesomeIcon icon={faAngleDown} onClick={handleIconClick}/>
                    </label>
                    {showDropdown && <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12l-4-4h8l-4 4z" />
                        </svg>
                    </div>
                </div>
                <div className="" style={{marginLeft:"70px"}}>
                    <label htmlFor="program">
                        Program <FontAwesomeIcon icon={faAngleDown} onClick={handleIconClick}/>
                    </label>
                    {showDropdown && <select
                        value={selectedOption}
                        onChange={handleOptionChange}
                        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="">Select an option</option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M10 12l-4-4h8l-4 4z" />
                        </svg>
                    </div>
                </div>


            </div>
            <div className="flex items-center">
                <div className="relative mr-4">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-8 pr-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:shadow-outline"
                    />
                    <div className="absolute top-0 left-0 mt-3 ml-3">
                        <svg
                            className="fill-current text-gray-400 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M13.707 12.293a1 1 0 010 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L9 13.586V3a1 1 0 112 0v10.586l2.293-2.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
                <button className=" text-black py-2 px-4 rounded">
                    Log in
                </button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[10px] px-[42px] ml-4 rounded-full uppercase">
                    Join Now
                </button>
            </div>
        </nav>
    )
}

export default Navbar