import React from "react";
import { useState } from "react";
import "./App.css";


const App = () => {
    const [incr, setincr] = useState(0)
    return (
        <div className="App">
            <h3>{incr}</h3>
            <button type="submit" onClick={()=> setincr(incr + 1)}>Click Me</button>
        </div>
    );
}

export default App;
