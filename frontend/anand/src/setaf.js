import React,{useState} from "react";
import "./mec.css"
import { Econtent } from "./mec.js";
import Award from "./award_n_in.js";
import Consultancy from "./consultancy";
import Professional_society_membership from "./professional_society_membership";
import Visit_to_the_library from "./visit_to_library";
import Patent_filled_published_granted from "./patent_filled_published_granted";
import Books_chapters_authorship from "./books_chapters_authorship";
import Seed_money_proposal_for_research from "./seed_money_proposal_for_research";

 export const Setaf=()=>{

  const [setafsubtype, setsetafsubtype]=useState({
    "Subtype":""
  })

  const infoCollect=(eve)=>{
    const{name,value}=eve.target
    setsetafsubtype((old)=>{
      if(name==="Subtype" && value==="econtent"||name==="Subtype" && value==="award"||name==="Subtype" && value==="consultancy"||name==="Subtype" && value==="professional_society"||name==="Subtype" && value==="visit_to_the_library"||name==="Subtype" && value==="patent_filled_published_granted"||name==="Subtype" && value==="books_chapters_authorship"||name==="Subtype" && value==="seed_money_proposal_for_research"){
      return{
        ...old,
        [name]:eve.target.value
    }
  }
    })
  }

  const Condition=()=>{
    if(setafsubtype.Subtype==="econtent"  ){
      return<Econtent/>
    }
    else if(setafsubtype.Subtype==="award" ){
      return<Award/>
    }
    else if(setafsubtype.Subtype==="consultancy"){
      return<Consultancy/>
    }
    else if(setafsubtype.Subtype==="professional_society"){
      return<Professional_society_membership/>
    }
    else if(setafsubtype.Subtype==="visit_to_the_library"){
      return<Visit_to_the_library/>
    }
    else if(setafsubtype.Subtype==="patent_filled_published_granted"){
      return<Patent_filled_published_granted/>
    }
    else if(setafsubtype.Subtype==="books_chapters_authorship"){
      return<Books_chapters_authorship/>
    }
    else if(setafsubtype.Subtype==="seed_money_proposal_for_research"){
      return<Seed_money_proposal_for_research/>
    }
  }

  console.log(setafsubtype)



  return (
    <>
    <div className='overallcontent'>
    <div className='style'>
      <form className='block' >
        <div className='font'>
        <div className='head'><h1 style={{color:'purple'}}>EVENT PROPOSAL</h1></div>
         
          <div  className='ej' >
         
            <tr><label><b>Sub type</b></label>
            <select name="Subtype" onChange={infoCollect} style={{width:'500px',marginBottom:'30px'}}>
              <option>Select sub type...</option>
              <option  value="econtent" >e-Content</option>
              <option  value="award" >Award at National and International Level</option>
              <option  value="consultancy">Consultancy and Corporate Training done for Revenue Generation</option>  
              <option  value="professional_society">Professional Society Membership</option> 
              <option  value="visit_to_the_library">Visit to the Library</option>
              <option  value="patent_filled_published_granted">Patent Filled,Published,Granted</option>
              <option  value="books_chapters_authorship">Books Chapters Authorship</option>
              <option  value="seed_money_proposal_for_research">Seed Money Proposal for Research</option> 
            </select> 
            </tr>
            <Condition/>
        </div>
        </div>
      </form>
    </div>
    </div>
    </>

  )
}


export default Setaf;