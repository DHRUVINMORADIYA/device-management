import ReactDOM from "react-dom";
import react from "react";
//import App from "./App.js";

class Index extends react.Component {
  constructor(props) {
    super(props);
    this.state = { deviceList: [], text: "", date: Date.now() };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printHeader = this.printHeader.bind(this);
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    this.setState({
      deviceList: this.state.deviceList.concat({
        name: this.state.text,
        dateCreated: Date(),
      }),
      text: "",
    });
    e.preventDefault();
  };

  printHeader = () => {
    if (this.state.deviceList.length < 1) {
      return <h4>You don't have any item to show.</h4>;
    } else {
      return (
        <ol>
          {this.state.deviceList.map((i) => (
            <li key={i.date}>
              <ul>
                <li>Name: {i.name}</li>
                <li>Date Created: {i.date}</li>
              </ul>
            </li>
          ))}
        </ol>
      );
    }
  };

  render() {
    return (
      <div>
        {this.printHeader()}
        <form>
          Enter name of the device:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
          <br />
          Enter the purchasing date:
          <input type="date" value={this.state.date} />
          <br />
          Enter the expiry/next service date:
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
