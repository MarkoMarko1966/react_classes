import { useState } from "react"


const LifecycleFuncComponent = () => {

    const [counter, setCounter] = useState(0)
    // let counter = 10

    const Increment = () => {
        setCounter(counter + 10)
    }

console.log("render")
console.log("counter", counter)

    return <div>
        counter : {counter}

    <br/>
        <button onClick={Increment}>Increment</button>
        <button 
            onClick={() => setCounter(counter + 10)}
        >Increment v2</button>
    </div>


}

export default LifecycleFuncComponent