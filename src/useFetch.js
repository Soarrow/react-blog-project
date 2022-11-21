import { useState, useEffect } from 'react';

// Custom hooks in react need to start with the word use or it won't work
const useFetch = (url) => {

    // State initialisations
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


    // This function fires for every render ... be careful of changing the state inside use effect
    // empty dependency array causes useEffect hook to only render once
    // we can specify which state values will trigger the use effect function to run
    // useEffect is a good place to fetch data because it runs the function when the component runs initially ... genearlly the point where we want to go fetch some data
    // we can then use that data intead of the data that we have set above in the useState
    useEffect(() => {
        // We can associate this with a specific fetch request ... we can then use it to stop the fetch
        const abortCont = new AbortController();

        setTimeout(() => {
            // associate abort controller with the fetch
            fetch(url, { singal: abortCont.signal }) // returns to us a promise ... then fires a function once the the above has been resolved
                .then(res => { // when the fetch function resolves itself we get a response object ... this doesn't contain the data it's just a response object
                    // console.log(res);
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json(); // res.json() gets us the data ... this passes the json into a js object for us // this returns another promise as json() is also async
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => { // this will catch any kind of network error
                    // console.log(err.message);
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        setError(err.message);
                        setIsPending(false);
                    }
                })
        }, 1000);

        return () => abortCont.abort();
    }, [url]); // whenever the url changes rerun the function to get the data for that endpoint

    return { data, isPending, error };
}

export default useFetch;