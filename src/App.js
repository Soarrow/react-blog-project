import Navbar from './Navbar';
import Home from './Home';

/**
 * This is the root component - it's the first component that is rendered to the dom and sits at the top of our application
 * if we make more components we nest it in the root one
 */
function App() { 
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

// We always export our component function so that we can use it in other files
// we need to import the app component in files that use the component
export default App;