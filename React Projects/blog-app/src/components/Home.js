import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:3000/blogs');
    return(
        <div className="home">
            {error && <div> {error} </div>}
            {isPending && "Loading..."}
            {blogs && <BlogList  blogs={blogs} />}
        </div>
    );
}

export default Home;