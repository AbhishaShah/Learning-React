// created custom hook to make fetch api code reusable

import { useState, useEffect } from "react";

const UseEffectWithFetchData = () => {
    const [data, setData] = useState([]); // handle all blogdata using state
    const [error,setError] = useState(null); // to handle errors

    // call rest api only once
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => { 
                if(!res.ok) throw Error("Not able to fetch the data");
                return(res.json());
            })
            .then(data => { console.log(data);
                setData(data);
            })
            .catch(err => {
                setError(err.message);
        })
    },[]);

    return(
        <ul>
            {
                 data.map(post => (
                     <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    )

}

export default UseEffectWithFetchData;