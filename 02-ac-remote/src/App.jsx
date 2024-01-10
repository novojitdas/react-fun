import "./App.css";
import logo from "./assets/aclogo.png";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("AC OFF");
  const [temp, setTemp] = useState(18);
  const [flag, setFlag] = useState(true);

  const onOff = () => {
    if (flag) {
      let newStatus = temp.toString() + "°C";
      setStatus(newStatus);
    } else {
      setStatus("AC OFF");
      setTemp(18);
    }
    setFlag(!flag);
  };

  const inc = () => {
    if (!flag && temp < 30) {
      let newTemp = temp + 1;
      setTemp(newTemp);
      let newStatus = newTemp.toString() + "°C";
      setStatus(newStatus);
    }
  };

  const dec = () => {
    if (!flag && temp > 18) {
      let newTemp = temp - 1;
      setTemp(newTemp);
      let newStatus = newTemp.toString() + "°C";
      setStatus(newStatus);
    }
  };

  return (
    <div className="container">
      <div className="remote">
        <div className="screen">
          <h1>{status}</h1>
        </div>
        <button className="btnred" onClick={onOff}>
          ON/OFF
        </button>
        <div className="control">
          <button className="btn1" onClick={inc}>
            +
          </button>
          <button className="btn2" onClick={dec}>
            -
          </button>
        </div>
        <div className="logo">
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default App;
