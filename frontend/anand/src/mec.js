import React, { useState} from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import "./symp.css"
// import {useNavigate} from 'react';

 export const Add=()=>{
  
  const [symposium,setsymposium]=useState({
    name:"",
    college:"",
    emailid:"",
    contact:0,
    year:0,
    tevent:"",
    ntech:""
    })
  // const navigate = useNavigate()
console.log(symposium)
  const handlechange=(e)=>{
      setsymposium((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
      }))
  }
  const handleclick=async(e)=>{
    e.preventDefault()
     try{
      await axios.post('http://localhost:2020/insert',symposium)
     // navigate("/")
    }
  
    catch(err){
      console.log(err)
    }
    // .then(res=>{
    //   console.log(res)
    // })
    // .catch(err=>console.log(err));
    
  }
  return (
    <>
    <div className='overallcontent'>
    <div className='style'>
      <form className='block' >
        <div className='font'>
        <div className='head'><h1>EVENT PROPOSAL</h1></div>
          <div  className='ej' >
         
            <tr><label>Name of the Faculty</label>
            <select name="Technical events">
              <option>Anandha Kumar</option>
              <option>Barani Keshava</option>
            </select>
            
            </tr>
            <br/>
          
         

            <tr>
            <label>Name of the Module developed</label>
            <input type='text' name='faculty' placeholder='Name of the Module Developed'  onChange={handlechange}/>
            </tr>
            <br/>
         

          
            <tr>
            <label> Module of Platform</label>
            <input type='text' name='year' placeholder='Module of Platform'onChange={handlechange}  />
            </tr>
            <br/>
         
         
          
        
         
          <tr>
            <label>Date of Launching Content</label>
            <input type='date' name='session' placeholder='Date of Launching Content'onChange={handlechange}  />
            </tr>
            <br/>
          
            <tr>
            <label>Link to the Module Developed</label>
            <input type='text' name='course' placeholder='Link to the Module developed'onChange={handlechange}  />
            </tr>
            <br/>
          </div>
         
          <button type='submit' name='submit' onClick={handleclick} style={{marginTop:'20px'}}>SUBMIT </button>
          <button  className='clear' type='reset' name='clear'>CLEAR</button>
        </div>
      </form>
    </div>
    </div>
    </>

  )
}


export default Add;