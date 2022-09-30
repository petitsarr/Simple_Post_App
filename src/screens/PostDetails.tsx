 import React from "react"   
 import {useLocation ,useNavigate} from "react-router-dom"  

 const PostDetails = () => {  
  //  let params = useParams()  
    let {state} = useLocation()   
    let {id ,body ,title }  = state.data

    let navigate = useNavigate()
    console.log("location" , state) 

   // console.log("==>My params " , params)
    return(
       <div>  
        <h1>Publication Numéro : {id}</h1>
         <div className="card-body" key={id} style={{width: "30rem" , margin:10 , border :"2px solid grey" ,borderRadius :5}}>
        <h5 className="card-title">{title}</h5>
        <p className="card-text"> {body} </p>
        <button onClick={()=> navigate(-1)} className="btn btn-primary">Retour</button>
      </div>
       </div>
    )
} 
export default PostDetails