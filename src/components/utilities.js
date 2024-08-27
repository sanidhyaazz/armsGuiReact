import ROSLIB from 'roslib';

const ros = new ROSLIB.Ros({
    url: 'ws://localhost:9090'
});

ros.on('connection', function () {
    console.log('Connected to ROS');
});

ros.on('error', function (error) {
    console.error('Error connecting to ROS:', error);
});

ros.on('close', function () {
    console.log('Connection to ROS closed');
});

const rosTopic = new ROSLIB.Topic({
    ros: ros,
    name: '/slider',
    messageType: 'std_msgs/Float64MultiArray'
});

const listener = new ROSLIB.Topic({
    ros: ros,
    name: '/kinect/color/image_raw/compressed',
    messageType: 'sensor_msgs/CompressedImage'
});

listener.subscribe(function (message) {
    var img = document.getElementById('image');
    img.src = 'data:image/jpeg;base64,' + message.data;
});

export function  publishJointAngles(angles) {
    const message = new ROSLIB.Message({
        data: angles
    });
    rosTopic.publish(message);
}

export function  setLightTheme() {
    document.body.classList.remove('dark-theme');
    updateStyles();
}

export function  setDarkTheme() {
    document.body.classList.add('dark-theme');
    updateStyles();
}

let lastPublishedValues = Array.from({ length: 5 }, () => 0);
let publishTimeout;
let lastPublishedTime = 0;

export function  updateSliderValue(sliderId, valueId, radiansId) {
    const slider = document.getElementById(sliderId);
    const valueLabel = document.getElementById(valueId);
    const radiansLabel = document.getElementById(radiansId);
    const degrees = slider.value;
    const radians = (degrees * Math.PI) / 180;

    valueLabel.textContent = degrees;
    radiansLabel.textContent = `(${degrees}° = ${radians.toFixed(2)} rad)`;

    const jointAngles = Array.from(document.querySelectorAll('.joint-slider input')).map(s => {
        const degrees = parseFloat(s.value);
        return (degrees * Math.PI) / 180;
    });
    if (JSON.stringify(jointAngles) !== JSON.stringify(lastPublishedValues)) {
        clearTimeout(publishTimeout);
        publishTimeout = setTimeout(() => {
            console.log(jointAngles);
            publishJointAngles(jointAngles);
            lastPublishedValues = jointAngles;
        }, 800);
    }
}

export function  updateStyles() {
    const isDarkTheme = document.body.classList.contains('dark-theme');
    const form = document.getElementById('controlForm');

    document.body.style.backgroundColor = isDarkTheme ? '#2c3e50' : '#f0f0f0';
    document.body.style.color = isDarkTheme ? '#ecf0f1' : '#333';

    form.style.backgroundColor = isDarkTheme ? '#34495e' : '#ecf0f1';
    form.style.color = isDarkTheme ? '#ecf0f1' : '#333';

    updateSliderStyles();
}

export function  updateSliderStyles() {
    const sliders = document.querySelectorAll('input[type="range"]');
    const isDarkTheme = document.body.classList.contains('dark-theme');

    sliders.forEach(slider => {
        slider.style.backgroundColor = isDarkTheme ? '#555' : '#f8f8f8';
        slider.style.color = isDarkTheme ? '#fff' : '#333';
        slider.style.border = isDarkTheme ? '1px solid #555' : '1px solid #ddd';
    });
}

export function  resetSliders() {
    const sliders = document.querySelectorAll('.joint-slider input[type="range"]');
    sliders.forEach(slider => {
        slider.value = 0;
        const valueId = slider.id + 'Value';
        const radiansId = slider.id + 'Radians';
        document.getElementById(valueId).textContent = '0';
        document.getElementById(radiansId).textContent = '(0 rad)';
    });
    publishJointAngles(Array.from({ length: 6 }, () => 0));
}

export function  randomizeSliders() {
    const sliders = document.querySelectorAll('.joint-slider input[type="range"]');
    sliders.forEach(slider => {
        const randomValue = Math.floor(Math.random() * (parseInt(slider.max) - parseInt(slider.min) + 1)) + parseInt(slider.min);
        slider.value = randomValue;
        const valueId = slider.id + 'Value';
        const radiansId = slider.id + 'Radians';
        document.getElementById(valueId).textContent = randomValue;
        document.getElementById(radiansId).textContent = '(' + (randomValue * Math.PI / 180).toFixed(2) + ' rad)';
    });
    const jointAngles = Array.from(sliders).map(slider => parseFloat(slider.value) * Math.PI / 180);
    publishJointAngles(jointAngles);
}

