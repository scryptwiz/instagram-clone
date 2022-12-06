import { BiBookBookmark, BiChat, BiDotsHorizontalRounded, BiHappyHeartEyes, BiHeart, BiPaperPlane } from "react-icons/bi"

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

            <div className="flex justify-between p-5">
                <div className="flex gap-2">
                    <BiHeart className="btn" />
                    <BiChat className="btn" />
                    <BiPaperPlane className="btn" />
                </div>
                <BiBookBookmark className="btn" />
            </div>

            <p className="truncate px-5 text-sm text-gray-600">
                <span className="font-bold mr-1 capitalize">{username}</span>{caption}
            </p>

            <hr className="border border-gray-200 mt-4" />
            <form className="flex items-center px-4 py-3">
                <BiHappyHeartEyes className="text-2xl" />
                <input type="text" placeholder="Add a comment" className="border-none flex-1 focus:ring-0 outline-none" />
                <button className="font-semibold text-blue-400">Post</button>
            </form>
        </div>
    )
}

export default Post