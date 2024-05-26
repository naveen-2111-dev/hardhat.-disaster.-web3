  import React, { createContext, useContext, useEffect, useState } from 'react'
  import { ethers } from 'ethers';
  import Abi from "../../artifacts/contracts/DisasterManagement.sol/DisasterManagements.json"

  const Contractcontext = createContext();

  export const ContractContextProvider = ({ children }) => {
    let newProvider = "";
    // const [contract, setContract] = useState(null);
    const contractAddress = "0x181e4131d6A897C8CB6f8E33C38a3dCCC818FDf2";
    let newContract = "";

  useEffect(() => {
    if (!window.ethereum) {
      console.log("no metamask or any wallet found");
    }
  }, []);

  const Connect = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        newProvider = new ethers.BrowserProvider(window.ethereum);//BrowserProvider for version 6........
        const signer = await newProvider.getSigner();
        newContract = new ethers.Contract(contractAddress, Abi.abi, signer);
        FundRaiser();
      } else {
        console.error("window.ethereum is undefined. MetaMask or another Ethereum wallet provider may not be installed or active.");
      }
    } catch (err) {
      console.error("Error initializing provider or contract:", err);
    }
  };
  //string memory _image, string memory _cause, string memory _location, uint256 _volCount,
  // string memory _description, string memory _data, uint256 _amount [contract params]
    const FundRaiser = async () => {
      try {
        if (newContract) {
          const DisasterFunding = await newContract.DemandFund(
            "flood.jpeg",
            "flood",
            "chennai",
            20,
            "emergency volunteers needed",
            "23",
            200
          )
          console.log(DisasterFunding);
        } else console.log("contract not initialized");
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      Connect();
    }, [])
    useEffect(() => {
      if (newContract) {
        FundRaiser();
      }
    }, [newContract]);
    
    const values = { Connect };

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
