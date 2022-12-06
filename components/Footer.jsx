import Link from "next/link"
import { AiFillHome, AiOutlineSearch, AiOutlineSend } from "react-icons/ai"
import { BiMoviePlay } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"

const Footer = () => {
    return (
        <footer className="flex bg-white fixed bottom-0 py-3 border-t border-gray-300 justify-between px-4 w-full md:hidden">
            <Link href="#">
                <AiFillHome className="text-gray-700 text-2xl" />
            </Link>
            <Link href="#">
                <AiOutlineSearch className="text-gray-700 text-2xl" />
            </Link>
            <Link href="#">
                <BiMoviePlay className="text-gray-700 text-2xl" />
            </Link>
            <Link href="#">
                <AiOutlineSend className="text-gray-700 text-2xl" />
            </Link>
            <Link href="#">
                <CgProfile className="text-gray-700 text-2xl" />
            </Link>
        </footer>
    )
}

export default Footer