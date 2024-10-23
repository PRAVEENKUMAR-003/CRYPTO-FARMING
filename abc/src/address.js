import {ethers} from "ethers"
import { contractAddress,abi } from "./constants";

async function address() {
  

  
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const accounts =  await provider.send("eth_requestAccounts", []);
      console.log(accounts)
      await provider.send('eth_requestAccounts', [])
      const signer = provider.getSigner()
      const contract = new ethers.Contract(contractAddress, abi, signer)
      var a=contract.decider();
      
    } else {
      console.log("Install Metamask");
    }
    
    
  };

export default address