import { useState, useEffect } from 'react';
import BlogList from './BlogList';

/**
 * If we want to pass something into a function
 * we need to use an anonymous function
 * Wrapping in an anonymous function prevents the intended function from firing immediately
 */

const Home = () => {
    // let name = 'mario';
    // const [name, setName] = useState('mario'); // input Value here can be anything
    // const [age, setAge] = useState(23);

    // const handleClick = (e) => {
    //     setName('luigi');
    //     setAge(30);
    // }

    // const handleClickAgain = (name, e) => {
    //     console.log('Hello ' + name, e.target)
    // }

    // ACTUAL CODE
    const [blogs, setBlogs] = useState(null);

    // const [name, setName] = useState('mario');

    // This function fires for every render ... be careful of changing the state inside use effect
    // empty dependency array causes useEffect hook to only render once
    // we can specify which state values will trigger the use effect function to run
    // useEffect is a good place to fetch data because it runs the function when the component runs initially ... genearlly the point where we want to go fetch some data
    // we can then use that data intead of the data that we have set above in the useState
    useEffect(() => { 
        fetch('http://localhost:8000/blogs') // returns to us a promise ... then fires a function once the the above has been resolved
         .then(res => { // when the fetch function resolves itself we get a response object ... this doesn't contain the data it's just a response object
            return res.json(); // res.json() gets us the data ... this passes the json into a js object for us // this returns another promise as json() is also async
         })
         .then((data) => {
            console.log(data);
            setBlogs(data);
         });
    },[]);


    return (
        <div className="home">
            {/* ACTUAL CODE */}

            {/* Conditional templating happening below 
                logical and evals the left first ... if it's false we never bother with the right hand side of the logical and
                if left side is true then it goes to the right and evaluates it ... and when evaluating it outputs it to the screen
                what's on the right only gets outputed if the thing on the left is true*/}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
            

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blog Blogs"/> */}
            {/* Putting brackets after the handleClick function will invoke it without the user even clicking it
            here we just want to reference the function  */}
            {/* <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again</button> */}
        </div>
    );
}

export default Home;