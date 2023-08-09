import {useQuery} from "@apollo/client";
import {LOAD_HUNDRED} from "../GraphQL/Queries.ts";
import {User} from "./GetUsers.tsx";
import {useEffect, useState} from "react";

export const HundredUsers = () => {
    const [users,setUsers] = useState<User[]>()
    const {data,loading} = useQuery(LOAD_HUNDRED)
    useEffect(() => {
        if(data) setUsers(data?.getHundredUsers)
    },[data])
	return (
		<div>
            {loading && <p>Loading</p>}
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {users?.map(user => (
                    <div>{user.firstName}{user.id}</div>
                ))}
            </div>
        </div>
	)
}