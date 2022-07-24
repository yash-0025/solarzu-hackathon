import Image from "next/image"
import NftCard from "./NftCard"

const HomePage = () => {
  return (
    <div className="flex flex-row justify-between relative">
      <div className="ml-20 mt-44">
        <Image
          src="https://res.cloudinary.com/krotcloud/image/upload/v1658604332/Text_w1yrjr.png"
          alt="logo"
          height={450}
          width={600}
          priority={true}
        />
      </div>
      <div className="mr-6 space-x-5 space-y-5">
        <p className="text-center text-white font-semibold text-5xl underline mt-1 mb-3 tracking-wider">
          NFT Marketplace
        </p>
        <div className="space-y-4">
          <div className="flex flex-row  w-full mt-1 space-x-5  ">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
          <div className="flex flex-row  w-full mt-1 space-x-5 ">
            <NftCard />
            <NftCard />
            <NftCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
