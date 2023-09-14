const drumKeys = document.querySelectorAll(".drum-key");

const drumSounds = {
  a: "./sounds/clap.mp3",
  s: "./sounds/bass-boom.mp3",
  d: "./sounds/bazile.mp3",
  f: "./sounds/drum.mp3",
  g: "./sounds/hip-hop.mp3",
  h: "./sounds/slap.mp3",
  j: "./sounds/snap.mp3",
  k: "./sounds/musical.mp3",
  l: "./sounds/snare.mp3",
};

window.addEventListener("keydown", function (event) {
  const key = event.key;
  const sound = drumSounds[key];
  const audio = new Audio(sound);
  audio.play();
});

// const handleKeyClick = (e) => {
//   const currentKey = e.currentTarget.id;
// };

// drumKeys.forEach((curKey) => {
//   curKey.addEventListener("click", handleKeyClick);
// });
