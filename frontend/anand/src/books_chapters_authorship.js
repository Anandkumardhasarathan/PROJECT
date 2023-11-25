import React, {useState} from 'react';
import axios from "axios"
import "./mec.css"

 export const Books_chapters_authorship=()=>{
  
  const [Symposium,setSymposium]=useState({
    academic_year:"",
    semester:"",
    faculty_name:"",
    name_of_the_authors:"",
    title_of_the_book:"",
    month_of_publication:"",
    year_of_publication:"",
    isbn_number:"",
    details_of_the_publisher:"",
    national_or_international:"",
    attachments:"",
    enclose_proof_pdf:""
    })


    console.log(Symposium)
    
    const infoCollect=(eve)=>{
      const{name,value}=eve.target
      setSymposium((old)=>{
          if(name==="academic_year"||name==="semester"||name==="faculty_name"||name==="name_of_the_authors"||name==="title_of_the_book"||name==="month_of_publication"||name==="year_of_publication"||name==="isbn_number"||name==="details_of_the_publisher"||name==="national_or_international"||name==="attachments"||name==="enclose_proof_pdf"){
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
        <div className='head'><h1 style={{color:'purple'}}>BOOKS,CHAPTERS AUTHORSHIP</h1></div>
         
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
         

          
            <tr><label><b>Faculty Name</b></label>
            <select name="faculty_name" value={Symposium.faculty_name} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>Baranikeshava</option>
              <option>Anand</option>
              <option>Bharathi</option>
            </select>
            </tr>
            <br/>

            <tr>
                <label>
                    Name of the Authors
                </label>
                <input type='text' name='name_of_the_authors' placeholder='Name of the Authors' value={Symposium.name_of_the_authors} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>



            <tr>
                <label>Title of the Book</label>
                <input type='text' name='title_of_the_book' placeholder='Title of the Book' onChange={infoCollect} value={Symposium.title_of_the_book}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br></br>


            <tr><label><b>Month of Publication</b></label>
            <select name="month_of_publication" value={Symposium.month_of_publication} onChange={infoCollect}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>April</option>
              <option>May</option>
              <option>June</option>
              <option>July</option>
              <option>August</option>
              <option>September</option>
              <option>October</option>
              <option>November</option>
              <option>December</option>
            </select>
            </tr>
            <br/>


            <tr>
            <label>Year of Publication</label>
            <input type='text' name='year_of_publication' placeholder='YYYY'onChange={infoCollect} value={Symposium.year_of_publication}  style={{width:'500px',marginBottom:'30px'}}/>
            </tr>
            <br/>

            <tr>
                <label>
                    ISBN Number
                </label>
              <input type='text' name='isbn_number' placeholder='ISBN Number' value={Symposium.isbn_number} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}} />
            </tr>
            <br/>

            <tr>
                <label>
                    Details of the Publisher
                </label>
              <input type='text' name='details_of_the_publisher' placeholder='Date of Published' value={Symposium.date_of_published} onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}} />
            </tr>
            <br/>

            <tr><label><b>National/International</b></label>
            <select name="national_or_international" onChange={infoCollect} value={Symposium.national_or_international}  style={{width:'500px',marginBottom:'30px'}}>
              <option>--</option>
              <option>National</option>
              <option>International</option>
            </select>
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


export default Books_chapters_authorship;