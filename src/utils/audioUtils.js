let audioContext;
let audioBuffer;

const initializeAudioContext = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }
};

const loadSound = async (url) => {
  try {
    if (!audioContext) {
      initializeAudioContext();
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch audio file: ${response.statusText}`);
    }

    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error('Error loading or decoding audio file:', error);
    throw error; // Rethrow to handle in preloadSound or playSound
  }
};

const preloadSound = async (url) => {
  if (!audioBuffer) {
    await loadSound(url);
  }
};

const playSound = async (url) => {
  try {
    if (!audioBuffer) {
      await loadSound(url);
    }

    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

export { preloadSound, playSound };
