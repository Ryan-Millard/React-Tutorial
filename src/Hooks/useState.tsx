// Importing necessary modules from React
import { useState, FC } from 'react';

// Defining a functional component named UseStateExample
const UseStateExample: FC<{}> = () => {
    // Defining a type for the state object
    type State = {
        count: number;
        theme: string;
    }

    // Function to set initial state
    const setInitialState = (): State => {
        return { count: 4, theme: 'blue' };
    }

    // Using useState hook to manage state
    const [state, setState] = useState<State>(setInitialState);

    // Function to decrement count in state
    const decrementState = (): void => {
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1 };
        });
    }

    // Function to increment count in state
    const incrementState = (): void => {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1 };
        });
    }

    // Returning JSX elements
    return (
        <>
            {/* Button to decrement count */}
            <button onClick={decrementState}>-</button>
            {/* Displaying the count from state */}
            <span>{state.count}</span>
            {/* Displaying the theme from state */}
            <span>{state.theme}</span>
            {/* Button to increment count */}
            <button onClick={incrementState}>+</button>
        </>
    );
}

// Exporting the functional component
export default UseStateExample;
