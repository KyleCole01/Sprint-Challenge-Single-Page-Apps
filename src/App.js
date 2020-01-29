import React from "react";
import { Route } from "react-router-dom";

import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import SearchForm from "./components/SearchForm";
import WelcomePage from "./components/WelcomePage";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route path="/welcome" component={WelcomePage} />
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationsList} />
      <Route exact path="/episode" component={EpisodeList} />
      <Route exact path="/search" component={SearchForm} />
    </main>
  );
}
