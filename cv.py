"""
This mock CV Producer API is mean to simulate the capability of OpenCV library
"""

class CVProducer:

    def recognize_face(self, name):
        """
        Returns:
            name of the user recognized by Face Recongnation algorithm
        """
        return name
    
    def detect_face(self, hasFace):
        """
        Returns:
            if there is a face in the current frame
        """
        return hasFace

    def detect_gesture(self, gesture):
        """
        Returns:
            gesture(i.e. "thumb up") detected by gesture detection model 
        """
        return gesture

    def detect_sentiment(self, sentiment):
        """
        Returns:
            user's sentiment(i.e. "happy") detected by sentiment detection model
        """
        return sentiment


