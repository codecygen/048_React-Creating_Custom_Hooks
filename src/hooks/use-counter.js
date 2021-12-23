// React-Custom_Hooks_Function_File
// This file is contained in "./hooks/use-counter.js"

// hook name shall always start with "use" prefix
// This tells React to treat it as a custom hook.

import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (forwards) {
                setCounter((prevCounter) => prevCounter + 1);
            } else {
                setCounter((prevCounter) => prevCounter - 1); 
            }
        }, 1000);

        return () => clearInterval(interval);
    // we put forwads as a dependency. Here this dependency will not
    // change for components in this example. We put this dependency
    // just to follow good practive for useEffect hook. As we know, useEffect
    // hooks should always get a dependency parameter as a good practice.
    }, [forwards]);

    return counter;
};

export default useCounter;