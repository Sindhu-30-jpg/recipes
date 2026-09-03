// import React from 'react'
// let obj={padding:'5px 30px',cursor:'pointer'}
// class Counterapp extends React.Component{
//     state={
//         count:0
//     }
//     increment=()=>{
//         this.setState({count:this.state.count+1})
//         console.log(this.state.count)
       
        
//     }

//      decrement=()=>{
//         this.setState({count:this.state.count-1})
//         console.log(this.state.count)
//      }
//     render(){
//         return<div style={{display:'flex',justifyContent:'center',marginTop:'10px'}}>
//             <button style={obj} onClick={this.decrement}>decrement</button>
//             <h2>{this.state.count}</h2>
//             <button style={obj} onClick={this.increment}>increment</button>

//         </div>

//     }
// }

// export default Counterapp


// import React from "react"

// class Counterapp extends React.Component{
//     state={
//         count:0
//     }


//     increment=()=>{
//         this.setState({count:this.state.count+1})
//     }

//     decrement=()=>{
//         this.setState({count:this.state.count-1})
//     }
//     render(){
//         return <div>
//             <button onClick={this.decrement}>left</button>
//             <h2>{this.state.count}</h2>
//             <button onClick={this.increment}>right</button>
//         </div>
//     }
// }export default Counterapp


import React from "react"


class Counterapp extends React.Component{

    state={
         count:0
}

    increment=()=>{
        this.setState({count:this.state.count+1})


    }
    decrement=()=>{
        this.setState({count:this.state.count-1})

    }
    render(){
        return <div>
            <button onClick={this.decrement}>left</button>
            <h2>{this.state.count}</h2>
            <button onClick={this.increment}>right</button>
        </div>
    }
}export default Counterapp