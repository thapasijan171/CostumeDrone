# Costume Drone
## Overview
In this Projects, the focus is on creating a 3D drone customization system. The tutorial walks through the process of selecting and changing various components of a drone, including motors, propellers, and cameras.

### Key Concepts
1. Customization Components
    - Motors: Different versions of motors can be selected to enhance the drone's performance.
    - Propellers: Options for various propeller designs are available for customization.
    - Cameras: Users can choose from multiple camera types to suit their needs.

2. Process of Customization
    - The video demonstrates how to interactively change components of the drone.
    - Users can see a live preview of the drone as they make selections.

3. Technical Steps
    - Downloading Templates:
        - Copy the provided link to download the project template.
        - Use the terminal command `git clone https://github.com/thapasijan171/CostumeDrone.git` to download the code.
        - Navigate to the project folder and run npm install to install necessary dependencies like Tree, GSAP, and DUI for animations.

4. Setting Up the Scene
    - Background and Lighting:
        - Set a background color for the scene using `scene.background = new THREE.Color(0x393939);`.
        - Add three types of lights:
            - Directional Light:
                - Color: 0xFCFCFC
                - Intensity: 4.3
                - Position: (0, 6, 0)
                - Shadow map size: 2048 x 2048
            - Ambient Light:
                - Color: 0x208080
                - Intensity: 0.61

### Important Tips
- Ensure all dependencies are correctly installed before starting the project.
- Experiment with different light settings to achieve the desired visual effects in the scene.
- Follow along with the video to understand the coding aspects and how they relate to the customization features.
