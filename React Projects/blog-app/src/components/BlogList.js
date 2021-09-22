import {FaRegClock} from "react-icons/fa";

const BlogList = ({blogs}) => {
        
    return (
        <div className="blog-list">
        {
            blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2 className="blog-title">{blog.title}</h2>
                    <div className="blog-tag">{blog.tag}</div>  
                    <p>{blog.body}</p>
                    <div className="blog-reading-time"> <FaRegClock /> {blog.readingTime}</div>
                </div>
            ))
        }
        </div>
    )
}

export default BlogList;