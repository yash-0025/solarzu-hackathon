import React from "react";
import Navbar from "./NavBar";
import { useState,useContext,createContext } from "react";
import { sequence } from '0xsequence'

export const solarzuContext = createContext();
export default function Layout({children}){
    const [home,setHome] = useState(true);
    const [connected, setConnected] = useState(false);
    const connectWallet = async () => {
        const wallet = sequence.getWallet();
        const connectDetails = await wallet.connect();
        setConnected(true);
        console.log('=> connected?', connectDetails.connected);
    }
    const changeHome = () =>{
        setHome(!home);
    }

    return(
        <solarzuContext.Provider value={{
            changeHome,
            connectWallet,
            connected
            }}>
            <Navbar home = {home}/>
            {children}
        </solarzuContext.Provider>
    )
}