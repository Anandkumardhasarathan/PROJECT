const express= require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql2')

const cors=require('cors')
// const upndel=require('./sympmodify')



const database=mysql.createConnection({
    'host':'localhost',
    'user':'root',
                'password':'7547',
    'port':'3306',
    'database':'mec_report_management'
})

database.connect(()=>{
    console.log('database connected successfully')
})

const server=express()
server.use(cors())

// server.use('/information',upndel)
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())

server.listen(7541,(err)=>{
    console.log('Server is running successfully')
})


server.get('/list',async(req,res)=>{
    const sql="select * from data_setaf_award_at_national_international";
    database.query(sql,(err,result)=>{
        if(err){
            res.status(500).json({'error':err.message})
            return
        }
        if(result.length==0){
            res.status(404).json({'message':'no records are found'})
            return
        }
        res.status(200).json({result})
    })
})


server.post('/newrecord',async(req,res)=>{
    const{s_no,Academin_year,semester,name_of_faculty_awarded,name_of_the_award,category,date_of_award,name_of_awarding_org,attachments,award_certificate}=req.body
    const sql="insert into data_setaf_award_at_national_international values(?,?,?,?,?,?,?,?,?,?)"
    database.query(sql,[s_no,Academin_year,semester,name_of_faculty_awarded,name_of_the_award,category,date_of_award,name_of_awarding_org,attachments,award_certificate],(err,records)=>{
        if(err){
            res.status(500).json({'error':err.message})
            return
        }
        res.status(200).json({'message':'Registered successfully!!!!!!........'})

    })
})
