let songs = [
  {
    title: "6 Days",
    artist: "Mahmut Orhan",
    album: "6 Days",
    year: 2019,
    play: function(){ document.getElementById('info').innerHTML = '<span class="song-prop">Title: '+this.title+'</span>'+
'<span class="song-prop">Artist: '+this.artist+'</span>'+
'<span class="song-prop">Album: '+this.album+'</span>'+
'<span class="song-prop">Year: '+this.year+'</span>';
    }
  },
  {
    title: "Back to the Matter",
    artist: "Wizkid",
    album: "Eyeyeye",
    year: 2013
  },
  {
    title: "Schhh",
    artist: "Mahmut Orhan",
    album: "New songs",
    year: 2021
  },
  {
    title: "Faded",
    artist: "Alan Walker",
    album: "Faded",
    year: 2016
  },
  {
    title: "All Eyez on me",
    artist: "Tupac",
    album: "All Eyez on Me Vol 1",
    year: 1996
  },
  {
    title: "Alone",
    artist: "Alan Walker",
    album: "Faded",
    year: 2016
  }
];

//list
function listSongs() {
  let songList = document.getElementById('songs');
  for(let i=0;i<songs.length;i++){
      songList.innerHTML += 
        '<li class="test'+[i]+'">'+songs[i].title+'</li>';
  }
}
listSongs();


//default
songs[0].play();

//next
let j = 0;
function next() {
  if (j >= songs.length) j = 0;
document.getElementById("info").innerHTML = 
    '<span class="song-prop">Title: '+songs[j].title+'</span>'+
    '<span class="song-prop">Artist: '+songs[j].artist+'</span>'+
    '<span class="song-prop">Album: '+songs[j].album+'</span>'+
    '<span class="song-prop">Year: '+songs[j].year+'</span>'
  j++;
}
//previous
function prev() {
  if (j <= 0) j = songs.length;
document.getElementById("info").innerHTML = 
    '<span class="song-prop">Title: '+songs[j-2].title+'</span>'+
    '<span class="song-prop">Artist: '+songs[j-2].artist+'</span>'+
    '<span class="song-prop">Album: '+songs[j-2].album+'</span>'+
    '<span class="song-prop">Year: '+songs[j-2].year+'</span>'
  j--;
}
//playPause
function playPause () {
  let ppBtn = document.getElementById('ppBtn');
  if(ppBtn.innerHTML === 'play'){
    ppBtn.innerHTML = 'pause';
  }
  else {
    ppBtn.innerHTML = 'play';
  }
}



