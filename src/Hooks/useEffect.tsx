// Importing necessary modules from React
import { useState, useEffect, FC } from 'react';

// Defining a functional component named UseEffectExample
const UseEffectExample: FC<{}> = () => {
    // Using useState hook to manage state for 'resourceType'
    const [resourceType, setResourceType] = useState<string>('posts');

    // useEffect hook to perform side effects when 'resourceType' changes
    useEffect(() => {
        // Logging a message whenever the 'resourceType' state changes
        console.log('resource changed');

        // Returning a cleanup function
        return () => {
            console.log('return from resource change');
        }
    }, [resourceType]); // Specifying dependency array with 'resourceType'

    // Returning JSX elements
    return (
        <>
            {/* Buttons to change the 'resourceType' state */}
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            {/* Displaying the current 'resourceType' state */}
            <h1>{resourceType}</h1>
        </>
    );
}

// Exporting the functional component
export default UseEffectExample;
