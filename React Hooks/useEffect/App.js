import React, { useState, useEffect } from "react";

export default function App() {
const [name, setName] = useState("");
const [message, setMessage] = useState("Initial message");


useEffect(() => {
    console.log(`Given Name: ${name}`); // print entered name when name value changes
});

useEffect(() => {
    console.log("Button Clicked");
},[message]) // only print when button clicked and message got updated

return (
    <>
    <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <button onClick={() => setMessage("Button clicked: Message updated")}>Click</button>
    <p> {message}</p>
    </>
);
}  