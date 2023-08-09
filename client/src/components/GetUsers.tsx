import {useQuery} from "@apollo/client";
import {LOAD_USERS} from '../GraphQL/Queries.ts'
import {useEffect, useState} from "react";

export interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
}
export const GetUsers = () => {
    const {error, loading, data} = useQuery(LOAD_USERS)
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        if(data) {
            setUsers(data?.getAllUsers)
        }
    }, [data])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {users.map(user => (
                <div>{user.firstName}</div>
            ))}
        </div>
    );
};
