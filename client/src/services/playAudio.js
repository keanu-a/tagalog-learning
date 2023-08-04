async function playAudio(audioUrl) {
  try {
    const response = await fetch(
      `http://localhost:5000/api/v1/audio/${audioUrl}`
    );

    if (!response.ok) {
      console.log('Error playing audio');
      return;
    }

    const { audio } = await response.json();

    const foundAudio = new Audio(audio);
    foundAudio.play();
  } catch (error) {
    console.log('Error playing audio: ', error);
  }
}

export default playAudio;
