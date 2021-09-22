import { useState } from "react";
import blogData from "../data/db.json";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(blogData); // handle all blogdata using state

    const handleRemove = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return(
        <div className="home">
            <BlogList  blogs={blogs} handleRemove={handleRemove} />
        </div>
    );
}

export default Home;