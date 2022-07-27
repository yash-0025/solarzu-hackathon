import NavBar from "./NavBar"
import styles from "../styles/Home.module.css"
import { useState } from "react"
import Image from "next/image"
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Modal } from "web3modal"

const CheckoutPage = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    console.log("Clicked")
  }
  return (
    <div className="flex justify-center" >
      <div className={styles.checkout}>
        <h1 className="mt-2 ml-2 p-2 tracking-wide font-semibold text-xl  underline text-white">
          Buy Now Pay Later
        </h1>

        <div className={styles.checkout_card}>
          <div className="flex flex-col m-2 space-y-4 w-3/4 rounded-md">
            <p className="text-white">URL :</p>
            <input
              className="h-12  rounded-md pl-[14px]"
              type="text"
              id="tokenURL"
              placeholder="Enter URL"
            ></input>
            <p className="text-white">NFT Name : </p>
            <input
              className="h-12 rounded-md pl-[14px] "
              type="text"
              id="tokenURL"
              placeholder="Enter NFT Name"
            ></input>
          </div>
        </div>
        <button className={styles.checkbtn} onClick={toggleModal}>
          Connect Wallet
        </button>
      </div>
      {modal && (
        <div className={styles.ovCard} >
          <div className={styles.overlay} onClick={toggleModal}>
            <div className={styles.mainOvCard}>
              {/*               <h1 className="text-white">CArd</h1> */}
              <div className="text-white text-2xl flex justify-end">
                <button onClick={() => {toggleModal}}>
                <AiOutlineCloseCircle className="mt-2 mr-3" />
                </button>  
              </div>
              <div className="flex justify-center">
                <div className="mt-4">
                  <Image
                    className="rounded-xl  pt-1   "
                    src="https://res.cloudinary.com/krotcloud/image/upload/v1658608494/1_vmhuik.png"
                    alt="NFT-Logo"
                    height={100}
                    width={100}
                    priority={true}
                  />
                </div>
              </div>
              <div className={styles.nft_details}>
                <div>
                  <h1 className="text-white font-bold underline tracking-wider font-">
                    NFT Details
                  </h1>
                  <div className="mt-4 space-y-2">
                    <p className="text-white ">Name :{}</p>
                    <p className="text-white">Price :{}</p>
                    <p className="text-white">Interest :{}</p>
                  </div>
                </div>
              </div>
              <div className={styles.nft_tra_details}>
                <div>
                  <h1 className="text-white font-bold underline tracking-wider font-">
                    Transactions Details
                  </h1>
                  <div className="mt-4 space-y-2 flex flex-col">
                    <div className="flex justify-between">
                      <p className="text-white ">Original Price :</p>
                      <p className="text-white ">100.00 ${ }</p>
                      </div>
                    <div className="flex justify-between">
                      <p className="text-white "> Interest Fees :</p>
                      <p className="text-white ">10.00 ${ }</p>
                      </div>
                    <div className="flex justify-between">
                      <p className="text-white ">Purchase Provider Fees :</p>
                      <p className="text-white ">2.50 ${ }</p>
                      </div>
                    <div className="flex justify-between">
                      <p className="text-white ">Total Purchase Fees :</p>
                      <p className="text-white ">112.50 ${ }</p>
                      </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CheckoutPage
