import React, { useState } from 'react'

const Form = () => {

    const [url, seturl] = useState('');
    const [cause, setcause] = useState('');
    const [loc, setloc] = useState('');
    const [vol, setvol] = useState('');
    const [des, setdes] = useState('');
    const [date, setdate] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <div className="max-w-md mx-auto">
          <form className="space-y-4 mt-10 border p-10 rounded-md shadow-lg">
            <input
              type="text"
              placeholder="URL"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Cause"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="Volunteer"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              placeholder="URL"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              placeholder="needed amount"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </form>
        </div>
  )
}

export default Form
