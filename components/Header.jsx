import Image from "next/image";
import { BsInstagram } from 'react-icons/bs';

const Header = () => {
    return (
        <div>
            <div className="flex justify-between max-w-6xl mx-auto px-3 py-5">
                {/* Logo section */}
                <div className="relative hidden lg:inline-flex w-24 h-10 cursor-pointer">
                    <Image src="/logo.png" layout="fill" objectFit="contain" />
                </div>
                <div className="relative lg:hidden inline-flex flex-shrink-0 cursor-pointer">
                    <BsInstagram className="text-4xl" />
                </div>
                {/* Search field */}
                <div className="">
                    <input type="text" placeholder="Search Here..." />
                </div>
                <div>Hello</div>
            </div>
        </div>
    )
}

export default Header