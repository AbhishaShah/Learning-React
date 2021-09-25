import { useReducer, useEffect } from "react";

const initialState = {
    loading:true,
    post:{},
    error:''
}
const reducer = (state,action) => {
    switch(action.type){
        case "FETCH_SUCCESS":
           return {
               loading:false,
               post:action.payload,
               error:''
           }
        case "FETCH_ERROR":
            return {
                loading:false,
                post:{},
                error:action.error
            }
        default:
            return state;
    }
}

const UseReducerHookWithFetchData = () => {
    const [state, dispatch]  = useReducer(reducer,initialState);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => {  console.log(res);
                if(!res.ok) dispatch({type:"FETCH_ERROR",error:"Not able to fetch data"});
                return(res.json());
            })
            .then(data => { dispatch({type:"FETCH_SUCCESS",payload:data});
            })
            .catch(err => { 
                dispatch({type:"FETCH_ERROR",error:err.message});
        })
    },[]);

    return (
        <div>
            {state.loading ? "Loading...": `Post Title: ${state.post.title}` }
            {state.error ? state.error : null}
        </div>
    );
} 

export default UseReducerHookWithFetchData;