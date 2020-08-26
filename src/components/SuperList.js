import React, { Component } from "react";
const accesstoken = "4207757765964887";

class SuperList extends Component {
  data = [];
  baseurl = "https://superheroapi.com/api/" + accesstoken + "/";
  async ListaSuper() {
    for (let id = 1; id < 10; id++) {
      let url = this.baseurl + id;
      console.log(url);
      const res = await fetch(url, { method: "GET" });
      console.log(res);
      res
        .json()
        .then((data) => console.log(data))
        .catch((error) => console.log("error", error));
    }
  }
  componentDidMount() {
    this.ListaSuper();
  }
  render() {
    return (
      <div>
        Lista de Super Heroes: <br />
        {this.data}
      </div>
    );
  }
}
export default SuperList;
