const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-5">
            <div className="flex items-center gap-2">
                <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/355.jpg" className="rounded-full border p-2 w-16 h-16" alt="" />
                <div className="text-sm flex-1 text-gray-700">
                    <h2 className="truncate font-semibold">hello</h2>
                    <h2 className="truncate">Welcome</h2>
                </div>
            </div>
            <button className="text-blue-400 font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile