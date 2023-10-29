// const express=require('express')
// const mysql=require('mysql2')
// const bodyparser=require('body-parser')

// const database=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     port:3306,
//     database:'symposium',
//     password:7547
// })

// database.connect(()=>{
//     console.log("Database has been connected successfully")
// })

// const app=express()
// app.use(bodyparser.urlencoded({extended:true}))
// app.use(bodyparser.json)

// app.listen(7758,(err)=>{
//     console.log("Express connected successfully")
// })


// app.get('/get',async(req,res)=>{
//     const sql="select * from registration"
//     database.query(sql,(err,result)=>{
//         if(err){
//             res.status(500).json({error:err.message})
//             return
//         }
//         if(result.length==0){
//             res.status(404).json({message:"NO records found"})
//             return
//         }
//         res.status(200).json(result)
//     })
// })





const express= require('express')
const bodyparser=require('body-parser')
const mysql=require('mysql2')
// const cors=require('cors')
// const upndel=require('./sympmodify')



const database=mysql.createConnection({
    'host':'localhost',
    'user':'root',
    'password':'7547',
    'port':'3306',
    'database':'symposium'
})

database.connect(()=>{
    console.log('database connected successfully')
})

const server=express()
// server.use(cors())

// server.use('/information',upndel)
server.use(bodyparser.urlencoded({extended:true}))
server.use(bodyparser.json())

server.listen(7541,(err)=>{
    console.log('Server is running successfully')
})


server.get('/list',async(req,res)=>{
    const sql="select * from registration";
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

// server.post('/postdetails',async(req,res)=>{
//     const{Stu_name,College_name,Year,Course,Email_id,Contact,Event_type}=req.body

//     const sql="insert into registration values(?,?,?,?,?,?,?)"
//     database.query(sql,[Stu_name,College_name,Year,Course,Email_id,Contact,Event_type],(error,result)=>{
//         if(error){
//             res.status(500).json({'error':error.message})
//             return
//         }
//         res.status(200).json({'message':'registered successfully!!!!....'})
//     })
// })

server.post('/newrecord',async(req,res)=>{
    const{Stu_name,College_name,Year,Course,Email_id,Contact,Event_type}=req.body
    const sql="insert into registration values(?,?,?,?,?,?,?)"
    database.query(sql,[Stu_name,College_name,Year,Course,Email_id,Contact,Event_type],(err,records)=>{
        if(err){
            res.status(500).json({'error':err.message})
            return
        }
        res.status(200).json({'message':'Registered successfully!!!!!!........'})

    })

})

server.delete('/delete/:key',async(req,res)=>{
    const sql="delete from registration where Stu_name=?"
    database.query(sql,[req.params.key],(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        if(records.affectedRows==0){
            res.status(404).json({message:"No records found"})
            return
        }
        res.status(201).json({mesage:'Deleted Successfully'})
    })
})


server.put('/update/:key',async(req,res)=>{
    const{Event_type}=req.body
    const sql="update registration set Event_type=? where Stu_name=?"
    database.query(sql,[Event_type,req.params.key],(err,records)=>{
        if(err){
            res.status(500).json({error:err.message})
            return
        }
        res.status(200).json({message:'Updated successfully'})
    })
})