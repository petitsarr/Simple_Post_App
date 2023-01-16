import React , {useState , useEffect} from "react" ; 
import axios from "axios";  
import Postlist from "../components/Postlist"
import Postdata from "../interfaces/Postdata";


const Posts : React.FC = () => {     

    const [allpost , setAllpost] = useState<Postdata[] | null>(null) 

    const [nombrepost , setNombrepost] = useState<number>(30)    

    const url =  ` https://jsonplaceholder.typicode.com/posts?_limit=${localStorage.getItem("nombre")||nombrepost}` 
    
    useEffect(()=>{
        getAllpost()
    },[localStorage.getItem("nombre")||nombrepost])

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

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{ 
        setNombrepost(+e.target.value) 
        localStorage.setItem("nombre",e.target.value)
    } 

  //  console.log(nombrepost)

 return( 
    
      <div > 
               <label htmlFor="customRange1" className="form-label"><h2>Nombre de Posts : {localStorage.getItem("nombre")||nombrepost}</h2></label>
                <input type="range" min="0" max="30" className="form-range" id="customRange1" defaultValue={localStorage.getItem("nombre")||nombrepost} onChange={handleChange}/>
                 <Postlist allpost = {allpost} />
     </div>
 )  
        
}  


export default Posts ;