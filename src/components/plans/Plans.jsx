import React, { useState } from 'react';

const Plans = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className='text-black'>
            <h2>Radio Boxes</h2>
            <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input  id="bordered-radio-2"
                    type="radio"
                    value="option1"
                    checked={selectedOption === 'option1'}
                    onChange={handleOptionChange}
                 name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-radio-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    <div className='flex justify-between'>
                        <div>
                            12 month subscription
                        </div>

                        <div>
                            Total rs 179
                        </div>
                    </div>
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedOption === 'option2'}
                        onChange={handleOptionChange}
                    />
                    12 Months Subscription
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedOption === 'option3'}
                        onChange={handleOptionChange}
                    />
                    6 Months Subscription
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="radio"
                        value="option4"
                        checked={selectedOption === 'option4'}
                        onChange={handleOptionChange}
                    />
                    3 Months Subscription
                </label>
            </div>
            <p>Selected option: {selectedOption}</p>
        </div>
    );
};

export default Plans;
