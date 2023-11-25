import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Professional_society_membership=()=>{
  
  const [Symposium,setSymposium]=useState({
    academic_year:"",
    semester:"",
    name_of_the_faculty:"",
    membership_id:"",
    date_of_membership:"",
    professional_society_membership:"",
    attachments:"",
    certificate_pdf:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="academic_year"||name==="semester"||name==="name_of_the_faculty"||name==="membership_id"||name==="date_of_membership"||name==="professional_society_membership"||name==="attachments"||name==="certificate_pdf"){
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
        <div className='head'><h1 style={{color:'purple'}}>PROFESSIONAL SOCIETY MEMBERSHIP</h1></div>
         
          <div  className='ej' >
         
            <tr><label><b>Academic Year</b></label>
            <select name="academic_year" onChange={infoCollect} value={Symposium.academic_year}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>2022-23</option>
              <option>2023-24</option>
             
            </select>
            
            </tr>
            <br/>
          
         

            <tr><label><b>Semester</b></label>
            <select name="semester" value={Symposium.semester} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>Odd</option>
              <option>Even</option>
            </select>
            </tr>
            <br/>
         

          
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
                <label>Membership Id</label>
                <input type='text' name='membership_id' placeholder='Membership ID' onChange={infoCollect} value={Symposium.membership_id}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br></br>
            <tr>
            <label>Date of Membership</label>
            <input type='text' name='date_of_membership' placeholder='Date of Membership'onChange={infoCollect} value={Symposium.date_of_membership}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>

            <tr>
                <label>
                    Professional Society Membership
                </label>
              <select name="professional_society_membership" value={Symposium.professional_society_membership} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>IEEE</option>
              <option>ISTE</option>
              <option>IE(I)</option>
              <option>IETE</option>
              <option>CSI</option>
              <option>SAE</option>
            </select>
            </tr>


        <div className='pdf'>
          <tr>
            <label>Attachments :</label>
            <input type='text' name='attachments' placeholder='Attachments' onChange={infoCollect} value={Symposium.attachments}  style={{width:'500px',marginBottom:'30px'}}/>
          </tr>
          <br>
          </br>
               
              
          <tr>
            <label>Certificate Pdf</label>
            <input type='text' name='certificate_pdf' placeholder='Certificate PDF' onChange={infoCollect} value={Symposium.certificate_pdf}  style={{width:'500px',marginBottom:'30px'}}/>
          </tr>
          <br>
          </br>
          </div>
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


export default Professional_society_membership;