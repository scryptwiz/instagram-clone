import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu, AiOutlineSearch, AiOutlineSend } from 'react-icons/ai';
import { BiMessageSquareAdd, BiMoviePlay, BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FiInstagram } from 'react-icons/fi';
import { MdOutlineAddBox, MdOutlineExplore, MdOutlineFavoriteBorder } from 'react-icons/md';

const Header = () => {
    return (
        <div className="w-full md:w-fit lg:w-2/12 border-r border-gray-200">
            {/* Large Screen Header */}
            <header className="hidden bg-white md:flex flex-col justify-between h-screen sticky left-0 top-0 mx-auto px-7 lg:py-7 md:py-5">
                {/* Logo section */}
                <div className="relative hidden lg:inline-flex w-28 h-14 cursor-pointer">
                    <Image src="/logo.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative w-fit lg:hidden md:inline-flex cursor-pointer">
                    <FiInstagram className="text-2xl text-black/80" />
                </div>
                <div className="flex flex-col gap-10 w-fit">
                    <Link href='/' className="deskLink outline-none">
                        <AiFillHome className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex font-semibold">Home</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <BiSearch className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Search</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <MdOutlineExplore className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Explore</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <AiOutlineSend className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Message</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <MdOutlineFavoriteBorder className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Favourite</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <MdOutlineAddBox className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Create</span>
                    </Link>
                    <Link href='/' className="deskLink outline-none">
                        <CgProfile className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">Profile</span>
                    </Link>
                </div>
                <div className="flex">
                    <Link href='/' className="deskLink outline-none">
                        <AiOutlineMenu className="text-2xl text-black/80" />
                        <span className="text-md hidden lg:flex">More</span>
                    </Link>
                </div>
            </header>
            {/* Small Screen Header */}
            <header className="md:hidden bg-white flex items-center justify-between py-2 px-3 w-full shadow">
                <div className="relative inline-flex w-24 h-10 cursor-pointer">
                    <Image src="/logo.png" layout="fill" objectFit="contain" />
                </div>
                <div className="flex items-center gap-4">
                    <BiMessageSquareAdd className="text-gray-500 text-2xl" />
                    <MdOutlineFavoriteBorder className="text-gray-500 text-2xl" />
                </div>
            </header>
        </div>
    )
}

export default Header