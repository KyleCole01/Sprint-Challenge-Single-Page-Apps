import React from "react";
import { Card } from "semantic-ui-react";

function CharacterDetails({ character }) {
  const { image, name, species, status, gender } = character;
  return (
    <div className="location-container character">
      <Card className="location">
        <div>
          <img src={image} alt={`a picture of ${name}`} />
          <h2>{name}</h2>
          <div>
            Species: <h2>{species}</h2>
          </div>
          <div>
            Status: <h2>{status}</h2>
          </div>
          <div>
            Gender: <h2>{gender}</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}
export default CharacterDetails;
