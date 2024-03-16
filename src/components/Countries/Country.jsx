import { useState } from "react";
import "./Country.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const Country = ({ country, handleVisitedC, handleVisitedF }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setVisited] = useState(false);

  const sty = {
    width: "200px",
    height: "150px",
  };

  const handleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited && "visited text"}`}>
      <h3>
        Name:{" "}
        <span style={{ color: visited ? "blue" : "white" }}>
          {name.official}
        </span>
      </h3>
      <img src={flags.svg} alt="" style={sty} />
      <p>Population: {population}</p>
      <p>Area:{area} </p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => handleVisitedC(country)}>Mark Visited</button>
      <br />
      <button onClick={() => handleVisitedF(country.flags.svg)}>
        Add Flag
      </button>
      <br />
      <button onClick={handleVisited}>Visited</button>
      {visited && "I have visited this country"}
      <hr />
      <CountryDetail
        country={country}
        handleVisitedC={handleVisitedC}
        handleVisitedF={handleVisitedF}
      ></CountryDetail>
    </div>
  );
};

export default Country;
