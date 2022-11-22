import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

    // Need to associate the below with the value of its corresponding input
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);

    // invoke the useNavigate hook
    const history = useNavigate(); //back foward redirect the user

    // React to the submit event
    const handleSubmit = (e) => {
        // need to prevent the default action (stops page from refreshing)
        e.preventDefault();

        // create a blog object
        const blog = { title, body, author };

        setIsPending(true);

        // first arg is the endpoint that we're making the post request to
        // second arg is where we tack on the data and also define the type of request we're making
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" }, //set the content type that is being sent with this request ... we're sending json data
            body: JSON.stringify(blog) // the data that we're sending with this request ... in this case the blog
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // go back one through history
            // history.go(-1) //use pos/neg integers to move forwards and backwards through history of pages visited or ... we can redirect
            history('/'); // go to route for the home page
        })
    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Submitting Blog</button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
    );
}

export default Create;