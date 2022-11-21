import BlogList from './BlogList';
import useFetch from './useFetch';

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
    // semicolon means to use data as blogs ... name the data blogs inside this component ... grab the data but call it blogs ni this context
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");


    // const [name, setName] = useState('mario');


    

    return (
        <div className="home">
            {/* ACTUAL CODE */}

            {/* Conditional templating happening below 
                logical and evals the left first ... if it's false we never bother with the right hand side of the logical and
                if left side is true then it goes to the right and evaluates it ... and when evaluating it outputs it to the screen
                what's on the right only gets outputed if the thing on the left is true*/}
            {error && <div>Error: {error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}



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