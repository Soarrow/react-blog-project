import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    /*
        We use a hook from the react router dom to get the route parameter from the url
    */
    const { id } = useParams();

    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>

    );
}

export default BlogDetails;