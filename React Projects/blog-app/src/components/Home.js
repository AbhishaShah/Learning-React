import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null); // handle all blogdata using state
    const [isPending,setPending] = useState(true) // to handle loading message
    const [error,setError] = useState(null); // to handle errors

// call rest api only once
useEffect(()=>{
       fetch('http://localhost:3000/blogs')
        .then(res => {
            if(!res.ok) throw Error("Not able to fetch the data");
            return(res.json());
        })
        .then(data => {
            setBlogs(data);
            setPending(false);
        })
        .catch(err => {
            setPending(false);
            setError(err.message);
        })
    },[])

    return(
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && "Loading..."}
            {blogs && <BlogList  blogs={blogs} />}
        </div>
    );
}

export default Home;