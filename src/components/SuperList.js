import React, { Component } from "react";
import DisplaySuperTable from "./DisplaySuperTable";

const accesstoken = "4207757765964887";

class SuperList extends Component {
  data = [];

  baseurl = "https://www.superheroapi.com/api.php/" + accesstoken + "/";

  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.ListaSuper();
  }
  storeData(res) {
    console.log(res);
    let element = { id: res.id, name: res.name };
    this.data.push(element);
  }
  async ListaSuper() {
    for (let id = 1; id < 10; id++) {
      let url = this.baseurl + id;
      console.log(url);

      const res = await fetch(url, { method: "GET" });
      //  console.log(res);
      res
        .json()
        .then((data) => {
          this.storeData(data);
          if (id === 9) {
            console.log("data", this.data);
            this.setState({ loading: false });
          }
        })
        .catch((error) => console.log("error", error));
    }
  }
  render() {
    if (!this.state.loading) {
      return (
        <div>
          Lista de Super Heroes: <br />
          <center>
            <DisplaySuperTable data={this.data} />
          </center>
        </div>
      );
    } else {
      return (
        <div>
          Lista de Super Heroes: <br />
          <span> Loading...</span>
        </div>
      );
    }
  }
}
export default SuperList;
