// import { useState } from "react"

import { useState } from "react"

// function Counter(){
//     const [value,setvalue]=useState(10)

//     const increment=()=>{
//         setvalue(value+1)
//     }
//     const decrement=()=>{
//         setvalue(value-1)
//     }

//     return <div>
//         <button onClick={increment}>increment</button>
//         <h2>{value}</h2>
//         <button onClick={decrement}>decrement</button>
//     </div>
// } export default Counter








function Counter(){
    const [value,setvalue]=useState(10)

    const increment=()=>{
        setvalue(value+1)
    }
    const decrement=()=>{
        setvalue(value-1)
    }
    return <div>
        <button onClick={increment}>increment</button>
        <h2>{value}</h2>
        <button onClick={decrement}>decrement</button>
    </div>
}export default Counter