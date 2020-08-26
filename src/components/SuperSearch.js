import React, { Component } from "react";

class SuperSearch extends Component {
  state = {
    query: "",
    data: [],
    searchString: []
  };

  buscarSuper = () => {
    console.log(this.state.query);
  };

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        Buscar un super Hereo: <br />
        <input type="text" onChange={this.handleInputChange} />
        <button onClick={this.buscarSuper}>Buscar</button>
        <br />
        Resultado Busqueda :{this.state.data} <br />
      </div>
    );
  }
}
export default SuperSearch;
