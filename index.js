let playing = false;
let obj;

async function init() {
  // Load the pre-trained SSD MobileNet V2 model
  const model = await cocoSsd.load();
  obj = model; // Assign the loaded model to the obj variable
  console.log("obj", obj);
  await startCamera();
}

async function startCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({
    // video: { facingMode: "environment" }, // Rear camera
    video: { facingMode: "user" }, // Front camera
  });
  const nameContainer = document.getElementById("name");
  const videoElement = document.getElementById("camera-stream");
  videoElement.srcObject = stream;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  videoElement.addEventListener("play", async () => {
    requestAnimationFrame(processVideoFrame);
  });
  async function processVideoFrame() {
    if (!videoElement.paused && !videoElement.ended) {
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      let predictionClasses = "";
      const predictions = await obj.detect(imageData);
      for (const prediction of predictions) {
        predictionClasses += `${prediction.class}\n`;
        if (prediction.class === "people") {
          // Play Music
          playMusicSound();
        }
      }
      nameContainer.innerText = predictionClasses.trim();
      requestAnimationFrame(processVideoFrame);
    }
  }

  async function playMusicSound() {
    if (playing) return;
    playing = true;
    const audio = new Audio("./test.mp3");
    audio.addEventListener("ended", () => {
      playing = false;
    });
    audio.volume = 0.5; // Adjust volume
    await audio.play();
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await init();
});
