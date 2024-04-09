# Real-Time Object Detection with Webcam

This project demonstrates real-time object detection using a webcam. It uses the SSD MobileNet V2 model pretrained on the COCO dataset to detect objects in the camera stream. When the model detects a specific object (in this case, "people"), it plays a sound.

## Prerequisites

- Modern web browser supporting `navigator.mediaDevices.getUserMedia()`.
- Audio file to play when the object is detected.

## Usage

1. Clone this repository to your local machine.
2. Ensure you have an audio file (e.g., `test.mp3`) in the project directory.
3. Open `index.html` in your web browser.
4. Allow access to your webcam when prompted.
5. The camera stream will start, and the model will begin detecting objects in real-time.
6. If a specified object (e.g., "people") is detected, a sound will be played.

## How it Works

- The project uses the `cocoSsd` object detection model, which is loaded asynchronously using `cocoSsd.load()`.
- The webcam stream is obtained using `navigator.mediaDevices.getUserMedia()`.
- The video feed from the webcam is drawn onto a canvas element.
- The canvas image data is fed into the object detection model to detect objects in the video frame.
- If a specified object is detected (e.g., "people"), a sound is played.
- Object detections are displayed in real-time on the webpage.

## Customization

- You can customize the object to be detected by modifying the condition in the `processVideoFrame()` function.
- Adjust the volume of the sound played by modifying the `audio.volume` property in the `playDogBarkSound()` function.
- Ensure that your audio file is in the correct format (e.g., MP3) and located in the project directory.

## Credits

- This project utilizes the COCO-SSD model for object detection.
- Audio file sourced from [your_source_here].

## License

[License information here, if applicable.]

