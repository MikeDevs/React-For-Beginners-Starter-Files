import React from "react";
import { format } from "util";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Select a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;
