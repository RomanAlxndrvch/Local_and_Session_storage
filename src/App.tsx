import React, {useState} from 'react';
import './App.css';
import {json} from "stream/consumers";

function App() {
    const [value, setValue] = useState<number>(0)

    const incHandler = () => {
        setValue(value + 1)
    }
    const setToLocalStorage = () => {
        localStorage.setItem('counterKey', JSON.stringify(value))
    }
    const getFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterKey')
        let newValue = valueAsString && JSON.parse(valueAsString)
        setValue(newValue)
    }
    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>
            <button onClick={setToLocalStorage}>Set to Local Storage</button>
            <button onClick={getFromLocalStorage}>Get from local storage</button>
            <button onClick={clearLocalStorage}>Clear Local Storage</button>
        </div>
    );
}

export default App;
