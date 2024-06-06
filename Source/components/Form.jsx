import React, { useState } from 'react';
import { useContract } from '../context/ContractContext';
import IsImageUrl from '../utils/ImageUrl';

const Form = () => {
  const [url, setUrl] = useState('');
  const [cause, setCause] = useState('');
  const [loc, setLoc] = useState('');
  const [vol, setVol] = useState(0);
  const [des, setDes] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(0);
  const { FundRaiser } = useContract();

  const HandleForm = async (e) => {
    e.preventDefault(); 
    const url_finder = IsImageUrl(url);
    const amounts = JSON.stringify(amount)

    if (url_finder) {
      try {
        await FundRaiser(url, cause, loc, vol, des, date, amounts);
        alert("Data added");
      } catch (err) {
        console.log(`Error: ${err}`);
      }
    } else {
      alert("Invalid image URL. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="space-y-4 mt-10 border p-10 rounded-md shadow-lg" onSubmit={HandleForm}>
        <input
          type="text"
          placeholder="URL"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cause"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setCause(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setLoc(e.target.value)}
        />
        <input
          type="number"
          placeholder="Volunteer"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setVol(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Description"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setDes(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          placeholder="Needed amount"
          className="w-full p-2 border border-gray-300 rounded"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="flex justify-center text-white capitalize bg-blue-500 hover:bg-blue-700 p-2 rounded-lg shadow-md"
        >
          Raise fund
        </button>
      </form>
    </div>
  );
};

export default Form;
