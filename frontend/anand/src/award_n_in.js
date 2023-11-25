import React, { useState} from 'react';
import axios from "axios"
import "./mec.css"
// import {useNavigate} from 'react';

 export const Award=()=>{
  // const[information,setInformation]=useState("")

  const[Symposium,setSymposium]=useState({
    "Academin_year":"",
    "semester":"",
    "name_of_faculty_awarded":"",
    "name_of_the_award":"",
    "category":"",
    "date_of_award":"",
    "name_of_awarding_org":""
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
      if(name==="Academin_year"||name==="semester"||name==="name_of_faculty_awarded"||name==="name_of_the_award"||name==="category"||name==="date_of_award"||name==="name_of_awarding_org"||name==="attachments"||name==="award_certificate"){
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
        <div className='head'><h1 style={{color:'purple'}}>AWARD AT NATIONAL AND INTERNATIONAL LEVEL</h1></div>
      <form className='block' >
        
        <div className='font'>
         
          <div  className='ej' >
            <table>
              <tbody>

              <tr><td>  
              <label><b>Academic Year</b></label>
              <select name="Academin_year" placeholder='Accademic Year' value={Symposium.Academin_year} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>--</option>
              <option>2022-23</option>
              <option>2023-24</option>
              </select>
              </td>
              </tr>
                
              <tr><td>  
              <label><b>Semester</b></label>
              <select name="semester" placeholder='Accademic Year' value={Symposium.semester} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
               <option>ODD</option>
               <option>EVEN</option>
              </select>
              </td>
              </tr>
            

            <tr>
              <td>
              <label><b>Name of the Faculty  Awarded National/ <br></br> International Fellowship</b></label>
         
            <select name="name_of_faculty_awarded" value={Symposium.name_of_faculty_awarded} onChange={infoCollect} className='facultyn' style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>Anandha Kumar</option>
              <option>Barani Keshava</option>
            </select>
            </td>
            </tr>
            {/* <br/> */}
          
         

            <tr>
              <td>
            <label><b>Name of the Award/Fellowship</b></label>
            <input type='text' name='name_of_the_award' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Name of the Award ' value={Symposium.name_of_the_award}  onChange={infoCollect}/>
            </td>
            </tr>
            {/* <br/> */}
         
            <tr><td>  
              <label><b>Category</b></label>
              <select name="category" placeholder='Category' value={Symposium.category} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
               <option>National</option>
               <option>International</option>
              </select>
              </td>
              </tr>
            
          
            <tr>
              <td>
            <label> <b>Date of Award</b></label>
            <input type='text' name='date_of_award' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Date of award' value={Symposium.date_of_award} onChange={infoCollect}/>
            </td>
            </tr>
            {/* <br/> */}
         
         
            <tr>
            <td>
            <label><b>Name of the Awarding Organization</b></label>
            <input type='text' name='name_of_awarding_org' style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}} placeholder='Name of Awarding Organization' value={Symposium.name_of_awarding_org}  onChange={infoCollect}/>
            </td>
            </tr>
        
         
            {/* <tr>
              <td>
                <label>Attachments</label>
                <input type='file' name='attachments' value={Symposium.attachments} onChange={infoCollect} style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}}/>
              </td>
            </tr>

            <tr>
              <td>
                <label>Award Certificate</label>
                <input type='file' name='award_certificate' value={Symposium.award_certificate} onChange={infoCollect} style={{width:'490px',marginBottom:'30px',padding: "10px 5px 10px 5px"}}/>
              </td>
            </tr> */}

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


export default Award