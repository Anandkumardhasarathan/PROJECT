import './symp.css'
import { useState } from 'react'
import onPropose from './fnbconnect'


const New=()=>{
    return(

      

<>
<div className="background"/>
<div className="College_name">
    <h1 style={{color: 'blue', marginBottom: 0}} align="center" className="head1">MUTHAYAMMAL ENGINEERING COLLEGE</h1>
    <h3 align="center" className="head2" style={{marginTop: 0, marginBottom: 0}}>(An Atonomous Institution)</h3>
    <h3 align="center" className="head3">Approved by AICTE Acceredited by NAAC,Nba &amp; Affilated By Anna University</h3>
    <hr />
  </div>

  <div className='bgstyle'>
  <div className="symp_head" align="center">
    <h2>SYMPOSIUM REGISTRATION FORM</h2>
  </div>



<div classname="Symp_data" align="center">
    <form method="post">
      <label><b>COMPUTER SCIENCE DEPARTMENT<br/></b></label><table cellPadding="10px" cellSpacing="px">
        <br/>
        <br/>
        <tbody><tr>
            <td>
              <label><b>NAME</b></label>
            </td><td><input type="text" name="name" placeholder="Full Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>COLLEGE NAME</b></label>
            </td><td>  <input type="text" name="college name" placeholder="College Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>YEAR</b></label>
              </td><td>  <input type="text" name="Year" placeholder="Year" /></td>
          </tr>
          <tr>
            <td>
                <label><b>DEPARTMENT</b></label>
            </td><td><input type="text" name="department" placeholder="Department Name" /></td>
          </tr>
          <tr>
            <td>
              <label><b>EMAIL ID</b></label>
            </td><td><input type="email" placeholder="Email ID" /></td>
          </tr>
          <tr>
          </tr><tr>
            <td>
              <label><b>CONTACT</b></label>
            </td><td> <input type="tel" name="mobile number" placeholder="Mobile Number" /></td>
          </tr>
          </tbody></table>
    </form>
    <form>
        <table cellPadding="10px" cellSpacing="px">
            <tbody>
          <tr>
            <td>
              <label><b>TECHNICAL EVENT:</b></label>
            </td>
          </tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />PAPER PRESENTATION</td></tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />PROJECT PRESENTATION</td></tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />CODIGO</td></tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />QUIZ</td></tr>
          <tr>
            <td>
              <label><b>NON TECHNICAL EVENT</b></label>
            </td>
          </tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />IPL AUCTION</td></tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />DIALOGUE FINDING</td></tr>
          <tr><td><input type="radio" name="event" defaultvalue="Paper Presentation" />SHERLOCK HOLMES</td></tr>
         <br></br>
            <tr><td><button style={{align:'center',marginBlockStart:'10px',marginInlineStart:'50px'}}>Submit</button></td></tr>

          </tbody>
          </table>
   </form>
  </div> 
  </div>
</>
    )
}

export default New