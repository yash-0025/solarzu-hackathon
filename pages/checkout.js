// import React from 'react';
// import { useContext ,useEffect } from 'react';
// import {solarzuContext} from '../components/layout';
import Checkout from './Checkout';

export default function Check(){
    // const {changeHome} = useContext(solarzuContext);
    // useEffect(() => {
    //     changeHome()
    // },[]);
    return (
        <div>
           <p className="text-white">Welcome to the BNPLpage</p> 
            <Checkout />
        </div>
    )
}
