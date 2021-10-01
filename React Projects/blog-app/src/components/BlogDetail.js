import React from 'react';
import { useParams } from 'react-router';
import useFetch from './useFetch';

const BlogDetail = () => {
    const { id } = useParams();
    const {data:blog,isPending,error} = useFetch(`http://localhost:3000/blogs/${id}`);
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
        </div>
    );
}

export default BlogDetail;
