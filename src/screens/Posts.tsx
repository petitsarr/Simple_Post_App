import React , {useState , useEffect} from "react";  
import axios from "axios";  
import Postlist from "../components/Postlist"
import Postdata from "../interfaces/Postdata";


const Posts : React.FC = ()=>{     

    const [allpost , setAllpost] = useState<Postdata[] | null>(null) 

    const [nombrepost , setNombrepost] = useState<number>(5)    

    const url =  ` https://jsonplaceholder.typicode.com/posts?_limit=${nombrepost}   ` 
    
    useEffect(()=>{
        getAllpost()
    },[nombrepost])

    const getAllpost =() =>{
        axios.get(url)
        .then((response)=>{ 

            console.log(response.data)  

            setAllpost(response.data)
        }) 
        .catch((err)=>{
            console.log(err)
        })
    }  

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{ 
        setNombrepost(+e.target.value)
    } 

  //  console.log(nombrepost)

 return( 
    
      <div > 
               <label htmlFor="customRange1" className="form-label"><h2>Nombre de Posts : {nombrepost}</h2></label>
                <input type="range" min="0" max="30" className="form-range" id="customRange1" onChange={handleChange}/>
            <Postlist allpost = {allpost} />
     </div>
 )  
        
}  


export default Posts ;