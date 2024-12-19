import React, { Fragment } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const List = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Fragment>
  );
};

const NotFound = () => {
  return (
    <Fragment>
      <div>
        <h1>404 Not Found</h1>
        <FakeText />
      </div>
    </Fragment>
  );
}

const Home = () => {
  return (
    <Fragment>
      <div>
        <h1>Home</h1>
        <FakeText />
      </div>
    </Fragment>
  );
};

const About = () => {
  return (
    <Fragment>
      <div>
        <h1>About</h1>
        <FakeText />
      </div>
    </Fragment>
  );
};

const Contact = () => {
  return (
    <Fragment>
      <div>
        <h1>Contact</h1>
        <FakeText />
      </div>
    </Fragment>
  );
};

const FakeText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
    </p>
  );
};

export default App;
