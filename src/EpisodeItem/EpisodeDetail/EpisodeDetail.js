import * as React from 'react';
import './EpisodeDetail.css'
import CharactersProvider from '../../RickAndMortyApiClient/CharactersProvider';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Box } from '@material-ui/system';
import { Typography } from '@material-ui/core';

export default function EpisodeDetail(props) {
  
    const [characters, setCharacters] = React.useState(null);

    var display = props.display;

    if ('block' === display && !characters) {
      getCharactersDetails(props.episodeDetail);
    }

    function getCharactersDetails(details) {
      var charactersIds = [];
      if (Array.isArray(details)) {
        details.forEach(element => {
          charactersIds.push(parseInt(element.replace('https://rickandmortyapi.com/api/character/', ''))) 
        });
      }

      CharactersProvider.getByIds(charactersIds).then((response) => {
        setCharacters(response.data)
      });
    }

    if (!characters) {
      return (
        <div className="EpisodeDetail" key={props.index} style={{display: display}}>
          "Characters are loading..."
        </div>
      )};

    return (
      <div className="" style={{display: display}}>
        {characters.map((character, index) => (
          <div key={index} >
            <Card sx={{ display: 'flex' , flex: 'auto'}}>
              <Box sx={{ display: 'flex', flexDirection: 'auto' }}>
                  <img src={character.image} className="characterThumbnail" alt={character.name}/>
                  <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography component="div" variant="h5">
                    {character.name}
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    {character.species} - {character.gender}
                  </Typography>
                </CardContent>
                <CardContent sx={{ flex: '1 1 auto' }}>
                  <Typography variant="subtitle2" color="text.secondary" component="div">
                    From: {character.origin.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" component="div">
                    Last seen at: {character.location.name}
                  </Typography>
                </CardContent>
                <Typography variant="caption" color={'Alive' === character.status ? 'green' : 'red'} component="div">
                  {character.status}
                </Typography>
              </Box>
            </Card>
          </div>
        ))}
      </div>
    );
};
    