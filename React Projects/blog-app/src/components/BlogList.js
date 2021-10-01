import {FaRegClock} from "react-icons/fa";
import { Link } from "react-router-dom";


const BlogList = ({blogs}) => {
        
    return (
        <div className="blog-list">
        {
            blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`blogs/${blog.id}`}>
                        <h2 className="blog-title">{blog.title}</h2>
                        <div className="blog-tag">{blog.tag}</div>  
                    </Link>
                    <p>{blog.body.substring(0,120)+"...."}</p>
                    {blog.readingTime && <div className="blog-reading-time"> <FaRegClock /> { blog.readingTime}</div>}
                </div>
            ))
        }
        </div>
    )
}

export default BlogList;