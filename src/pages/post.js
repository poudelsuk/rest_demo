export default function Post({post}){
    return(
        <div>
        {post.title}
        <p>
            {post.body}
        </p>
        </div>
        
    );   
}

