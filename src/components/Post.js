import React, { useState } from 'react';
import './Post.css';
import axios from 'axios';
import logo from "../Pics/logo.png";
import camera from '../Pics/camera.png';
import dots from '../Pics/threefdots.png'
import sendbutton from '../Pics/sendb.png';
import heart from '../Pics/heart.png';
import { Link } from 'react-router-dom'

const Post=()=> {
  const [post,setPost]=useState([]);
  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTAyNzEzNjQ5NjI2MDAsImRhdGEiOiI2MjQwODY4Nzc2ZmVlM2YxZGM4ZjA1M2MiLCJpYXQiOjE2NTAyNzEzNjR9.TQs0fRGkxIaMS9CzL0y7UlzwoCVr8DHWenAyP9u8qSk'
  
React.useEffect(()=>{
  axios.get(`https://spa-backend1.herokuapp.com/posts`,
  {
      headers: {
        mode: "cors",
        // Authorization:'Bearer '+token
      }
  }
  ).then((res) => {
    console.log("Axios", res.data.posts);
    setPost(res.data.posts);
  })
},[]);
// React.useEffect(() => {
//   axios.get(`http://localhost:5000/posts`).then((res) => {
//     setPost(res.data.posts);
//     console.log("Axios", res.data.posts);
//   });
// },[]);
// console.log("hello");
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img
            src={logo}
            width="58" alt='logo'
          />
        </div>
        <div className="name">
          <h1>Instaclone</h1>
        </div>
        <div className="camera">
          <Link to='/form'><img
            src={camera}
            alt="camera"
          /></Link>
        </div>
      </nav>

{
post.map((propos,idx)=>{
  return (<>
  <div className="main-info" key={idx} style={{margin:"20px 0"}}>
    <aside></aside>
    <section className="main-container">
      <header>
        <div className="name-loc">
          <h3>{propos.name}</h3>
          <span>{propos.location}</span>
        </div>
        <div className="dots">
          <img
            src={dots}
            alt="threedots"
          />
        </div>
      </header>

      <div className="image-container">
        <img
          src={propos.PostImage}
          alt="post-pic"
        />
      </div>

      <footer>
        <div className="likes-share-date">
          <div className="like-share">
            <img
              src={heart}
              alt="likes"
            />
            <img
              src={sendbutton}
              alt="share"
            />
          </div>
          <div className="date">{propos.date}</div>
        </div>
        <span>{propos.likes} likes</span>
        <h2>{propos.description}</h2>
      </footer>
    </section>
    <aside></aside>

  </div>
  </>
)
})}
      
    </>

  );
}

export default Post;



// json-server --watch api-data/users.json --port 3004
