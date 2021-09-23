// created custom hook to make fetch api code reusable

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); // handle all blogdata using state
    const [isPending,setPending] = useState(true) // to handle loading message
    const [error,setError] = useState(null); // to handle errors

    // call rest api only once
    useEffect(()=>{
    fetch(url)
        .then(res => {
            if(!res.ok) throw Error("Not able to fetch the data");
            return(res.json());
        })
        .then(data => {
            setData(data);
            setPending(false);
        })
        .catch(err => {
            setPending(false);
            setError(err.message);
        })
    },[url]);

    return {data, isPending, error}
}

export default useFetch;