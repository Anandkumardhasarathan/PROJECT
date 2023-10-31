import './App.css'

const Head=()=>{
  return(
   <div>
      <div>
        <h1 style={{marginBottom: 0, marginLeft: 235}}><img alt="logo" src="image/mec.png" width="90px" style={{marginLeft: 10}} /></h1>
        <h1 align="center" style={{color: 'blue', marginTop: '-95px', marginBottom: 0}}>MUTHAYAMMAL ENGINEERING COLLEGE</h1>
        <h3 align="center" style={{marginBottom: 0, marginTop: 0}}>(An Atonomous Institution)</h3>
        <h3 align="center" style={{marginTop: 0, marginBottom: 50}}>(Approved by AICTE, Acceredited by NAAC,NBA &amp; Affilated by Anna University)</h3>
        <div>
         <hr style={{marginTop: 0}} color="black" width="1340px" />
         <h2 align="center" style={{marginLeft: '-70px'}}><b>WELCOME TO MUTHAYAMMAL ENGINEERING COLLEGE</b></h2>
</div>

      </div>
    </div>
  )
}

export const Backg=()=>{
  return(
    <div className="bgimage">
          
    </div>
  )
}

export const Video=()=>{
return(
  <video src="image/Muthayammal Engineering Institutions - Campus Tour.mp4" style={{margin: 300, marginTop: 0, marginBottom: 0}} width="50%" controls autoPlay muted />

)
}


export const Form=()=>{
return(
  <div>
<h2 align="center" style={{marginLeft: '-70px'}}><b>SYMPIOSIUM REGISTRATION FORM</b></h2>
<div align="center" style={{color: 'blue', marginLeft: '-70px'}}> 
  <form method="post">
    <table cellPadding="15px">
      <thead>
        <tr>
          <td><label>Student Name</label></td>
          <td>
            <input type="text" name="fullname" placeholder="Candidate Name" required />
          </td>
        </tr>
        <tr>
          <td><label>College Name</label></td>
          <td>
            <input type="text" name="college name" placeholder="Candidate College" required />
          </td>
        </tr>
        <tr>
          <td><label>Year</label></td>
          <td>
            <input type="radio" name="year" defaultValue="I" />I
            <input type="radio" name="year" defaultValue="II" />II
            <input type="radio" name="year" defaultValue="III" />III
            <input type="radio" name="year" defaultValue="IV" />IV
          </td>
        </tr>
        <tr>
          <td><label>Course</label></td>
          <td>
            <select name="course">
              <option>Select Course</option>
              <option>CSE</option>
              <option>CS</option>
              <option>ECE</option>
              <option>AIDS</option>
              <option>AIML</option>
              <option>MECH</option>
              <option>IT</option>
              <option>CIVIL</option>
              <option>BIOTECH</option>
              <option>BIOMED</option>
            </select>
          </td>
        </tr>
        <tr>
          <td><label>Email Id</label></td>
          <td>
            <input type="email" name="mail" placeholder="Email Id" />
          </td>
        </tr>
        <tr>
          <td><label>Contact</label></td>
          <td>
            <input type="tel" name="Contact" placeholder="Mobile Number" />
          </td>
        </tr>
        <tr>
          <td><label>Event type</label></td>
          <td>
            <select name="Technical events">
              <option>Technical Event</option>
              <option>Hack-xtopia</option>
              <option>Slide fest</option>
              <option>Datacon</option>
              <option>Coding Battle</option>
              <option>AI Escape Room</option>
            </select>
          </td>
        </tr>
        <tr>
          <td />
          <td>
            <select name="Non technical event">
              <option>Non Technival Event</option>
              <option>Codexcite</option>
              <option>Just a minute</option>
              <option>Trade fete</option>
              <option>Flashit</option>
              <option>Cine Showdown</option>
              <option>IPL auction</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" defaultValue="Submit Form" />
          </td>
          <td>
            <input type="reset" defaultValue="Cancel" />
          </td>
        </tr>
      </thead>
    </table>
  </form> 
  <br />
  <br />
</div>
</div>

)
}


export const Eventdetails=()=>{
return(
  <div>
<hr color="black" width="100%" />
<h3 style={{marginBottom: 0, color: 'red'}}><b>REGISTRATION FEE DETAILS:</b></h3>
<p style={{marginTop: 0, marginBottom: 0}}><b>Event Fee:200/-</b></p>
<p style={{marginTop: 0, marginBottom: 0}}><b>On Spot Registration and Online Registration<br />available.</b></p>
<p><u><b>Certificate Will be provided for all participants.</b></u></p>
<h3 style={{marginLeft: 550, marginTop: '-130px', color: 'red'}}><b>CONTACT US</b></h3>
<p style={{marginLeft: 485}}><b>Faculty - Mr.B.Karthi : +91 9443586892 <br />
    Secretary - D.Ananddha kumar : +91 9887667889 <br />
    Organizer - Barani Keshava S : +91 9766544567 <br />
    Mail-id : mec.autonomous@gmail.com </b>
</p>
<h3 style={{marginLeft: 1000, marginTop: '-130px', color: 'red'}}><b>STUDENT COORDINATORS</b></h3>
<p style={{marginLeft: 1000}}><b>Mr.P.Kalai Priyan    - +91 79946 38687 <br />
    Mr.S.Bharathi        - +91 98765 56787 <br />
    Mr.S.Barani Keshava  - +91 86545 76789 <br />
    Mr.R.Rahul           - +91 99445 66899</b>
</p>
{/* <marquee behavior="alternate" direction="right" style={{color: 'brown'}}><i><b>mec.symposium</b></i></marquee> */}
</div>

)
}


export default Head


