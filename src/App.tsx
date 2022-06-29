import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString = localStorage.getItem('counterKey')
        /*  let newValue = valueAsString && JSON.parse(valueAsString)*/
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    /* useEffect(() => {
         localStorage.setItem('counterKey', JSON.stringify(value))
     }, [value])*/

    const incHandler = () => {
        setValue(value + 1)
        localStorage.setItem('counterKey', JSON.stringify(value + 1))
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>

        </div>
    );
}

export default App;
