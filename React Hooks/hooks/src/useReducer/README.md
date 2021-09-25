# **useReducer()**
- **Usage:** useReducer hook used for state managementin react.
- Using the useReducer requires below steps:

    1) Initiate the state:

        `const initialState = 0`

    2) Define reducer function, which should return new state based on action given:
    
        `const newState = reducer(currentState,action)`

    3)  Invoke useReducer() hook by passing reducer callback function and initial state. It will return currentState and dispatch method.

        `const [counter, dispatch]  = useReducer(reducer,initialState)`

         Dispatch method used to pass action to reducer function.
        
        `<button onClick={() => dispatch("increment")}>Increment</button>`

