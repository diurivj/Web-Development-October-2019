import React from "react";
import "./App.css";
// import { Badge, Icon } from "antd";
import WrappedFormComponent from "./components/FormComponent";

function App() {
  return (
    <div className="App">
      <h1>Mi app</h1>
      {/* <Badge count={<Icon type="clock-circle" style={{ color: "#f5222d" }} />}>
        <div
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "#Ddd",
            borderRadius: "10px"
          }}
        />
      </Badge> */}
      <WrappedFormComponent />
    </div>
  );
}

export default App;
