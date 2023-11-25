import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Patent_filled_published_granted=()=>{
  
  const [Symposium,setSymposium]=useState({
    academic_year:"",
    semester:"",
    name_of_the_faculty:"",
    title_of_the_patent:"",
    application_no:"",
    date_of_application:"",
    date_of_published:"",
    attachments:"",
    enclose_first_page_pdf:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="academic_year"||name==="semester"||name==="name_of_the_faculty"||name==="title_of_the_patent"||name==="application_no"||name==="date_of_application"||name==="date_of_published"||name==="attachments"||name==="enclose_first_page_pdf"){
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
        <div className='head'><h1 style={{color:'purple'}}>PATENT FILLED,PUBLISHED,GRANTED</h1></div>
         
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
                <label>Title of the Patent</label>
                <input type='text' name='title_of_the_patent' placeholder='Title of the Patent' onChange={infoCollect} value={Symposium.title_of_the_patent}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br></br>
            <tr>
            <label>Application Number</label>
            <input type='text' name='application_no' placeholder='Application Number'onChange={infoCollect} value={Symposium.application_no}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>

            <tr>
                <label>
                    Date of Application
                </label>
              <input type='text' name='date_of_application' placeholder='Date of Application' value={Symposium.date_of_application} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}} />
            </tr>
            <br/>

            <tr>
                <label>
                    Date of Published
                </label>
              <input type='text' name='date_of_published' placeholder='Date of Published' value={Symposium.date_of_published} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}} />
            </tr>
            <br/>


        <div className='pdf'>
          <tr>
            <label>Attachments :</label>
            <input type='file' name='attachments' placeholder='Attachments' onChange={infoCollect} value={Symposium.attachments}  style={{width:'500px',marginBottom:'30px'}}/>
          </tr>
          <br>
          </br>
               
              
          <tr>
            <label>Enclose First Page PDF</label>
            <input type='file' name='enclose_first_page_pdf' placeholder='Enclose First Page PDF' onChange={infoCollect} value={Symposium.enclose_first_page_pdf}  style={{width:'500px',marginBottom:'30px'}}/>
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


export default Patent_filled_published_granted;