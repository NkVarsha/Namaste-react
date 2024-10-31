import React from "react";
import ReactDOM from "react-dom/client";

const H6comp = () => <h6 className="h6">Happy learning</h6>;
const HeadingComp = () => (
  <div className="container">
    <h1 className="h1">Namaste React</h1>
    <H6comp />
    <H6comp></H6comp>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
