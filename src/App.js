import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';

/**
 * This is the root component - it's the first component that is rendered to the dom and sits at the top of our application
 * if we make more components we nest it in the root one
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Note that the navbar will always show as it's not in the Routes statement */}
        <Navbar></Navbar>
        <div className="content">
          {/* This component ensures that only one route shows at any one time */}
          {/* Note that we need to use a special react router link instead of anchor tags to get react router to intercept the request and and handle it in the browser*/}
          <Routes>
            {/* we create a route for each page we have using the route component */}
            <Route path="/" element={<Home />}/>
            <Route path="/create" element={<Create/>} />
            <Route path="/blogs/:id" element={<BlogDetail/>}/>
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

// We always export our component function so that we can use it in other files
// we need to import the app component in files that use the component
export default App;