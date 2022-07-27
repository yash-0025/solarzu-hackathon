import Image from "next/image"
import React from "react"
import styles from "../styles/Home.module.css"

const NftCard = () => {
  return (
    
      <div className={styles.card}>
        <div className="mx-20 ">
          <Image
            className="rounded-3xl"
            src="https://res.cloudinary.com/krotcloud/image/upload/v1658608494/1_vmhuik.png"
            alt="nft-image"
            height={180}
            width={180}
            priority={true}
          />
        </div>
        <p className="mt-8/12 text-2xl font-normal text-white">
          Name: Bitlord Nft
        </p>
        <p className="mt-8/12 text-2xl font-normal text-white">
          Price: 0.01 eth{" "}
        </p>
        <button className={styles.checkoutbtn}>Checkout</button>
      </div>

  )
}

export default NftCard
