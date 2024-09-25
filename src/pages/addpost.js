import { useState } from "react";
import TextInput from "./component/text-input";

export function AddPost({onSubmit}){
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const[userId,setUserId]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        
        onSubmit({
            title,body,userId
     } );

    }
    return(
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col items-start"
        >
            <label>
                Title:
                <input
                    className="border rounded-lg focus:outline-blue-700 p-1 "
                  value={title}
                  onChange={e =>setTitle(e.target.value)}
                />
            </label>
            <label>
                Body:
                <TextInput
                     
                value={body}
                onChange={e=>setBody(e.target.value)}
                 
                />
            </label>
            <label>
                User Id:
                

                <TextInput
                   
                value={userId}
                onChange={e=>setUserId(e.target.value)}
                />
            </label>
            <button 
              className="border px-2 py-0.5 rounded-md bg-blue-200 hover:bg-red-900 "
            type="submit">button</button>
        </form>
    )
}