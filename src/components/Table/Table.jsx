import axios from "axios";
import React, { Component } from "react";

class Table extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => this.setState({ results: response.data.results }))
      .then((res) => console.log(this.state.results));
  }

  render() {
    return (
      <>
        <div>
          <br />
          <div className="text-center">
            <form>
              <input value="" type="text" placeholder="Search Employee" />
            </form>
          </div>
          <br />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Age</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map((element) => (
                      <tr>
                        <th scope="row">
                          <img src={element.picture.thumbnail}></img>
                        </th>
                        <td>
                          {element.name.first} {element.name.last}
                        </td>
                        <td>{element.cell}</td>
                        <td>{element.email}</td>
                        <td>{element.dob.age}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Table;
