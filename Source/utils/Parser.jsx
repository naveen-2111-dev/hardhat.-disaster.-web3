import { ethers, parseEther } from 'ethers';

export const parseAmountToWEI = (amount) => {
    try {
        const parsedAmountInWEI = parseEther(amount);
        console.log("Successfully converted:", parsedAmountInWEI);
        return parsedAmountInWEI;
    } catch (err) {
        console.error("Error converting amount to WEI:", err);
        throw err;
    }
};
