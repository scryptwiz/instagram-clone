import Image from "next/image";
import Link from "next/link";
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { BsInstagram, BsSearch } from 'react-icons/bs';
import { FiSend } from 'react-icons/fi';

const Header = () => {
    return (
        <div className="w-full lg:w-2/12 border-r border-gray-200 h-screen">
            {/* Large Screen Header */}
            <header className="hidden lg:flex flex-col justify-between mx-auto px-3 py-5 gap-20">
                {/* Logo section */}
                <div className="relative lg:inline-flex w-32 h-16 cursor-pointer">
                    <Image src="/logo.png" layout="fill" objectFit="contain" />
                </div>
                <div className="flex flex-col">
                    <Link href='/' className="deskLink">
                        <span>Home</span>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default Header