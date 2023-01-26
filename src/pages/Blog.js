import {React ,useState} from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { DB, auth} from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Blog() {

   const [title,setTitle]=useState("")
   const [body,setBody]=useState("")
   const navigate=useNavigate()


   const blogPostsCollections = collection(DB,"blogposts")
   const createBlog = async ()=>{
      await addDoc(blogPostsCollections, {
        title,
        body, 
        author:{
          name: auth.currentUser.displayName,
          id: auth.currentUser.uid}
        })
        navigate('/')
   }

  return (
    <>
      <div>
         <h1>Write Your Blog</h1>
         <div>
         <label>Title</label>
         <input placeholder='title' onChange={(e)=>{setTitle(e.target.value)}}/>
         </div>
         <div>
         <label>post</label>
         <textarea placeholder='post' onChange={(e)=>{setBody(e.target.value)}}/>
         </div>
         <button onClick={createBlog}>submit</button>
         
      </div>  
    </>
  )
}
