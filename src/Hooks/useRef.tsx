// Importing necessary modules from React
import { useState, useEffect, useRef, FC } from 'react';

// Defining a functional component named UseRefExample
const UseRefExample: FC<{}> = () => {
    // Using useState hook to manage state for 'name'
    const [name, setName] = useState<string>('');

    // Using useRef hook to create a mutable ref to store previous value of 'name'
    const prevName = useRef<string>('');

    // useEffect hook to update 'prevName' when 'name' changes
    useEffect(() => {
        prevName.current = name;
    }, [name]);

    // Returning JSX elements
    return (
        <>
            {/* Input field to update 'name' */}
            <input value={name} onChange={(e) => setName(e.target.value)} />
            {/* Displaying current and previous name */}
            <div>My name is {name}, and it used to be {prevName.current}.</div>
        </>
    );
}

// Exporting the functional component
export default UseRefExample;
