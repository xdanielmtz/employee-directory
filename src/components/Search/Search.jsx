import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="text-center">
          <form>
            <input
              value=""
              type="text"
              placeholder="Search Employee"
            />
          </form>
        </div>
        <br />
      </div>
    );
  }
}

export default Search;
