import {useState} from "react";

export const UserForm = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <div>
                <label htmlFor="firstName">First Name </label>
                <input id="firstName" type="text" onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="lastName">Last Name </label>
                <input id="lastName" type="text" onChange={e => setLastName(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password">password </label>
                <input id="password" type="text" onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="confirmpassword">confirm password </label>
                <input id="confirmpassword" type="text" onChange={e => setConfirmPassword(e.target.value)}/>
                </div>
            </form>

            <h2>Your Form Data</h2>
            <p>first name: {firstName}</p>
            <p>last name: {lastName}</p>
            <p>password: {password}</p>
            <p>confirmPassword: {confirmPassword}</p>
        </>
    )
}