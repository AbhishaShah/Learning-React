# **useRef()**
- **Usage:** It allows to directly create a reference to the DOM element in the functional component.
- `const refContainer = useRef(initialValue);` 
- The useRef returns a mutable ref object.
- Useful to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
- Get reference DOM element value using `refContainer.current`.