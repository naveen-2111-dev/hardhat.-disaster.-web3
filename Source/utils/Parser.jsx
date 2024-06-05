import { ethers } from 'ethers';

export const parseAmountToWEI = (amount) => {
    try {
        const parsedAmountInWEI = ethers.utils.parseEther(amount.toString());
        console.log("Successfully converted:", parsedAmountInWEI.toString());
        return parsedAmountInWEI;
    } catch (err) {
        console.error("Error converting amount to WEI:", err);
        throw err;
    }
};
