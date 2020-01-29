import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([]);
  console.log(episodes);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/`)
      .then(response => {
        setEpisodes(response.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, []);

  return (
    <section className="grid-view">
      {episodes.map((episode, index) => (
        <EpisodeDetails key={index} episode1={episode} />
      ))}
    </section>
  );
}

function EpisodeDetails({ episode1 }) {
  const { air_date, episode, name } = episode1;
  return (
    <div className="location-container">
      <Card className="location">
        <div className="name">
          <h2>{name}</h2>
          <div className="episode">
            Episode: <h2>{episode}</h2>
          </div>
          <div className="air-date">
            Air Date: <h2>{air_date}</h2>
          </div>
        </div>
      </Card>
    </div>
  );
}
