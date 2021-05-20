// Please use this as API lib, focus on the logic in main other than API implementation.
// This mock CV Producer API is mean to simulate the capability of OpenCV library

class CVProducer {
  constructor() {
    console.log(`A CVProducer instance is initiated`);
  }

  recognizeFace = (name) => {
    // Returns:
    // name of the user recognized by Face Recognition algorithm

    return name;
  };

  detectFace = (hasFace) => {
    // Returns:
    // if there is a face in the current frame

    return hasFace;
  };

  detectGesture = (gesture) => {
    // Returns:
    //     gesture(i.e. "thumb up") detected by gesture detection model

    return gesture;
  };

  detectSentiment = (sentiment) => {
    // Returns:
    //     user's sentiment(i.e. "happy") detected by sentiment detection model
    return sentiment;
  };
}

module.exports = CVProducer;
