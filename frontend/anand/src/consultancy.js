import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Consultancy=()=>{
  
  const [Symposium,setSymposium]=useState({
    academic_year:"",
    semester:"",
    name_of_faculty:"",
    name_of_consultancy_project:"",
    sponsoring_agency_details:"",
    date:"",
    Revenue_generated:"",
    number_of_trainies:"",
    attachments:"",
    proof_pdf:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="academic_year"||name==="semester"||name==="name_of_faculty"||name==="name_of_consultancy_project"||name==="sponsoring_agency_details"||name==="date"||name==="Revenue_generated"||name==="number_of_trainies"||name==="attachments"||name==="proof_pdf"){
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
        <div className='head'><h1 style={{color:'purple'}}>CONSULTANCY AND CORPORATE TRAINING DONE FOR REVENUE GENERATION</h1></div>
         
          <div  className='ej' >
         
            <tr><label><b>Academic Year</b></label>
            <select name="academic_year" onChange={infoCollect} value={Symposium.academic_year}  style={{width:'500px',marginBottom:'30px'}}>
              <option>2022-23</option>
              <option>2023-24</option>
             
            </select>
            
            </tr>
            <br/>
          
         

            <tr><label><b>Semester</b></label>
            <select name="semester" value={Symposium.semester} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>Odd</option>
              <option>Even</option>
            </select>
            </tr>
            <br/>
         

          
            <tr><label><b>Name of the Faculty</b></label>
            <select name="nameoffaculty" value={Symposium.name_of_faculty} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>Baranikeshava</option>
              <option>Anand</option>
              <option>Bharathi</option>
            </select>
            </tr>
            <br/>
         

            <tr>
            <label><b>Name of Consultancy Project/Corporate Training Program</b></label>
           <div className='fellowship'>
            <input type='text' className='award' name='name_of_consultancy_project' placeholder='Name of consultancy Project/Corporate Training Program'onChange={infoCollect} value={Symposium.name_of_consultancy_project}  style={{width:'500px',marginBottom:'30px'}} />
            </div>
            </tr>
            <br></br>

     
            <tr>
            <label><b>Consulting/Sponsoring Agency with Contact Details</b></label>
           <div className='fellowship'>
            <input type='text' className='award' name='sponsoring_agency_details' placeholder='Consulting/Sponsoring Agency with Contact Details'onChange={infoCollect} value={Symposium.sponsoring_agency_details}  style={{width:'500px',marginBottom:'30px'}}/>
            </div>
            </tr>
            <br></br>
          
            <tr>
            <label>Date</label>
            <input type='date' name='date' placeholder='Date'onChange={infoCollect} value={Symposium.date}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>


            <tr>
                <label>Revenue Generated (in Lakhs)</label>
                <div className='awardorg'>
                <input type='text' name='Revenue_generated' placeholder='Revenue Generated (in Lakhs)' value={Symposium.Revenue_generated} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}/>
               
                </div>
            </tr>
            <br></br>


            <tr>
                <label>Number of Trainees/Beneficiaries</label>
                <div className='awardorg'>
                <input type='text' name='number_of_trainies' placeholder='Revenue Generated (in Lakhs)' value={Symposium.number_of_trainies} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}/>
               
                </div>
            </tr>
            <br></br>
        <div className='pdf'>
          <tr>
            <label>Attachments :</label>
            <input type='text' name='attachments' placeholder='Attachments' onChange={infoCollect} value={Symposium.attachments}  style={{width:'500px',marginBottom:'30px'}}/>
          </tr>
          <br>
          </br>
               
              
          <tr>
            <label>Enclose Proof Pdf</label>
            <input type='text' name='proof_pdf' placeholder='proof' onChange={infoCollect} value={Symposium.proof_pdf}  style={{width:'500px',marginBottom:'30px'}}/>
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


export default Consultancy;