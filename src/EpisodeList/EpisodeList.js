import EpisodeItem from "../EpisodeItem/EpisodeItem";
import EpisodePagination from "../EpisodePagination/EpisodePagination";
import EpisodePageProvider from '../RickAndMortyApiClient/EpisodesPageProvider';
import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import './EpisodeList.css'

function EpisodeList() {

  const [episodes, setEpisodes] = React.useState(null);
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    if (episodes === null) {
      loadPage(1);
    }
  });

  function loadPage(pageNumber) {
    EpisodePageProvider.get(pageNumber).then((response) => {
      setEpisodes(response.data.results);
      setInfo(response.data.info);
    });
  }

  function searchEpisode(pageNumber) {
    EpisodePageProvider.getByName(pageNumber).then((response) => {
      setEpisodes(response.data.results);
      setInfo(response.data.info);
    });
  }

  if (!episodes || !info) return "Waiting for episodes...";

  return (
    <div className="EpisodeList">

      <SearchBar searchEpisode={searchEpisode}/>

      {episodes.map((episode, index) => (
          <EpisodeItem key={index} episode={episode}></EpisodeItem>
      ))}

      <EpisodePagination 
        info={info}
        loadPage={loadPage}
      />
    </div>
  );
}

export default EpisodeList;
