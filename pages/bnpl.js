import React from 'react';
import { useContext ,useEffect } from 'react';
import {solarzuContext} from '../components/layout';
export default function BNPL(){
    const {changeHome} = useContext(solarzuContext);
    useEffect(() => {
        changeHome()
    },[]);
    return (
        <div>
            Hii
        </div>
    )
}
