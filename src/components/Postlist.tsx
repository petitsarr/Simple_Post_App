import React from "react"  
import hasPostlist from "../interfaces/haspostlist"

const Postlist :React.FC<hasPostlist> = ({allpost})=>{    

    


    return(
        <div className="card container" >
       {
        allpost?.map((p)=>{
            return( 
               <div className="row"> 
                    <div className="card-body col col-sm-6 col-md-3 col-xl-4" key={p.id} style={{width: "30rem" , margin:10}}>
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text"> {p.body} </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

               </div>
            )
        })
       }
      </div>
        
    )

}  
export default Postlist   



