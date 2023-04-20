import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

function ColorList() {
    const colors = [
      "firebrick",
      "rebeccapurple",
      "salmon",
      "darkslategray",
      "hotpink",
    ];
  
    const colorElements = colors.map((color, index) => (
      <li key={index} style={{ color: color }}>{color}</li>
    ));
  
    return (
      <div>
        <h1>Top 5 CSS Colors</h1>
        <ol>
          {colorElements}
        </ol>
      </div>
    );
  }
  
