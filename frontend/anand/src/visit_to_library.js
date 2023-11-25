import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Visit_to_the_library=()=>{
  
  const [Symposium,setSymposium]=useState({
    name_of_the_faculty:"",
    date:"",
    purpose_of_visit:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="name_of_the_faculty"||name==="date"||name==="purpose_of_visit"){
              return{
                  ...old,
                  [name]:value
              }
          }
          else if(name==="s_no"){
              // fillPorposals(value)
              return{
                  ...old,
                  [name]:parseInt(value)
              }
          }
          else{
              return{
                  ...old,
                  [name]:parseInt(value)
              }
          }
        })
    }
    
    const callPropose=async()=>{
      try{
      await axios.post(`http://localhost:7541/newrecord`,Symposium)
      }
      catch(err){
        alert("Error in axios")
      }
      // setInformation(temp.message)
    
    
  }
  return (
    <>
    <div className='overallcontent'>
    <div className='style'>
      <form className='block' >
        <div className='font'>
        <div className='head'><h1 style={{color:'purple'}}>VISIT TO THE LIBRARY</h1></div>
         
          <div  className='ej' >
            
            <tr><label><b>Name of the Faculty</b></label>
            <select name="name_of_the_faculty" value={Symposium.name_of_the_faculty} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>Baranikeshava</option>
              <option>Anand</option>
              <option>Bharathi</option>
            </select>
            </tr>
            <br/>
            
            <tr>
            <label>Date</label>
            <input type='text' name='date' value={Symposium.date} onChange={infoCollect} placeholder='Date' style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>
            
            <tr>
            <label>Purpose of Visit</label>
            <input type='text' name='purpose_of_visit' value={Symposium.purpose_of_visit} onChange={infoCollect} placeholder='Purpose of Visit' style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>           

     
          </div>
         
          <button type='submit' name='submit' onClick={callPropose} style={{marginTop:'20px',marginLeft:'50px'}}>SUBMIT </button>
          <button  className='clear' type='reset' name='clear'>CLEAR</button>
        </div>
      </form>
    </div>
    </div>
    </>

  )
}


export default Visit_to_the_library;