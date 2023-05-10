const shortHandMusicIcon = document.querySelector('.short-hand-music-icon');
const shortHandMusicSongname = document.querySelector(
  '.short-hand-music-song-name'
);
const shortHandMusicArtistname = document.querySelector(
  '.short-hand-music-artist-name'
);
const personalIcon = document.querySelector('.personal-icon');
const overLay = document.querySelector('.overlay');
let audioUsed = 'unused';
const overLayCover = document.querySelector('.overlay-cover');
const nextWallpaper = document.querySelector('.next-wallpaper');
const prevWallpaper = document.querySelector('.prev-wallpaper');
const infoDiv = document.querySelector('.infodiv');
const homeIndicator = document.querySelector('.home-indicator');
const calcBtn = document.querySelectorAll('.calculation-btn ');
const operationValueArray = [];
const answerValueArray = [];
const calcNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const equalToFunction = function () {
  document.querySelector('.operation-value').textContent = '';
  operationValueArray.length = 0;
  answerValueArray.length = 0;
  document.querySelector('.answer-value').style.fontSize = '40px';
  document.querySelector('.answer-value').style.color = '#CAB200';
};
// //  BACK-SPACE FUNCTIONALITY
const backSpaceFunction = function () {
  operationValueArray.pop();
  operationValue = operationValueArray.join('');
  document.querySelector('.operation-value').textContent = operationValue;
  answerValueArray.pop();
  answerValue = answerValueArray.join('');
  let answer = eval(answerValue);
  document.querySelector('.answer-value').textContent = answer;
};
document
  .querySelector('.back-space')
  .addEventListener('click', backSpaceFunction);
// // ASSIGNMENTS
// // EQUAL-TO OPERATION
document.querySelector('.equal-to').addEventListener('click', equalToFunction);
// - OPERATON FUNCTION - //
let operateMe = function (virtualValue, actualValue) {
  if (actualValue === '%') {
    actualValue = '/100*';
  } else if (actualValue === '^') {
    actualValue = '**';
  } else if (actualValue === '×' || virtualValue === '*') {
    virtualValue === '*' ? (virtualValue = '×') : (actualValue = '*');
  } else if (actualValue === '(') {
    if (
      calcNumbers.includes(operationValueArray[operationValueArray.length - 1])
    )
      actualValue = '*(';
  }
  operationValueArray.push(virtualValue);
  operationValue = operationValueArray.join('');
  answerValueArray.push(actualValue);
  answerValue = answerValueArray.join('');
  document.querySelector('.operation-value').textContent = operationValue;
  let answer = eval(answerValue);
  document.querySelector('.answer-value').textContent = answer;
  document.querySelector('.answer-value').style.fontSize = '30px';
  document.querySelector('.answer-value').style.color =
    'rgba(225, 225, 225, 1)';
};
//
//
for (let i = 0; i < calcBtn.length; i++) {
  calcBtn[i].addEventListener('click', function () {
    operateMe(calcBtn[i].textContent, calcBtn[i].textContent);
  });
}
//
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Backspace') backSpaceFunction();
  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    e.key === '+' ||
    e.key === '-' ||
    e.key === '(' ||
    e.key === ')' ||
    e.key === '*' ||
    e.key === '/' ||
    e.key === '%' ||
    e.key === '^' ||
    e.key === '.' ||
    e.key === 'e'
  ) {
    operateMe(e.key, e.key);
  }
});

// CLEAR ALL BUTTON
document.querySelector('.clear-all').addEventListener('click', function () {
  document.querySelector('.answer-value').textContent = '';
  document.querySelector('.operation-value').textContent = '';
  operationValueArray.length = 0;
  answerValueArray.length = 0;
});

