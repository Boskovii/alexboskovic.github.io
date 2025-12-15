---
layout: page
title: Robotic Dynamometer
description: Custom motor-driven dynamometer for measuring dynamic human work loop and force control
img: assets/img/dyno_side.png
importance: 2
category: research
---

**Physiology of Wearable Robotics Lab**  
*Principal Investigator: Prof. Gregory Sawicki* | Aug 2024 – May 2025

I designed and built a robotic dynamometer used to study human muscle–tendon dynamics. The full system includes a high-precision rotary torque transducer, multi-axis load cells, shear sensing, and interfaces for EMG, ultrasound, and tendon tensiometers. My motor-driven actuation subsystem replaced an open-source weight-stack system with a platform capable of variable-speed and complex loading profiles. The primary goal was to create a system that could **accurately measure isokinetic human plantar-flexion torque** while supporting physiologically meaningful test conditions.

My contributions spanned **diagnosing mechanical limitations in existing platforms**, **designing a new motor-driven dynamometer**, **selecting components through torque-speed modeling**, and **fabricating a structurally rigid, high-force prototype** suitable for human testing.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/dyno_iso.png" caption="Motor-driven robotic dynamometer designed for ankle work loop experiments." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Improving Open-Source Force Plate Design

My first role in the lab involved evaluating the design of an open-source ankle work-loop platform. Structural flexion in the force plate was corrupting sensor readings, thus preventing isolation of soleus muscle activity. Through inspection and testing, I identified the exact weak points responsible for the deformation and redesigned the structural components to increase rigidity and improve measurement fidelity. These corrections created a stable baseline for collecting accurate biomechanical signals across the platform’s multimodal sensing suite.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/schematic.png" caption="Open-source ankle work-loop platform used before developing motor-driven dynamometer." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Mechanical Design of Motor-Driven Dynamometer

To support isokinetic and variable-speed loading, I designed a new motor-driven dynamometer in Fusion 360 to replace the weight stack entirely. The system integrates a high-torque motor and gearbox that can apply controlled rotational loads at the ankle joint across a wide range of velocities. This mechanical redesign enables dynamic loading patterns that better reflect real-world conditions and expands the types of work loop experiments the ergometry platform can perform.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/dyno_side_page.png" caption="Motor-driven dynamometer with reinforced frame and custom motor mount." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Component Selection & Torque-Speed Analysis

I used MATLAB to generate torque-speed curves for candidate motors and gearboxes, ensuring the final selection could:

- **exceed maximum human plantar-flexion torque**,  
- maintain stable control across all test speeds, and  
- operate without saturating or distorting measurements.

By comparing modeled system response to biomechanical datasets, I verified that the dynamometer could safely handle the full range of human performance during plantar-flexion tasks and interface cleanly with the open-source force plate subassembly and torque transducer.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 600px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/TorqueSpeed.png" caption="Torque-speed modeling used to select motor and gearbox for isokinetic testing." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


## Fabrication & Safety Features

I fabricated aluminum brackets and structural bars using waterjet cutting, a chop saw, and a drill press. I designed a reinforced steel motor mount for assembly via welding to minimize frame deformation under high loads. I also machined steel hard-stop bars to prevent ankle overextension and ensure safe operation during high-force testing. These fabrication steps were critical for creating a rigid, high-fidelity measurement system capable of safely delivering and withstanding large torques.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Bars.jpg" caption="Aluminum structural beams and supporting plate; steel hard-stop bars for safety." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/AssemblyDyno.png" caption="Aluminum 80/20 bars and waterjet-cut brackets assembled with force plate subassembly and torque transducer." class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/WaterjetCuts.jpg" caption="Waterjet-cut motor mount components for assembly via welding." class="img-fluid rounded z-depth-1" %}
    </div>
</div>


