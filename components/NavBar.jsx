import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

const NavBar = (props) => {

  const connectWallet = async () => {
    const wallet = sequence.initWallet('polygon')
    const connectDetails = await wallet.conconsole.log('=> connected?', connectDetails.connected)nect();
    console.log('=> connected?', connectDetails.connected);
  }

  return (
    <nav className="flex  justify-between items-center  bg-navcolor w-full">
      <div className="brd">
        <Link href="/">
          <Image
            className="rounded-xl "
          src="https://res.cloudinary.com/krotcloud/image/upload/v1658551558/Logo_Main_nrupg8.jpg"
          alt="logo"
          height={80}
          width={160}
          priority={true}
          />
          </Link>
      </div>
      <div className="w-1/3 mx-4 relative ">
        <ul className="flex flex-row justify-between items-center text-white text-2xl mr-3 p-1 ">
          <li className="rounded-2xl border-2 text-center p-3 brd">
            <Link href="/">
              <a className="align-center">Home</a>
            </Link>
          </li>
          <li className="rounded-2xl border-2 text-center p-3 brd">
            <Link href="/">
              <a>Documentaion</a>
            </Link>
          </li>
          <li className="rounded-2xl brd border-2 tet-center p-3 `${styles.brd}` ">
          {
            props.home ?
              <Link href="/" >
                <a >Checkout</a>
              </Link>
            :
              <Link href="/" onClick = {connectWallet}>
                <a>Connect</a>
              </Link>
          }
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
