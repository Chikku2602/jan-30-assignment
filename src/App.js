import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  render() {
    this.state = [
      {
        heading: "What is HTML?",
        content:
          "HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages. A markup language is used to define the text document within tag which defines the structure of web pages.",
        button: "READ MORE",
      },
      {
        heading: "What is CSS?",
        content:
          "CSS stands for Cascading Style Sheets. It is a style sheet language which is used to describe the look and formatting of a document written in markup language. It provides an additional feature to HTML. It is generally used with HTML to change the style of web pages and user interfaces. It can also be used with any kind of XML documents including plain XML, SVG and XUL.",
        button: "READ MORE",
      },
      {
        heading: "What is JavaScript?",
        content:
          "JavaScript is a dynamic computer programming language. It is lightweight and most commonly used as a part of web pages, whose implementations allow client-side script to interact with the user and make dynamic pages. It is an interpreted programming language with object-oriented capabilities.",
        button: "READ MORE",
      },
    ];

    return (
      <div className="card">
        {this.state.map((body) => {
          return (
            <div className="card-ctn">
              <div className="header">
                <h1>{body.heading}</h1>
              </div>
              <div className="body">
                <p>{body.content}</p>
              </div>
              <div className="footer">
                <button>{body.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;