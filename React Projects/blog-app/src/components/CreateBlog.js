import React, { useState } from 'react';

const CreateBlog = () => {
    const [title,setTitle] = useState("fdf");
    const [body,setBody] = useState();
    const [tag,setTag] = useState("Learn");
    const [isPending,setIsPending] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const blog = {title, body, tag};
        setIsPending(true);
        fetch( "http://localhost:3000/blogs",{
            method: "POST",
            headers: {"Content-type":"application/json"},
            body:JSON.stringify(blog)
        }).then( () => {
             console.log("blog added");
             setIsPending(false);
         })
    }
    return (
        <div className="addBlogForm">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit} >
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                 />
                <label>Blog Tag</label>
                 <select
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    >
                     <option value="Learn">Learn</option>
                     <option value="Food"> Food</option>
                     <option value="Beauty">Beauty</option>
                 </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}

            </form>
            </div>
    );
}

export default CreateBlog;
