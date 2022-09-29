import React from 'react'; 
import {BrowserRouter ,Route , Routes } from "react-router-dom" 
import Posts from './screens/Posts'; 
import PostDetails from './screens/PostDetails';



const App = () =>{
  return ( 
      <BrowserRouter> 
         <Routes> 
          <Route  path='/'  element={<Posts/>}  />  

          <Route path=':id' element={<PostDetails/>} />

         </Routes>

      </BrowserRouter>
  )
}

export default App;
