import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Flotsam Jetsom Blog</h1>
            <div className="links">
                {/* Anchor tags are fine
                but they return an html page each time and then react injects the correct content
                To get the react router to intercept the requests and hanlde the content changes in the browser we need to use a special link tag */}
                {/* <a href="/">Home</a>
                <a href="/create">Create New Blog</a> */}

                {/* If we want react to intercept the request for new pages we need to use the Link component */}
                {/* We'll still see anchor tags
                    When clicked they'll still try to send a request to the server for a new page
                    but built into the link tags is a special functionality
                    It allows the react router to prevent the request from going through and instead it looks at the url/path we're going to and tries to match it against one of our routes
                    Then it tries to inject whatever content we need ... much quicker than sending a new request to the server*/}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>

            </div>
        </nav>
     );
}
 
export default Navbar;