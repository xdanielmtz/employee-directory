import axios from "axios";
import React, { Component } from "react";

class Table extends Component {
  state = {
    original: [],
    results: []
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers() {
    axios
      .get("https://randomuser.me/api/?results=50")
      .then((response) => this.setState({ results: response.data.results }))
      .then((res) => this.setState({original: this.state.results}));
  }

  sortData = (e) => {
    console.log(e.target.value);
    let filteredArr = this.state.original.filter(query => query.cell.includes(e.target.value) )
    this.setState({results: filteredArr})
  }

sortName = (e) => {
 let sortedArr = this.state.original.sort(function(a,b){
   let nameA = a.name.first.toUpperCase();
   let nameB = b.name.first.toUpperCase();

   if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
 })

 this.setState({results: sortedArr})
}


  render() {
    return (
      <>
        <div>
          <br />
          <div className="text-center">
            <form>
              <input type="text" placeholder="Search by Number" onChange={this.sortData}/>
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
                      <th scope="col" onClick={this.sortName}>Name</th>
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
