# Robotic Arm Control Web GUI

This web application allows real-time wireless control of a 6 Degree of Freedom (DOF) Robotic Arm. It is connected via a rosbridge server to facilitate seamless communication with the robotic arm.

## Prerequisites

Before using this application, ensure you have the following prerequisites:

- **ROS (Robot Operating System):** Install ROS on the system that controls the robotic arm. You can find installation instructions on the [ROS official website](http://www.ros.org/).

- **rosbridge_suite:** Install the `rosbridge_suite` package to enable communication between ROS and the web GUI. You can install it by following the instructions given below or in the [rosbridge_suite GitHub repository](https://github.com/RobotWebTools/rosbridge_suite).


## Installing rosbridge_suite

To install the `rosbridge_suite`, follow these commands:

```bash
# Install rosbridge_suite using apt
sudo apt-get install ros-<distro>-rosbridge-suite

Replace <distro> with your ROS distribution (e.g., kinetic, melodic).
```
## Usage

1. Clone this repository to your catkin workspace.


2. Source your ROS workspace
    ```bash
    source /path/to/your/ros/workspace/devel/setup.bash
    ```

3. Open the terminal and start roscore using the following command
   ```bash
   roscore
   ```

4. Run the ROSBridge server using the following command:
    ```bash
    roslaunch rosbridge_server rosbridge_websocket.launch
    ```
    
4. Launch the moveit.launch file using the following command:
   ```bash
   roslaunch ajgar_core ajgar_moveit.launch
   ```

5. Run the new_ik_solver.py using the following command:
   ```bash
   rosrun ajgar_core new_ik_solver.py
   ```

6. Open the `control_arm_GUI.html` file in your web browser.

7. Use the provided sliders to control the positions of the six joints of the robotic arm.

## Roslibjs
roslibjs is the standard ROS JavaScript library designed for interacting with ROS (Robot Operating System) from a web browser. 
It utilizes WebSockets to establish a connection with rosbridge, providing a communication channel for ROS functionality between the browser and the ROS environment. 
This library facilitates tasks such as subscribing to ROS topics, publishing messages, making service calls, and interacting with the ROS Parameter Server directly from a web page
You can learn more about it from [roslibjs- ROS Wiki](http://wiki.ros.org/roslibjs)



## Disclaimer

**Attention: This web GUI is developed by A.T.O.M Robotic Labs for educational and testing purposes. Please note the following:**

1. **Safety First:** Ensure proper safety measures are in place when operating the robotic arm. The developers emphasize the importance of adhering to safety protocols and guidelines during the use of this application.

2. **Educational Intent:** The web GUI is intended for educational purposes, providing a platform for learning and experimentation with robotic arm control.

3. **Use Responsibly:** Users are expected to use this application responsibly and ethically. The developers disclaim any responsibility for any misuse or accidents caused by the use of this application.

4. **No Warranty:** This software is provided "as is" without any warranty or guarantee. The developers make no representations or warranties of any kind concerning the suitability, reliability, or accuracy of the software.

By using this web GUI, you acknowledge that you have read, understood, and agreed to the terms mentioned above. If you do not agree with these terms, refrain from using the application.
