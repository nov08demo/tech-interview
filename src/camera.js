// Please use this as API lib, focus on the logic in main other than API implementation.
// This mock Camera API is mean to simulate the capability of depth sensing Camera

class Camera {
  constructor() {
    console.log(`A Camera instance is initiated`);
  }

  populateFrame = () => {
    // Returns:
    // simulate the process of reading a frame from camera

    return 1;
  };

  getDistance = (distance) => {
    // Returns:
    // distance measurement between user and camera
    return distance;
  };
}

module.exports = Camera;
