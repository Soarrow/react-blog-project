import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    /*
        We use a hook from the react router dom to get the route parameter from the url
    */
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    // define delete functionality
    const handleDelete = (e) => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            console.log('deleted');
            navigate('/');
        });
    };

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>

    );
}

export default BlogDetails;