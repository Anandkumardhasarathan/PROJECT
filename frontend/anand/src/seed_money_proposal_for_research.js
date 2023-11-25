import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Seed_money_proposal_for_research=()=>{
  
  const [Symposium,setSymposium]=useState({
    academic_year:"",
    semester:"",
    name_of_the_faculty:"",
    title_of_the_research_project:"",
    amount_of_seed_money:"",
    year_of_receiving:"",
    attachments:"",
    metrf_sanction_letter_pdf:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="academic_year"||name==="semester"||name==="name_of_the_faculty"||name==="title_of_the_research_project"||name==="amount_of_seed_money"||name==="year_of_receiving"||name==="attachments"||name==="metrf_sanction_letter_pdf"){
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
        <div className='head'><h1 style={{color:'purple'}}>SEED MONEY PROPOSAL FOR RESEARCH</h1></div>
         
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
                <label>Title of the Research Project</label>
                <input type='text' name='title_of_the_research_project' placeholder='Title of the Researcj Project' onChange={infoCollect} value={Symposium.title_of_the_research_project}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br></br>

            <tr>
            <label>Amount of Seed Money</label>
            <input type='text' name='amount_of_seed_money' placeholder='Amount of Seed Money'onChange={infoCollect} value={Symposium.amount_of_seed_money}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>

            <tr>
                <label>
                    Year of Receiving
                </label>
              <input type='text' name='year_of_receiving' placeholder='YYYY' value={Symposium.year_of_receiving} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}} />
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
            <label>METRF Sanction Letter PDF</label>
            <input type='file' name='metrf_sanction_letter_pdf' placeholder='METRF Sanction Letter PDF' onChange={infoCollect} value={Symposium.metrf_sanction_letter_pdf}  style={{width:'500px',marginBottom:'30px'}}/>
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


export default Seed_money_proposal_for_research;