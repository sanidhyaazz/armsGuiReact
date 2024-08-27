import React, { useEffect } from 'react';
// import ROSLIB from 'roslib';

const cameraFeedStyle={
    marginTop: "20px", 
    marginBottom: "20px"
}

const CameraFeed = () => {
//   useEffect(() => {
//     const ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });

//     ros.on('connection', () => console.log('Connected to ROS'));
//     ros.on('error', (error) => console.error('Error connecting to ROS:', error));
//     ros.on('close', () => console.log('Connection to ROS closed'));

//     const listener = new ROSLIB.Topic({
//       ros: ros,
//       name: '/kinect/color/image_raw/compressed',
//       messageType: 'sensor_msgs/CompressedImage',
//     });

//     listener.subscribe((message) => {
//       const img = document.getElementById('image');
//       img.src = 'data:image/jpeg;base64,' + message.data;
//     });
//   }, []);

  return (
    <div className ="camera-feed">
            <h1 style={cameraFeedStyle}>Camera Feed</h1>
            <img id="image" src="" width="90%" height="auto" />
        </div>
  );
};

export default CameraFeed;

