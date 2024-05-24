import React, { createContext, useContext } from 'react'
import { ethers } from 'ethers';

const Contractcontext = createContext();

export const ContractContextProvider = ({ childeren }) => {
    const Values = {};

  return (
    <Contractcontext.Provider value={Values}>
      {childeren}
    </Contractcontext.Provider>
  )
}

export const useContract = useContext(Contractcontext);