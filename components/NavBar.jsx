import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="flex  justify-between items-center  bg-navcolor w-full fixed">
      <div className="p-1 mx-3 ">
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
      <div className="w-1/3 mx-4  ">
        <ul className="flex flex-row justify-between items-center text-white text-2xl mr-3 p-1 ">
          <li className="rounded-2xl border-2 text-center p-3">
            <Link href="/">
              <a className="align-center">Home</a>
            </Link>
          </li>
          <li className="rounded-2xl border-2 text-center p-3">
            <Link href="/">
              <a>Documentaion</a>
            </Link>
          </li>
          <li className="rounded-2xl border-2 text-center p-3">
            <Link href="/">
              <a>Checkout</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