//  PAGE MANIPULATION
// LEAVING APP
const homeButtonFunction = function () {
  homeIndicator.classList.remove('home-indicator-animation');
  document.querySelector('.home-indicator-animation').style.display = 'none';
  document.querySelector('.home-indicator').style.display = 'flex';
  homeIndicator.classList.add('home-indicator-animation');
  document
    .querySelector('.calculatorinterface')
    .classList.remove('change-page-entry');
  document
    .querySelector('.calculatorinterface')
    .classList.add('change-page-exit');
  document.querySelector('.music-player').classList.remove('change-page-entry');
  document
    .querySelector('.home-page-interface')
    .classList.remove('change-page-exit');
  document
    .querySelector('.home-page-interface')
    .classList.add('change-page-entry');
  document.querySelector('.calculatorextra').style.backgroundColor =
    'transparent';
  overLay.style.display = 'none';
  infoDiv.scroll(0, 0);
};
homeButtonFunction();
infoDiv.onscroll = function () {
  homeButtonFunction();
};
// overlay
// OPENING INFORMATION MODAL
personalIcon.addEventListener('click', function () {
  overLay.style.display = 'flex';
});
// CLOSING INFORMATION MODAL
overLayCover.addEventListener('click', function () {
  overLay.style.display = 'none';
});
//
// WALLPAPER SETTINGS CONTROL
let wallpaperNumber = 1;
nextWallpaper.addEventListener('click', function () {
  wallpaperNumber++;
  if (wallpaperNumber > 5) {
    wallpaperNumber = 1;
  }
  document.querySelector(
    '.home-page-interface'
  ).style.backgroundImage = `url(./images/mobilebackground${wallpaperNumber}.jpg)`;
});
prevWallpaper.addEventListener('click', function () {
  wallpaperNumber--;
  if (wallpaperNumber < 1) {
    wallpaperNumber = 5;
  }
  document.querySelector(
    '.home-page-interface'
  ).style.backgroundImage = `url(./images/mobilebackground${wallpaperNumber}.jpg)`;
});
// BACK TO CALCULATOR
document
  .querySelector('.calculator-icon')
  .addEventListener('click', function () {
    document
      .querySelector('.calculatorinterface')
      .classList.remove('change-page-exit');
    document
      .querySelector('.calculatorinterface')
      .classList.add('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.remove('change-page-entry');
    document
      .querySelector('.home-page-interface')
      .classList.add('change-page-exit');
    document.querySelector('.calculatorextra').style.backgroundColor =
      '#1C1C1C';
    document.querySelector('.infodiv').style.backgroundColor = 'transparent';
  });
// OPENING MUSIC PLAYER APP
const openMusicPlayerFunction = function () {
  document.querySelector('.music-player').classList.remove('change-page-exit');
  document.querySelector('.music-player').classList.add('change-page-entry');
  document
    .querySelector('.home-page-interface')
    .classList.remove('change-page-entry');
  document
    .querySelector('.home-page-interface')
    .classList.add('change-page-exit');
  if (audioUsed === 'unused') {
    audio.src = songAddress.songSRC[currentSongArrayNumber];
    document
      .querySelector('.music-player-shorthand')
      .classList.remove('remove-display');
  }
  musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
  nowPlayingIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  songName.textContent = songDetails.songNames[currentSongArrayNumber];
  artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
  audioUsed = 'used';
};
document
  .querySelector('.music-player-icon')
  .addEventListener('click', openMusicPlayerFunction);
//
// MUSIC APP CONTROLS
const musicPlayerApp = document.querySelector('.music-player');
const nowPlayingIcon = document.querySelector('.now-playing-icon');
let songName = document.querySelector('.song-name');
let artistName = document.querySelector('.artist-name');
let audio = document.querySelector('.audio');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let playClassList = play.classList;
let pauseClassList = pause.classList;
let currentSongArrayNumber = 0;
//- ASSIGNING ARRAYS AND OBJECTS -//
const songDetails = {
  songNames: [
    'Toast',
    'Transfiguration',
    'Lovesong',
    'Tapestry',
    'Wild dreams',
    'The train',
    'Broken vessels',
  ],
  artistNames: [
    'Koffee ',
    'Hillsong Worship ',
    'Nathaniel Bassey ',
    'Hillsong Worship ',
    'Burna boy ft Khalid ',
    'Jaymikee ft Lawrence oyor ',
    'Hillsong worship ',
  ],
};
const songIDFunction = function (artistName, songName) {
  let songInfo = artistName + songName;
  let songAbout = songInfo.toLowerCase().replaceAll(' ', '-');
  return songAbout;
};
const songID = [];
const songAddress = {
  songSRC: [],
  nowPlayingAlbumPicture: [],
};
// - AUTOMATING ANY UPDATE - //
const automatateUpdate = function () {
  for (let i = 0; i < songDetails.songNames.length; i++) {
    songID.push(
      songIDFunction(songDetails.artistNames[i], songDetails.songNames[i])
    );
    songAddress.songSRC.push('./Audio/' + songID[i] + '.mp3');
    songAddress.nowPlayingAlbumPicture.push('./Images/' + songID[i] + '.jpeg');
  }
};
automatateUpdate();
//
//- THIS FUNCTION WAS USED BOTH TO AUTOMATICALLY PLAY NEXT SONG AND ON CLICK  THE NEXT BUTTON -//
const PlayNextTrack = function () {
  currentSongArrayNumber < songID.length - 1
    ? currentSongArrayNumber++
    : (currentSongArrayNumber = 0);
  if (playClassList.contains('show-display')) {
    playClassList.remove('show-display');
    playClassList.add('remove-display');
    pauseClassList.remove('remove-display');
    pauseClassList.add('show-diplay');
  }
  audio.src = songAddress.songSRC[currentSongArrayNumber];
  audio.play();
  songName.textContent = songDetails.songNames[currentSongArrayNumber];
  musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
  nowPlayingIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
  shortHandMusicIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  shortHandMusicSongname.textContent =
    songDetails.songNames[currentSongArrayNumber];
  shortHandMusicArtistname.textContent =
    songDetails.artistNames[currentSongArrayNumber];
};
//
// - NEXT BUTTON - //
document
  .querySelector('.next-control')
  .addEventListener('click', PlayNextTrack);
document
  .querySelector('.next-control-shorthand')
  .addEventListener('click', PlayNextTrack);
//
const playPreviousTrack = function () {
  currentSongArrayNumber === 0
    ? (currentSongArrayNumber = songID.length - 1)
    : currentSongArrayNumber--;
  if (playClassList.contains('show-display')) {
    playClassList.remove('show-display');
    playClassList.add('remove-display');
    pauseClassList.remove('remove-display');
    pauseClassList.add('show-diplay');
  }
  audio.src = songAddress.songSRC[currentSongArrayNumber];
  audio.play();
  musicPlayerApp.style.backgroundImage = `url(${songAddress.nowPlayingAlbumPicture[currentSongArrayNumber]})`;
  nowPlayingIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  songName.textContent = songDetails.songNames[currentSongArrayNumber];
  artistName.textContent = songDetails.artistNames[currentSongArrayNumber];
  shortHandMusicIcon.src =
    songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
  shortHandMusicSongname.textContent =
    songDetails.songNames[currentSongArrayNumber];
  shortHandMusicArtistname.textContent =
    songDetails.artistNames[currentSongArrayNumber];
};
// - PREVIOUS BUTTON - //
document
  .querySelector('.previous-control')
  .addEventListener('click', playPreviousTrack);
document
  .querySelector('.previous-control-shorthand')
  .addEventListener('click', playPreviousTrack);
//
// - PLAYING AND PAUSING - //
const playAudio = function () {
  playClassList.remove('show-display');
  document.querySelector('.play-shorthand').classList.remove('show-display');
  playClassList.add('remove-display');
  document.querySelector('.play-shorthand').classList.add('remove-display');
  pauseClassList.remove('remove-display');
  document.querySelector('.pause-shorthand').classList.remove('remove-display');
  pauseClassList.add('show-display');
  document.querySelector('.pause-shorthand').classList.add('show-display');
  audio.play();
};
const pauseAudio = function () {
  pauseClassList.remove('show-display');
  document.querySelector('.pause-shorthand').classList.remove('show-display');
  pauseClassList.add('remove-display');
  document.querySelector('.pause-shorthand').classList.add('remove-display');
  playClassList.remove('remove-display');
  document.querySelector('.play-shorthand').classList.remove('remove-display');
  playClassList.add('show-display');
  document.querySelector('.play-shorthand').classList.add('show-display');
  audio.pause();
};
play.addEventListener('click', playAudio);
document.querySelector('.play-shorthand').addEventListener('click', playAudio);
pause.addEventListener('click', pauseAudio);
document
  .querySelector('.pause-shorthand')
  .addEventListener('click', pauseAudio);

// - SHORTHAND -//
shortHandMusicIcon.src =
  songAddress.nowPlayingAlbumPicture[currentSongArrayNumber];
shortHandMusicSongname.textContent =
  songDetails.songNames[currentSongArrayNumber];
shortHandMusicArtistname.textContent =
  songDetails.artistNames[currentSongArrayNumber];
//
////////////////////////////
// SETTING DATE AND TIME
const monthsOfAYear = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];
const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
// - ASSIGNING - //
setInterval(function () {
  if (audio.paused) {
    pauseAudio();
  } else {
    playAudio();
  }
  if (audio.ended) {
    PlayNextTrack();
  }
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let day = weekDays[fullDate.getDay()];
  let month = monthsOfAYear[fullDate.getMonth()];
  let date = fullDate.getDate();
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  document.querySelector('.current-hours').textContent = hours;
  document.querySelector('.current-minutes').textContent = ':' + minutes;
  document.querySelector('.day').textContent = day + ',';
  document.querySelector('.month').textContent = month;
  document.querySelector('.date').textContent = date;
}, 1000);
