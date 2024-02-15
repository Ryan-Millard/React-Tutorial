// Importing necessary modules from React
import { useState, useEffect, useMemo, FC } from 'react';

// Defining a functional component named UseMemoExample
const UseMemoExample: FC<{}> = () => {
    // Defining types for theme styles
    type ThemeStyle = {
        backgroundColor: string;
        color: string;
    }

    // Using useState hook to manage state for 'num' and 'dark'
    const [num, setNum] = useState<number>(0);
    const [dark, setDark] = useState<boolean>(false);

    // Using useMemo hook to memoize the result of expensive calculation
    const doubleNum = useMemo<number>(() => {
        return slowFunction(num);
    }, [num]);

    // Using useMemo hook to memoize the screen theme based on 'dark' state
    const screenTheme = useMemo<ThemeStyle>(() => {
        return (
            dark ?
            { backgroundColor: 'black', color: 'white' }
            :
            { backgroundColor: 'white', color: 'black' }
        );
    }, [dark]);

    // useEffect hook to log when screen theme changes
    useEffect(() => {
        console.log('Screen theme changed');
    }, [screenTheme]);

    // Returning JSX elements
    return (
        <>
            {/* Input field to update 'num' */}
            <input type="number" value={num} onChange={(e) => setNum(parseInt(e.target.value))} />
            {/* Button to toggle 'dark' state */}
            <button onClick={() => setDark((prevDark) => !prevDark)}> Change theme</button>
            {/* Displaying the double of 'num' with style based on 'screenTheme' */}
            <div style={screenTheme}>{doubleNum}</div>
        </>
    );
}

// Function to simulate a slow calculation
function slowFunction(num: number): number {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
}

// Exporting the functional component
export default UseMemoExample;
