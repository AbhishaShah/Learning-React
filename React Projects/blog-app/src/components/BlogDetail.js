import React from 'react';
import { useHistory, useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetail = () => {
    const { id } = useParams();
    const {data:blog,isPending,error} = useFetch(`http://localhost:3000/blogs/${id}`);

    const history = useHistory();
    const handleDelete = () => {
        fetch( `http://localhost:3000/blogs/${id}`,{
            method: "DELETE",
        }).then( () => {
             console.log("blog deleted");
             history.push("/");
         })
    }
    return (
        <div className="blog-detail">
            {isPending && "Loading..."}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <div className="blog-tag">{blog.tag}</div>
                    <p>{blog.body}</p>
                </article>
            )}
            <button onClick={handleDelete}> Delete</button>
        </div>
    );
}

export default BlogDetail;
