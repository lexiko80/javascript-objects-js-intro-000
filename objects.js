var playlist = { 'Tupac' : "All Eyez On Me"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
}
