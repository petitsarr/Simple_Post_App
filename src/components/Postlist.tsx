import React from "react"   
import  {useNavigate} from "react-router-dom"
import hasPostlist from "../interfaces/haspostlist"
 
const Postlist :React.FC<hasPostlist> = ({allpost})=>{    

    let navigate = useNavigate()


    return(
        <div className="card" style={{display : "flex" , flexDirection : "row"  ,flexWrap :"wrap" ,justifyContent:"space-between" ,alignItems :"center" }} >
       {
        allpost?.map((p)=>{
            return( 
                <div className="card-body" key={p.id} style={{width: "30rem" , margin:10 , border :"2px solid grey" ,borderRadius :5}}>
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text"> {p.body} </p>
                  <button onClick={()=> navigate(`/${p.id}` ,{state : {data : p}} )} className="btn btn-primary">Details</button>
                </div>
            )
        })
       }
      </div>
        
    )

}  
export default Postlist   



