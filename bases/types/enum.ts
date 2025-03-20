(() => {
  enum AudioLevel {
    min = 0,
    medium,
    max = 10,
  }

  let currentAudio = AudioLevel.min;

  console.log(currentAudio);
  console.log(AudioLevel);
})();
