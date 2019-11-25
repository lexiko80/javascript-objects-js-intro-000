var playlist = { 'Tupac' : "All Eyez On Me"};

function updatePlaylist(playlist, artist, song){
  return Object.assign({}, playlist, { artist : song })
}
