import React from "react";

const Search = () => {
  return (
    <div className="md:flex justify-between my-6">
      <div className="md:mb-0 mb-4"></div>
      <form>
        <input
          className="shadow pl-5 rounded w-full py-1"
          type="text"
          placeholder="search employee"
        />
      </form>
    </div>
  );
};

export default Search;
