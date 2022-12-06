import { BiDotsHorizontalRounded } from "react-icons/bi"

const Post = ({ id, username, userImg, img, caption }) => {
    return (
        <div className="shadow-lg border border-gray-200 bg-white mt-5 rounded-lg">
            <div className="flex justify-between px-2 items-center">
                <span className="flex gap-3 p-3 items-center">
                    <img className="h-14 w-14 rounded-full object-contain p-1 border border-gray-400" src={userImg} alt={username} />
                    <p className="font-bold">{username}</p>
                </span>
                <BiDotsHorizontalRounded className="text-gray-400 text-xl cursor-pointer" />
            </div>
            <img src={img} className='object-cover w-full' alt={username} />
        </div>
    )
}

export default Post