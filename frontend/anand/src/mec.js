import React, { useState} from 'react';
import axios from "axios"
import "./mec.css"
// import {useNavigate} from 'react';

 export const Add=()=>{
  const[information,setInformation]=useState("")

  const[Symposium,setSymposium]=useState({
    "Name_of_the_faculty":"",
    "Name_of_the_Module_Developed":"",
    "Module_of_platform":"",
    "Date_of_launching_e_content":"",
    "Link_to_the_module_developed":""
  })

  console.log(Symposium)
//   const[proposal,setProposal]=useState([])

//   const fillPorposals=async(s_no)=>{
//     const temp = await onProposalsLoad(s_no)
//     setProposal(temp)
// }
// console.log(Symposium)
// console.log(typeof(Symposium.Event_type))

const infoCollect=(eve)=>{
  const{name,value}=eve.target
  setSymposium((old)=>{
      if(name==="Name_of_the_faculty"||name==="Name_of_the_Module_Developed"||name==="Module_of_platform"||name==="Date_of_launching_e_content"||name==="Link_to_the_module_developed"){
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
  // const temp = await -nameonPropose(Symposium)
  // alert(Symposium.faculty_name,Symposium.link)
  // console.log("Symposium :",Symposium)
  // alert("Wait")
  await axios.post(`http://localhost:7541/newrecord`,Symposium)
  // setInformation(temp.message)
}
  return (
    <>
    <div className='overallcontent'>
    <div className='style'>
        <div className='head'><h1 style={{color:'purple'}}>E-CONTENT</h1></div>
      <form className='block' >
        
        <div className='font'>
         
          <div  className='ej' >
            <table>
              <tbody>
            <tr>
              <td>
              <label><b>Name of the Faculty</b></label>
         
            <select name="Name_of_the_faculty" value={Symposium.faculty_name} onChange={infoCollect} className='facultyn' style={{width:'500px',marginBottom:'30px'}}>
              <option>Anandha Kumar</option>
              <option>Barani Keshava</option>
            </select>
            </td>
            </tr>
            {/* <br/> */}
          
         

            <tr>
              <td>
            <label>Name of the Module developed</label>
            <input type='text' name='Name_of_the_Module_Developed' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} className='module' placeholder='Name of the Module Developed' value={Symposium.nameofmoduledeveloped}  onChange={infoCollect}/>
            </td>
            </tr>
            {/* <br/> */}
         

          
            <tr>
              <td>
            <label> Module of Platform</label>
            <input type='text' name='Module_of_platform' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Module of Platform' value={Symposium.platform} onChange={infoCollect}/>
            </td>
            </tr>
            {/* <br/> */}
         
         
          
        
         
          <tr>
            <td>
            <label>Date of Launching Content</label>
            <input type='text' name='Date_of_launching_e_content' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Date of Launching Content' value={Symposium.dateoflaunching} onChange={infoCollect}  />
            </td>
            </tr>
            {/* <br/> */}
          
            <tr>
              <td>
            <label>Link to the Module Developed</label>
            <input type='text' name='Link_to_the_module_developed' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Link to the Module developed' value={Symposium.link} onChange={infoCollect}  />
            </td>
            </tr>
            {/* <br/> */}
            </tbody>
            </table>
          </div>
         <div>
          
          <button type='submit' name='submit' onClick={callPropose} style={{marginTop:'30px',marginLeft:'50px',padding:"10px 5px 10px 5px"}}>SUBMIT </button> 
       
          </div>
        </div>
      </form>
    </div>
    </div>
    </>

  )
}


export default Add