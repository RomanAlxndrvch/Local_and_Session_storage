import React, {useState} from 'react';
import './App.css';
import {json} from "stream/consumers";

function App() {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorage = () => {
        sessionStorage.setItem('counterKey', JSON.stringify(value))
    }


    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>
            <button onClick={setToLocalStorage}>Set to Local Storage</button>
        </div>
    );
}

export default App;
