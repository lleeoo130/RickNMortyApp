import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import EpisodeDetail from './EpisodeDetail/EpisodeDetail';
import IsFavorite from './IsFavorite/IsFavorite';
import './EpisodeItem.css';

export default function EpisodeItem(props) {

  const [episodeDetail, setEpisodeDetail] = React.useState(null);
  const [display, setDisplay] = React.useState(null);

  function onClickEpisodeDetail() {
    setEpisodeDetail(props.episode.characters);
    toggleDisplay();
  };

  function toggleDisplay() {
    ('block' === display) ? setDisplay('none') : setDisplay('block') 
  }

  const card = (
    <React.Fragment>
      <IsFavorite className='isFavorite' episodeId={props.episode.episode}/>
      <CardContent sx={{padding: "0px"}}>
        {props.episode.episode} - {props.episode.name} - {props.episode.air_date}  
      </CardContent>
      <CardActions className="episodeDetail" onClick={onClickEpisodeDetail} sx={{padding: "0px", clear: "both"}}>
        <Button 
          size="small" 
          className="toggleEpisodeDetails" 
          fullWidth={true}
          sx={{padding: "0px", clear: "both"}}
        >
            See episode characters
        </Button>
        
      </CardActions>
      <EpisodeDetail episodeDetail={episodeDetail} display={display}></EpisodeDetail>
    </React.Fragment>
  );
  
  return (
    <div className="EpisodeItem" key={props.index}>
      <Card 
        variant="elevation"
        sx={{
          padding: "10px",
          margin: "5px 15px",
          border: "solid 1px",
        }}
      
      >{card}</Card>
    </div>
  );
};
    