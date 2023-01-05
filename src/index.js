import React from "react";
import ReactDOM from "react-dom";

// stateless functional component
// always needs to retun JSK, if it return the
function Greeting() {
  // <> </> is a fragment
  return (
    <>
      <React.Fragment>
        <section className="">
          <h3> Hello World </h3>
          <ul>
            <li>
              <a href="#">Click here</a>
            </li>
          </ul>
          <img src="" alt="Test me first" />
          <input type="text" name="" id="" />
        </section>
      </React.Fragment>
    </>
  );
}
function welcome() {
  console.log("welcome");
}
// This is another way of creating a component
// const Greeting = () => {
//   return React.createElement("h11", {}, "Hello world");
// };

//This can go messy too quickly
// const NewGreeting = () => {
//   return React.createElement(
//     "article",
//     {},
//     React.createElement("h1", {}, "Works like a charm")
//   );
// };

//JSX Rules
// always return a single element
// div / section / articles or fragment
// use camelCase for html attributes
// className instead of class
// close every element
// formatting

ReactDOM.render(<Greeting />, document.getElementById("root"));
