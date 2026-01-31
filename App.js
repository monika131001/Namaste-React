import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => <h1>Hello World with JSX</h1>;

const HeadingComponent = () => (
  <div>
    <Heading />
    <h1>Functional Component</h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
