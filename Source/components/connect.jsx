import React from 'react'
import MetaMask from "../public/image.png"
import { useContract } from '../context/ContractContext'

const Connect = () => {

  return (
    <div className='flex justify-center items-center'>
      <div className='border shadow-2xl rounded-md transform hover:scale-110 transition duration-200 ease-in-out cursor-pointer p-3'>
        <img src={ MetaMask } width={200} height={100} />
        <p className='flex justify-center capitalize p-2'>metamask</p>
      </div>
    </div>
  )
}

export default Connect
