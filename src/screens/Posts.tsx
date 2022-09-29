import React , {useState , useEffect} from "react";  
import axios from "axios";  
import Postlist from "../components/Postlist"
import Postdata from "../interfaces/Postdata";
import { get } from "http";

const Posts : React.FC = ()=>{     

    const [allpost , setAllpost] = useState<Postdata | null>(null) 

    const [nombrepost , setNombrepost] = useState<number>(5)    

    const url = "https://jsonplaceholder.typicode.com/posts?_limit=11"    
    
    useEffect(()=>{
        getAllpost()
    },[])

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
        console.log(e)

    }

 return(
      <div > 
               <label htmlFor="customRange1" className="form-label"><h2>Nombre de Posts : 5</h2></label>
                <input type="range" className="form-range" id="customRange1" onChange={handleChange}/>
            <Postlist/>
     </div>
 )  
        
}  


export default Posts ;