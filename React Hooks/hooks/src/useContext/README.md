# **useContext()**
- **Usage:** Context provides a way to pass data through the component tree without having to pass props down manually at every level. 
- The context is used to manage global data, e.g. global state, theme, services, user settings etc.
- Using the context requires 3 simple steps:
    1) Creating the context.
        ```Javascript
        import { createContext } from 'react';
        export const Context = createContext('Default Value');

    2) Providing the context.
        ```Javascript
        function Main() {
            const value = 'My Context Value';
            return (
                    <Context.Provider value={value}>
                    <MyComponent />
                    </Context.Provider>
                );
        }
    3) Consuming the context.
        ```Javascript
         import { useContext } from 'react';
         import { Context } from "./UseContextHookProvider";
            function MyComponent() {
                const value = useContext(Context);
                return <span>{value}</span>;
            }
