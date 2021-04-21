"""
This mock Camera API is mean to simulate the capability of depth sensing Camera
"""

class Camera:

    def populate_frame(self):
        """
        Returns:
            simulate the process of reading a frame from camera
        """
        return 1

    def get_distance(self, distance):
        """
        Returns:
            distance measurement between user and camera
        """
        return distance



