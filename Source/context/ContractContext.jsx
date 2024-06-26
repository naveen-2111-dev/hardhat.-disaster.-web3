import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Abi from '../../artifacts/contracts/DisasterManagement.sol/DisasterManagements.json';
import { parseAmountToWEI } from '../utils/Parser';

const ContractContext = createContext();

export const ContractContextProvider = ({ children }) => {
    const [newContract, setNewContract] = useState(null);
    const [openConnect, setOpenConnect] = useState(false);
    const [word, setWord] = useState("");
    const contractAddress = "0x3b25490589B345bd327124BeF14D0A87Be70715E";

    useEffect(() => {
        if (!window.ethereum) {
            console.log("No MetaMask or any wallet found");
        }
    }, []);
  //connecting to metamask wallet 
  
    const Connect = async () => {
        try {
            if (window.ethereum) {
                await window.ethereum.request({ method: "eth_requestAccounts" });
                const newProvider = new ethers.BrowserProvider(window.ethereum); // BrowserProvider for version 6
                const signer = await newProvider.getSigner();
                const contract = new ethers.Contract(contractAddress, Abi.abi, signer);
                setNewContract(contract);
            } else {
                console.error("window.ethereum is undefined. MetaMask or another Ethereum wallet provider may not be installed or active.");
            }
        } catch (err) {
            console.error("Error initializing provider or contract:", err);
        }
    };
  //string memory _image, string memory _cause, string memory _location,
  // uint256 _volCount, string memory _description, 
  //string memory _data, uint256 _amount [params]
  
    const FundRaiser = async ({ Image, Cause, Location, Volunteer, Description, Date, AmountRequired }) => {
    try {
        if (newContract) {
            if (typeof AmountRequired === 'string' && AmountRequired.trim() !== '') {
                const stringamt = parseAmountToWEI(AmountRequired);
              console.log(stringamt);
                const DisasterFunding = await newContract.DemandFund(
                    Image,
                    Cause,
                    Location,
                    Volunteer,
                    Description,
                    JSON.stringify(Date),
                    stringamt
                );
                console.log(DisasterFunding);
            } else {
                console.log("Invalid AmountRequired. Please provide a valid string value.");
            }
        } else {
            console.log("Contract not initialized");
        }
    } catch (error) {
        console.log(error);
    }
};

    //passing id as params
  const Funder = async({_id, Amount}) => {
    try {
      const FundingPerson = newContract.Fundder(_id, {
        value: Amount
      });

      const Status = await FundingPerson.wait();
      if(Status){
      console.log("success full transaction");
      } else {
        console.log("transaction failed!...");
      }
    } catch (err) {
      console.log("error", err);
    }
  }

  const VolunteeringForDisaster = async({ _id }) => {
    try{
      const Vol = newContract.Volunteer(_id);
      const States = await Vol.wait();
      if (States) {
        console.log("vols success");
      } else {
        console.log("failed");
      }
    }catch(err){
      console.log("error", err);
    }
  }

  const GetDisasters = () => {
    const ContractDisasterData = newContract.DisasterReturner();
    console.log(ContractDisasterData);
    return ContractDisasterData;
  } 

  const values = {
    Connect,
    FundRaiser,
    GetDisasters,
    Funder,
    VolunteeringForDisaster,
    openConnect,
    setOpenConnect,
    word,
    setWord
  }; //exporting to frontend code

    return (
        <ContractContext.Provider value={values}>
            {children}
        </ContractContext.Provider>
    );
};

export const useContract = () => {
    const context = useContext(ContractContext);
    if (!context) {
        throw new Error('useContract must be used within a ContractContextProvider');
    }
    return context;
};
