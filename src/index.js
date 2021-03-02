import ReactDOM from "react-dom";
import react from "react";
//import App from "./App.js";

class Index extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceList: [],
      text: "",
      dateCreated: null,
      dateExpiry: null,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.printHeader = this.printHeader.bind(this);
    this.handleChangeDateCreated = this.handleChangeDateCreated.bind(this);
  }

  handleChangeName = (e) => {
    this.setState({ text: e.target.value });
  };

  handleChangeDateCreated = (e) => {
    this.setState({ dateCreated: e.target.value });
  };

  handleChangeDateExpiry = (e) => {
    this.setState({ dateExpiry: e.target.value });
  };

  handleSubmit = (e) => {
    if (this.state.text < 6) {
      alert("Device name should be at least 6 characters!");
      return;
    }
    if (this.state.dateCreated == null || this.state.dateExpiry == null) {
      alert("please provide dates!");
      return;
    }
    this.setState({
      deviceList: this.state.deviceList.concat({
        name: this.state.text,
        dateCreated: this.state.dateCreated,
        dateExpiry: this.state.dateExpiry,
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
                <li>Date Created: {i.dateCreated}</li>
                <li>Next Service/Expiry: {i.dateExpiry}</li>
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
          Enter the name of the device:
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChangeName}
          />
          <br />
          Enter the purchasing date:
          <input
            type="date"
            value={this.state.dateCreated}
            onChange={this.handleChangeDateCreated}
          />
          <br />
          Enter the expiry/next service date:
          <input
            type="date"
            value={this.state.dateExpiry}
            onChange={this.handleChangeDateExpiry}
          />
          <br />
          <button onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("root"));
