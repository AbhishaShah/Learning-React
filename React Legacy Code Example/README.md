### **React Element**
- React elements are the instructions for how the browser DOM should be created.
- We can create a React element to represent an h1 using React.createElement:
    
    `const heading = React.createElement("h1", { id: "recipe-1" }, "Veg Meggi Noodles");`
    - First argument defines type of the element we want to create on DOM.
    - Second argument represents element's property such as id, className etc.
    - Third argument represents the element’s children: any nodes that are inserted between the opening and closing tag.

- During rendering, React will convert this element to an actual DOM element:

    `<h1 id="recipe-1">Veg Meggi Noodles</h1>`

### **ReactDOM**
- Once we’ve created a React element, we’ll want to add it in the browser. ReactDOM contains the tools necessary to render React elements in the browser.

     `ReactDOM.render(heading, document.getElementById("root"));`
    - The element we want to render is passed as first argument.
    - Second argument is the target node, where we should render the element.
    ```HTML
     <body>
        <div id="root">
            <h1 id="recipe-1">Veg Meggi Noodles</h1>
       <div>
    </body>
    ```

### **React Components**
- Components allow us to reuse the same structure of code.
- We can create a component by writing a function. That function will return a reusable part of a user interface.