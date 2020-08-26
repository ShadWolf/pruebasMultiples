import React, { Component } from "react";

const accesstoken = "4207757765964887";

class SuperSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      displayData: null
    };
  }

  baseurl = "https://www.superheroapi.com/api.php/" + accesstoken + "/search/";
  buscarSuper = async () => {
    console.log(this.state.query);
    let url = this.baseurl + this.state.query;
    console.log(url);

    const res = await fetch(url, { method: "GET" });
    //  console.log(res);
    res
      .json()
      .then((data) => {
        console.log("data", data);
        this.setState({ displayData: data });
      })
      .catch((error) => console.log("error", error));
  };

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    if (
      this.state.displayData &&
      this.state.displayData.response === "success"
    ) {
      return (
        <div>
          Resultado Busqueda par {this.state.query}
          <br />
          <pre>{JSON.stringify(this.state.displayData.results)}</pre>
        </div>
      );
    } else if (
      this.state.displayData &&
      this.state.displayData.response === "error"
    ) {
      return (
        <div>
          Resultado Busqueda par {this.state.query} <br />
          No se encuentran data para este super heroe!
        </div>
      );
    } else {
      return (
        <div>
          Buscar un super Hereo: <br />
          <input type="text" onChange={this.handleInputChange} />
          <button onClick={this.buscarSuper}>Buscar</button>
        </div>
      );
    }
  }
}
export default SuperSearch;
