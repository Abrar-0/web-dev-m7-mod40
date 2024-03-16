import { useEffect, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedC, setVisitedC] = useState([]);
  const [visitedF, setVisitedF] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedC = (country) => {
    console.log("add this country");
    const newVisitedC = [...visitedC, country];
    setVisitedC(newVisitedC);
  };

  const handleVisitedF = (flag) => {
    console.log("Flag added");
    const newVisitedF = [...visitedF, flag];
    setVisitedF(newVisitedF);
  };

//   remove flags
//   use filter

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited countries */}
      <div>
        <h5>Visited Countries: {visitedC.length}</h5>
        <ul>
          {visitedC.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>

      <div className="flag-container">
        {visitedF.map((flag, idx) => (
          <img
            src={flag}
            style={{ width: "100px", height: "100px", margin: "10px" }}
            key={idx}
          ></img>
        ))}
      </div>

      {/* display countries */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca2}
            country={country}
            handleVisitedC={handleVisitedC}
            handleVisitedF={handleVisitedF}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
