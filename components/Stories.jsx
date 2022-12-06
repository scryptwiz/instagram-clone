import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from './Story';

export const USERS = [];

const stories = () => {
    const createRandomUser = () => {
        return {
            userId: faker.datatype.uuid(),
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        };
    }
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        Array.from({ length: 20 }).forEach(() => {
            USERS.push(createRandomUser());
        });
        setSuggestions(USERS);
    }, [USERS])

    return (
        <div className="flex gap-2 p-6 overflow-x-auto bg-white mt-8 border-gray-400 border rounded-lg scrollbar-thin scrollbar-thumb-black">
            {suggestions.map(profile => (
                <Story key={profile.userId} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    )
}

export default stories