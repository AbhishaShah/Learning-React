# **useState()**
- **Usage:** To create and update state variables in functional components. 
    `const [state, setState] = useState(initialState);`
    - `initialState`: useState takes the initial value of the state variable as an argument.The initial value will be assigned only on the initial render.
    - usestate() returns an array, where the first element `state` is the state variable and the second element `setState` is a function to update the value of the variable.

- useState should not call in loops, conditions, or nested functions.
- useState does not merge the object,it will only replace the object.