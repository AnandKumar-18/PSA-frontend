import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Form.css"

    const Form = () => {
    const Navigate = useNavigate()  
    const [user,setUser] = useState({  
        PostImage:"",name:"",location:"",description:""   
    })

    let name,value
    const enterInput = (e)=>{   
        console.log(e)
        name = e.target.name
        value = e.target.value
        setUser({...user,[name]:value})

    }
    console.log(user)
//   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTAyNzEzNjQ5NjI2MDAsImRhdGEiOiI2MjQwODY4Nzc2ZmVlM2YxZGM4ZjA1M2MiLCJpYXQiOjE2NTAyNzEzNjR9.TQs0fRGkxIaMS9CzL0y7UlzwoCVr8DHWenAyP9u8qSk'

    const PostData = async(e)=>{
        e.preventDefault()
        const {PostImage,name,location,description} = user
        console.log(user)
        const res = await fetch("https://spa-backend1.herokuapp.com/posts",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                // Authorization:'Bearer '+token,
                mode: "cors"
                        },
            body:JSON.stringify({
                PostImage,name,location,description
            })
        })
        
        const data = await res.json()
        console.log(data)
        if(data.status === "Post created"){
            window.alert("Data Posted")
            Navigate('/post')
        }else{
            window.alert("Invalid")
        }
    }
  return (
    <>
    <div className="maincantainer-form">

        <form method='POST' >
            <input size="35" type="text" name='PostImage' value={user.PostImage} onChange={enterInput}  placeholder='Share Your Link'/><br />
            <input size="35" type="text" name='name' value={user.name} onChange={enterInput}  placeholder='Author'/><br />
            <input size="35" type="text" name='location' value={user.location} onChange={enterInput}  placeholder='Location'/><br />
            <input size="35" type="text" name='description' value={user.description} onChange={enterInput}  placeholder='Description'/><br />
            <input size="35" type="submit" id='submit' onClick={PostData}/>
        </form>
    </div>
    </>
  )
}

export default Form