var playlist = { '2pac' : 'All Eyez On Me'};

function updatePlaylist(playlist, artist, song){
  return Object.assign(playlist, {artist : song})
}
