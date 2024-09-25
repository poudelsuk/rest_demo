export default function Post({post,onDelete}){
    return(
        <div>
        {post.title}
        <p>
            {post.body}
        </p>
        <div>
            <button onClick={()=>{onDelete (post.id);

            }}
            >Delete post
            </button>
        </div>
        </div>
        
    );   
}

