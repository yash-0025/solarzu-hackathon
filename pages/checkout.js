import React from 'react';
import { useContext ,useEffect } from 'react';
import {solarzuContext} from '../components/layout';
import HDWalletProvider from "@truffle/hdwallet-provider";
import { OpenSeaPort, Network, OpenSeaSDK } from 'opensea-js';
import { BigNumber } from 'ethers';
const CoinGecko = require('coingecko-api');

export default function Checkout(){
    const {changeHome,home,contract} = useContext(solarzuContext);
    
    const ethToMatic = async() => {
        const CoinGeckoClient = new CoinGecko();
        const matic = await CoinGeckoClient.simple.price({
            ids: ['matic-network'],
            vs_currencies: ['eth'],
        });
        
    };
    useEffect(() => {
        if(home){
            changeHome();
        }
    },[home]);

    const PRIVATE_KEY = process.env.NEXT_PUBLIC_PRIVATE_KEY;
    const accountAddress= process.env.NEXT_PUBLIC_OWNER_ADDRESS;
    const providerUrl= process.env.NEXT_PUBLIC_INFURA_URL;
    const OSAPIKey = '';

    let provider = new HDWalletProvider({
            privateKeys: [
                PRIVATE_KEY
            ],
            providerOrUrl: providerUrl
    });

    const seaport = new OpenSeaPort(provider, {
        networkName: Network.Rinkeby,
        apiKey: ""
    }, (arg) => console.log(arg))

    const getDetails = async()=>{
        const tokenURL = document.getElementById("tokenURL").value;
        const tokenDetails = tokenURL.split("/");
        const tokenId = tokenDetails[tokenDetails.length - 1];
        const tokenAddress = tokenDetails[tokenDetails.length - 2];
        console.log(await seaport.api.getAsset({
            tokenAddress,
            tokenId
        }))
    }

    const createBuyOrder = async () => {
        const tokenURL = document.getElementById("tokenURL").value;
        const tokenDetails = tokenURL.split("/");
        const tokenId = tokenDetails[tokenDetails.length - 1];
        const tokenAddress = tokenDetails[tokenDetails.length - 2];
        await seaport.createBuyOrder({
        asset: {
            tokenId,
            tokenAddress
        },
        accountAddress,
        startAmount: 0.001,
        paymentTokenAddress:"0xc778417E063141139Fce010982780140Aa0cD5Ab",
        })
        alert("Created Buy Order Successful");
    };
    const divideInstalments = async (total_amount, instalments) => {
        try{
            const CoinGeckoClient = new CoinGecko();
            const matic = await CoinGeckoClient.simple.price({
                ids: ['matic-network'],
                vs_currencies: ['eth'],
            });
            const amount = Math.ceil((total_amount)/ matic.data["matic-network"].eth);
            const instalment_amount = Math.round(amount*(10**18) / instalments);
            await contract.divide_installments(amount, instalments, BigNumber.from(""+instalment_amount));
            console.log("done");
            
        }
        catch(err){
            alert(err.reason)
        }
    }

        

    return (
        <div className='flex flex-col items-center mt-10'>
            <input type="text" id="tokenURL" placeholder="Enter url"></input>
            <button className='mt-5' onClick={()=>{divideInstalments(1,3)}}>Get details</button>
        </div>
    )
}
