import React from 'react'
import MetaMask from "../images/image.png"
import { useContract } from '../context/ContractContext'

const Connect = () => {

  const { openConnect, word, Connect } = useContract();

  const ConnectToWallet = async() => {
    try {
      await Connect();
      alert("connected")
    } catch (err) {
      console.log(`error in connecting ${err}`)
    }
  }

  return (
    <div className='flex justify-center items-center border rounded-md shadow-xl transition hover:scale-110 duration-300 ease-in-out' onClick={ConnectToWallet}>
      {openConnect ? (
        <div className='p-3'>
          <img src={MetaMask} width={200} height={200} />
          <p className='p-2 capitalize flex justify-center'>metamask || {word}</p>
        </div>
      ) : ""}
    </div>
  )
}

export default Connect
