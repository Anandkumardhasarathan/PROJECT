// const onProposalsLoad=async(dept_id)=>{
    


  
//     // alert(dept_id)
//     const returned=await axios.get(`${url}/seminar/find/${dept_id}`)
//     let ids=[]
//         returned.data.rows.map((v)=>{
//             ids.push(v)
//         })
//         return ids
// }
const onPropose=async(obj)=>{

    const url="http://localhost:7541"

    // alert(JSON.stringify(obj))
    const returned = await axios.post(`${url}/newrecord${obj.event_name}`,obj)
    return returned.data
}

export default onPropose