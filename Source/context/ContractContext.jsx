import React, { createContext, useContext, useEffect, useState } from 'react'
import { ethers } from 'ethers';
import Abi from "../../artifacts/contracts/DisasterManagement.sol/DisasterManagements.json"

const Contractcontext = createContext();

export const ContractContextProvider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const contractAddress = "0x181e4131d6A897C8CB6f8E33C38a3dCCC818FDf2";

useEffect(() => {
  const providerInitialization = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(newProvider);
        const signer = newProvider.getSigner();
        const newContract = new ethers.Contract(contractAddress, Abi.abi, signer);
        setContract(newContract);
      } else {
        console.error("window.ethereum is undefined. MetaMask or another Ethereum wallet provider may not be installed or active.");
      }
    } catch (err) {
      console.error("Error initializing provider or contract:", err);
    }
  };
  providerInitialization();
}, []);


  const values = { provider, contract };

  return (
    <Contractcontext.Provider value={values}>
      {children}
    </Contractcontext.Provider>
  )
}

export const useContract = () => {
  const context = useContext(Contractcontext); 
  if (!context) {
    throw new Error('useContract must be used within a ContractContextProvider');
  }
  return context;
};
