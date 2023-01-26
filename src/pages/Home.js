import { getDocs ,collection} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { DB } from '../firebase'

export default function Home() {

  const [postList,setPostList]=useState([])
  const blogPostsCollections = collection(DB,"blogposts")
  
  useEffect(() => { 
    const getPosts = async()=>{
      const data = await getDocs(blogPostsCollections)
      setPostList(data.docs.map((post,index)=>({
        ...post.data(),
        id: post.id
      })))
    }
    getPosts()
  })

  return (
    <>
      {postList.map((post,index)=>{
         return (
          <div>
             <div>{post.title}</div>
             <div>{post.body}</div>
             <div>@{post.author.name}</div>
          </div>
         )
      })}
    </>
  )
}
