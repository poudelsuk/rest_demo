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

            const handleDelete=async(id)=>{
                const response=await fetch('https://jsonplaceholder.typicode.com/posts/${ id } ',{
                    method:'DELETE',
                });
                const data =await response.json();
                console.log(data);
            
        };
            
   
        
    
    return(
        <div className="px-10 py-4">
            <h1 className="text-3xl text-blue-950 font-bold mb-6 underline">
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
                            onDelete={handleDelete}
                            />
                        )
                    })
                }

            </div>
        </div>
    )
}