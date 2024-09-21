import { useEffect, useState } from "react";
import Post from "./post";
import { AddPost } from "./addpost";

export default function Posts (){
    const [posts,setPosts]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const response= await fetch("https://jsonplaceholder.typicode.com/posts")
            const data= await response.json();
        
        
            console.log(data);
            setPosts(data);
        }
        fetchData();

        },[]);
        const handleSubmit=async (postData)=>{
            const response= await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:'POST',
            body:JSON.stringify(postData),
            headers:{
                'content-type':'application/json; charset=UTF-8',
            },
            });
            const data=await response.json();
            console.log(data);
   
        };
    
    return(
        <div>
            <h1>
                todays posts
            </h1>
            <div>
                <AddPost onSubmit={handleSubmit}/>
                
            </div>
            <div>
                {
                    posts.map((post, index)=>{
                        return(
                            <Post
                            post={post}
                            key={index}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}