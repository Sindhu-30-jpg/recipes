// import { useState } from "react"

import { useState } from "react"

// function Getproducts(){
//     const[products,setproducts]=useState([])
//     const get_recipes=async()=>{
//         let response=await fetch('https://dummyjson.com/recipes')
//         response=await response.json()
//         console.log(response)
//         setproducts(response.recipes)
//     }
//     console.log(products,"products")
//     return <div>
//         <button onClick={get_recipes}>get products</button>

//         {products.length>0?

//         products.map((each_item)=><img src={each_item.image} style={{width:"200px", height: "200px"}}/>)        
//         :
//         "data loading"
//     }
//     </div>
// }export default Getproducts



function Getproducts(){

    const[products,setproducts]=useState([])
    const get_recipes=async()=>{

    
        let response=await fetch('https://food-backend-server-xvja.onrender.com/recipes/')
        response=await response.json()
        console.log(response)
        setproducts(response.recipes)
     }

    console.log(products,"products")
    return <div>
        <button onClick={get_recipes}>get products</button>
        {products.length>0? 
        products.map((each_item)=> <img src={each_item.image} style={{width:'200px', height:'100px',borderRadius:'50%'}}/>)
        :
        "data loading............."
    }

    </div>
}
export default Getproducts














