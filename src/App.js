import react from "react";

class App extends react.Component {
  constructor(props) {
    super(props);
    this.state = { deviceList: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"></input>
        </form>
      </div>
    );
  }
}
export default App;
