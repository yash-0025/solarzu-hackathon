import Navbar from "./NavBar";
import { useState,createContext } from "react";
export const solarzuContext = createContext();
export default function Layout({children}){
    const [home,setHome] = useState(true);

    const changeHome = () =>{
        setHome(!home);
    }

    return(
        <solarzuContext.Provider value={{changeHome}}>
            <Navbar home = {home}/>
            {children}
        </solarzuContext.Provider>
    )
}