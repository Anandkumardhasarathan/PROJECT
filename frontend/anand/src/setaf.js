import React,{useState} from "react";
import "./mec.css"
import { Econtent } from "./mec.js";
import Award from "./award_n_in.js";

 export const Setaf=()=>{

  const [setafsubtype, setsetafsubtype]=useState({
    "Subtype":""
  })

  const infoCollect=(eve)=>{
    const{name,value}=eve.target
    setsetafsubtype((old)=>{
      if(name==="Subtype" && value==="econtent"||name==="Subtype" && value==="award"){
      return{
        ...old,
        [name]:eve.target.name
    }
  }
    })
  }

  const Condition=()=>{
    if(setafsubtype.Subtype==="Subtype"  ){
      return<Econtent/>
    }
    else if(setafsubtype.Subtype==="Subtype" ){
      return<Award/>
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
              <option name="econtent" value={"econtent"} onChange={infoCollect}>e-Content</option>
              <option name="an" value={"award"} onChange={infoCollect}>Award at National and International Level</option>
              <option name="consultancy" value="consultancy" onChange={infoCollect}>16.Consultancy and Corporate Training done for Revenue Generation</option>   
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