import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

export const USERS = [];

const Suggestions = () => {
    const createRandomUser = () => {
        return {
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        };
    }
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        Array.from({ length: 5 }).forEach(() => {
            USERS.push(createRandomUser());
        });
        setSuggestions(USERS);
    }, [USERS])

    return (
        <div className="mt-4 ml-7">
            <div className=" flex justify-between text-sm mb-5">
                <h2 className="text-sm text-gray-400 font-bold">Suggestions for you</h2>
                <button className="text-gray-600 font-semibold cursor-pointer">See All</button>
            </div>

            {
                suggestions.map(profile => (
                    <div key={profile.userId} className='flex items-center w-full justify-between mt-3'>
                        <div className="flex justify-beteen items-center">
                            <img src={profile.avatar} alt={profile.username} className='w-10 h-10 rounded-full border p-[2px]' />
                            <div className="text-sm ml-2">
                                <h2 className="font-bold text-gray-700">{profile.username}</h2>
                                <h3>Suggested to you</h3>
                            </div>
                        </div>
                        <button className="text-blue-400 text-sm font-semibold">Follow</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Suggestions