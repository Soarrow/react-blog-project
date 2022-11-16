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
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => { 
        console.log('use effect ran');
    });


    return (
        <div className="home">
            {/* ACTUAL CODE */}
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>



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