import DATA from "../assets/MOCK_DATA.json";
import { useEffect, useState } from "react";

export const Voterinfo = () => {
  const [search, setSearch] = useState("");
  const [submit, setSubmit] = useState(false);

  const query = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  const queryResult = DATA.filter((val) => {
    if (search == "") {
      return val;
    } else {
      return val.first_name.toLowerCase().includes(search.toLowerCase());
    }
  });

  const submitted = (event) => {
    console.log("Submitted Value:", search);
    setSubmit(true);
  };

  useEffect(() => {
    if (submit && search !== "") {
      setSubmit(false);
    }
  }, [search]);

  return (
    <div className="appbody">
      <div className="container">
        <h1 className="font-bold m-4">Voter Information</h1>
        <div className="input">
          <input type="text" className="inputfield" onChange={query} />
          <button className="btn" onClick={submitted}>
            SUBMIT
          </button>
        </div>
        <div className="output">
          {submit
            ? queryResult.map((val, key) => (
                <div className="card" key={val.id}>
                  <p>{key + 1}</p>
                  <p>Name: {val.first_name}</p>
                  <p>Birthday: {val.datetime}</p>
                  <p>Address: {val.street_address}</p>
                </div>
              ))
            : queryResult.map((val, key) => (
                <div key={val.id}>
                  <p>{val.first_name}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
