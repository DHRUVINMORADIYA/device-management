import ReactDOM from "react-dom";
import react from "react";
import App from "./App.js";
import "./index.css";

class Index extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      listHome: [],
    };
    this.handleAddHome = this.handleAddHome.bind(this);
  }

  handleAddHome = () => {
    let app = new App();
    this.setState({ listHome: this.state.listHome.concat({ app }) });
  };

  render() {
    return (
      <div>
        {this.state.listHome.map((e) => (
          <div class="app">
            <App />
          </div>
        ))}
        <input type="button" value="Add Home" onClick={this.handleAddHome} />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
