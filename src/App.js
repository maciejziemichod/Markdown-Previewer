import React, { Component } from "react";
import Editor from "./components/Editor.js";
import Previewer from "./components/Previewer.js";

const defaultText = `# React Markdown Previewer
## Sub header

Link: [my FCC profile](https://www.freecodecamp.org/maciejziemichod)

Inline code: \`<div></div>\`

\`\`\`
// code block:

const anotherExample = (firstLine, lastLine) => {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return codeBlock;
  }
};
\`\`\`
  
**Bold** text

> Block Quote

- Lists
  - with
     - different
        - indentation levels

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

class App extends Component {
  state = {
    text: defaultText,
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <Editor text={this.state.text} onChange={this.onChange} />
        <Previewer text={this.state.text} />
      </div>
    );
  }
}

export default App;
