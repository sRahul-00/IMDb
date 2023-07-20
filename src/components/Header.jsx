import Link from "next/link"
import MenuItem from "./MenuItem"
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons/bs"

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-2 sm:mx-auto max-w-6xl py-6">
        <div className="flex">
            <MenuItem title="Home" address="/" Icon={AiFillHome} />
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="mr-2">
          <Link href = "/">
            <h2 className="text-2xl"><span className="font-bold bg-amber-500 py-1 px-2 mr-1 rounded-lg">IMDb</span><span className="hidden sm:inline">Clone</span></h2>
          </Link>
        </div>
    </div>
  )
}
export default Header