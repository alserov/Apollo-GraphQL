import {FormEvent, useState} from "react";
import {CREATE_USER} from "../GraphQL/Mutations.ts";
import {useMutation} from "@apollo/client";

export const Form = () => {
    const [name,setName] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [lastName,setLastName] = useState<string>('')
    const [email,setEmail] = useState<string>('')

    const [createUser, {error}] = useMutation(CREATE_USER)
    const formSubmit = (e : FormEvent) => {
        e.preventDefault()
        createUser({
            variables: {
                firstName : name,
                lastName : lastName,
                email : email,
                password : password
            }
        })
        if(error) {
            alert(error)
        }
    }
	return (
		<form onSubmit={formSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.currentTarget.value)}/>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.currentTarget.value)}/>
            <input type="text" value={password} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <input type="text" value={email} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <button>Submit</button>
        </form>
	)
}