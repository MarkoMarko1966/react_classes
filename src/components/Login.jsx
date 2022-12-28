import { useState } from "react"


export const LogIn = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSumbit = (event) => {
        event.preventDeFault()
        
        console.log(`User Submitted : username : ${username} and password : ${password}`)
    }

    console.log("rerender")
    return <form onSumbit={handleSumbit}>

        <label>username</label>
        <input 
            type="text" 
            value={username} 
            onChange={(event) => {
                setUsername(event.target.value)
            }} 
        />

        <br />
        <label>password</label>
        <input 
            type="password" 
            value={password} 
            onChange={(event) => {
            setPassword(event.target.value)
        }} 
        />

        <div>
            <button style={{width:"500px"}}type="sumbit">LogIn</button>
        </div>

        <hr/><hr/><hr/><hr/>
        <div>
            Username: {username}
        </div>
        <div>
            Password: {password}
        </div>

    </form>
}