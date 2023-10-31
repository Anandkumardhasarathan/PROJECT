
const express = require('express');
const PDFDocument = require('pdfkit');
const fs = require('fs');

// const pdfDocument=require('node-fpdf')
const app = express();




app.get('/generate-pdf', (req, res) => {
  // Create a new PDF document
  const doc = new PDFDocument();

  // Set the content type to PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename="example.pdf"');

  // Pipe the PDF document to the response
  doc.pipe(res);
  function drawRectangleAndText(doc, x, y, width, height, text) {
      doc.rect(x, y, width, height).stroke();
      doc.text(text, x + 8, y + 25);
    }
  
    //Image 
   
    doc.image('logo.jpg',18,2,{
      fit: [100, 50], 
    });
    doc.image('logo2.jpg',15,63,{
      fit: [85, 30], 
    });
    doc.fontSize(19);
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',120,25);
    doc.fontSize(10);
    doc.text('(An Autonomous Institution)',250,48)
      doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',123,63)
      doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',200,78)
    doc.image("logo3.jpg",500,3,{
      fit: [100, 50], 
    });
    doc.image("logo4.jpg",520,60,{
      fit: [100, 50], 
    });
    doc.fontSize(18);
    doc.text("Department of Computer Science and Engineering",100,100)

    doc.fontSize(14);
    doc.text("Cloud",110,150)
    doc.text("Date  :2023-09-12",100,190)
    doc.text("Venue   :Seminar Hall I",350,190)
    doc.text("Time  :10:00 AM to 4:30 PM",100,220)
    doc.text("PROGRAM SCHEDULE",250,250)
 
  // End the PDF document
  //Create the new pdf 

  //2nd page in pdf

  doc.addPage()
    doc.image('logo.jpg',40,17,{
        fit: [125, 75], 
      });
      doc.image('logo2.jpg',520,33,{
        fit: [130, 45], 
      });
      doc.fontSize(19);
      doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',120,25);
      doc.fontSize(10);
      doc.text('(An Autonomous Institution)',250,48)
        doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',123,63)
        doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',200,78)

    //   drawRectangleAndText(doc, 55, 110, 50, 30, 'CSE');
      drawRectangleAndText(doc, 60, 110, 50, 30, '');
    doc.text("CSE",75,120)
      drawRectangleAndText(doc, 130, 110,350, 30, '');
    doc.text("Cloud",275,120)
      drawRectangleAndText(doc, 500, 110, 80, 30, '');
    doc.text("2023-24",500,120)

      doc.fontSize(14)
      doc.text("Event Photos",250,200)
      doc.text("Date  :2023-09-12",40,240)

      drawRectangleAndText(doc, 40, 260,270, 260, '');
      drawRectangleAndText(doc, 310, 260,270, 260, '');


    //   doc.image("logo3.jpg",500,3,{
    //     fit: [100, 50], 
    //   });
    //   doc.image("logo4.jpg",520,60,{
    //     fit: [100, 50]
    // })

//3rd page in pdf

doc.addPage()
doc.image('logo.jpg',40,17,{
      fit: [125, 75], 
    });
    doc.image('logo2.jpg',520,33,{
      fit: [130, 45], 
    });
    doc.fontSize(19);
    doc.text('MUTHAYAMMAL ENGINEERING COLLEGE',120,25);
    doc.fontSize(10);
    doc.text('(An Autonomous Institution)',250,48)
      doc.text('(Approved by AICTE, New Delhi, Accredited by NAAC & Affiliated to Anna University)',123,63)
      doc.text('Rasipuram - 637 408, Namakkal Dist., Tamil Nadu',200,78)


  doc.fontSize(14);
  doc.text("Budget Utilized",250,135);
  doc.fontSize(13);
  doc.text("Date of the Event: 2023-09-12",90,175)  
  doc.text("To the Management through Principal",45,205)
  doc.text("Cloud",280,245)
  doc.text("Total Participant: 66",45,285)

  //table
  drawRectangleAndText(doc, 50, 325, 60, 45, '');
  doc.text("S.No",65,345)
  drawRectangleAndText(doc, 110, 325,350, 45, '');
  doc.text("Details",270,345)
  drawRectangleAndText(doc, 460, 325, 80, 45, '');
  doc.text("Cost (in Rs)",470,345)

  drawRectangleAndText(doc, 50, 370, 60, 45, '');
  doc.text("1.",75,390)
  drawRectangleAndText(doc, 110, 370,350, 45, '');
  doc.text("Chief Guest Registration",120,390)
  drawRectangleAndText(doc, 460, 370, 80, 45, '1000');

  drawRectangleAndText(doc, 50, 415, 60, 45, '');
  drawRectangleAndText(doc, 110, 415,350, 45, 'Total');
  drawRectangleAndText(doc, 460, 415, 80, 45, '1000');

  drawRectangleAndText(doc, 50, 460,490, 45, '');
  doc.text("In Words:",70,478)

  doc.text("Event Coordinator(s)",50,700)
  doc.text("HOD",275,700)
  doc.text("Principal",480,700)
 

  //4th page in pdf


doc.addPage()

//table

drawRectangleAndText(doc, 40,50,270, 20, '');
doc.text("Nature of the Event Workshop",45,55);
drawRectangleAndText(doc, 310, 50,270, 20, '');
doc.text("Workshop",315,55)

drawRectangleAndText(doc, 40,70,270, 20, '');
doc.text("Title of the Event",45,75);
drawRectangleAndText(doc, 310, 70,270, 20, '');
doc.text("Cloud",315,75)

drawRectangleAndText(doc, 40,90,270, 20, '');
doc.text("Organized by",45,95);
drawRectangleAndText(doc, 310, 90,270, 20, '');
doc.text("CSE",315,95)

drawRectangleAndText(doc, 40,110,270, 20, '');
doc.text("Collaborating/Sponsoring Agency",45,115);
drawRectangleAndText(doc, 310, 110,270, 20, '');
doc.text("IEI & Management  ",315,115)

drawRectangleAndText(doc, 40,130,270, 20, '');
doc.text("Date of the Event",45,135);
drawRectangleAndText(doc, 310, 130,270, 20, '');
doc.text("2023-09-12",315,135)

drawRectangleAndText(doc, 40,150,270, 20, '');
doc.text("Venue",45,155);
drawRectangleAndText(doc, 310, 150,270, 20, '');
doc.text("Seminar Hall I",315,155)

drawRectangleAndText(doc, 40, 170,270, 140, '');
doc.text("Details of the Guest",45,220)

drawRectangleAndText(doc, 310, 170,110, 20, '');
doc.text("Name",315,175)
drawRectangleAndText(doc, 420, 170,160, 20, '');
doc.text("Vijayaprakash.M",425,175)

drawRectangleAndText(doc, 310, 190,110, 20, '');
doc.text("Designation",315,195)
drawRectangleAndText(doc, 420, 190,160, 20, '');
doc.text("Student",425,195)

drawRectangleAndText(doc, 310, 210,110, 40, '');
doc.text("Address",315,225)
drawRectangleAndText(doc, 420, 210,160, 40, '');
doc.text("5/75 seeliampatty po seeliampatty",425,215)

drawRectangleAndText(doc, 310, 250,110, 20, '');
doc.text("Contact No",315,255)
drawRectangleAndText(doc, 420, 250,160, 20, '');
doc.text("09597996275",425,255)

drawRectangleAndText(doc, 310, 270,110, 40, '');
doc.text("Mail Id",315,275)
drawRectangleAndText(doc, 420, 270,160, 40, '');
doc.text("vijayaprakash885@gmail.com",425,275)

drawRectangleAndText(doc, 310, 310,110, 20, '');
doc.text("MEC Students",315,315)
drawRectangleAndText(doc, 420, 310,160, 20, '');
doc.text("66",425,315)

drawRectangleAndText(doc, 310, 330,110, 20, '');
doc.text("MEC Faculty",315,335)
drawRectangleAndText(doc, 420, 330,160, 20, '');
doc.text("2",425,335)

drawRectangleAndText(doc, 310, 350,110, 20, '');
doc.text("Others",315,355)
drawRectangleAndText(doc, 420, 350,160, 20, '');
doc.text("-",425,355)

drawRectangleAndText(doc, 40, 310,270, 60, '');
doc.text("Members participated in the event",45,335)

drawRectangleAndText(doc, 40,370,270, 20, '');
doc.text("Budget Utilized",45,375);
drawRectangleAndText(doc, 310, 370,270, 20, '');
doc.text("1000",315,375)

drawRectangleAndText(doc, 40,390,540,20, '');
doc.text("About the event with Photograph",45,395)

drawRectangleAndText(doc, 40, 410,300, 260, '');
drawRectangleAndText(doc, 340, 410,240, 260, '');
doc.text("Artificial Intelligence is Blooming now",45,525)

  doc.end();



  // Close the response stream
  res.on('finish', () => {
    console.log('PDF generated and sent');
  });
});  

app.listen(2004,()=>{
  console.log("Pdf is generated...")
})


