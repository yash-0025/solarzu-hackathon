import React, { useEffect } from "react";
import Navbar from "./NavBar";
import { useState,useContext,createContext } from "react";
import { Contract , ethers} from "ethers";
import { solarzuAddress,abi} from "../constants/index"
import Web3Modal from "web3modal";
export const solarzuContext = createContext();
export default function Layout({children}){
    const [home,setHome] = useState(true);
    const [connected, setConnected] = useState(false);
    const [provider,setProvider] = useState(null);
    const [contract,setContract] = useState(null);

    const providerOptions = {
        /* See Provider Options Section */
    };
      
    const connectWallet = async () => {
        const web3Modal = new Web3Modal({
            network: "mumbai", // optional
            cacheProvider: true, // optional
            providerOptions // required
        });
        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);
        const signer = provider.getSigner();
        setProvider(signer);
        setConnected(true);
        
    }
    const disconnect = () => {
        setConnected(false);
    }
    const changeHome = () =>{
        setHome(!home);
    }

    useEffect(() => {
        if(connected){
            setContract(new Contract(solarzuAddress,abi,provider));
        }
    },[connected]);

    return(
        <solarzuContext.Provider value={{
            changeHome,
            connectWallet,
            disconnect,
            connected,
            home,
            contract,
            provider
            }}>
            <Navbar home = {home}/>
            {children}
        </solarzuContext.Provider>
    )
}