import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

export default function LocationList() {
  const [locations, setLocations] = useState([]);
  console.log(locations);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then(response => {
        setLocations(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="grid-view">
      {locations.map((location, index) => (
        <LocationDetails key={index} location={location} />
      ))}
    </section>
  );
}

function LocationDetails({ location }) {
  const { name, dimension, type, residents } = location;
  return (
    <div className="location-container">
      <Card className="location">
        <h2>{name}</h2>
        <div>
          Dimension: <h3>{dimension}</h3>
        </div>
        <div>
          Number of residents: <h3>{residents.length}</h3>
        </div>
        <div>
          Type: <h3>{type}</h3>
        </div>
      </Card>
    </div>
  );
}
