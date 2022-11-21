import { useParams } from "react-router-dom";

const BlogDetails = () => {
    /*
        We use a hook from the react router dom to get the route parameter from the url
    */
    const {id} = useParams();

    return (  
        <div className="blog-details">
            <h2>Blog details - {id}</h2>
        </div>
    );
}
 
export default BlogDetails;