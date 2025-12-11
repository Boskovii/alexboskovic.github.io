---
layout: page
title: Dynamic Simulation of Hip-Knee Joint Mechanics
description: Double-pendulum model for analyzing human lower-limb dynamics and stability
img: assets/img/biomechanics_system_dynamics.png
importance: 3
category: course projects
_styles: |
  mjx-sub {
    font-size: 0.7em !important;
  }
  mjx-sup {
    font-size: 0.7em !important;
  }
  .mjx-msub > mjx-sub {
    font-size: 0.7em !important;
  }
  .mjx-msup > mjx-sup {
    font-size: 0.7em !important;
  }
  .plot-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }
  .plot-container figure {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .plot-container img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  .plot-container figcaption {
    text-align: center;
    margin-top: 0.5rem;
  }
---

**ME3017: System Dynamics**  
*Instructor: Prof. Shreyas Kousik* | Jan 2025 – May 2025

As part of a team project, I developed a nonlinear dynamic model of the coupled hip-knee-ankle system to analyze how applied joint torques produce leg motion in the sagittal plane. The project involved deriving the governing equations for a double pendulum with torsional springs and dampers, parameterizing the model using anthropometric data, linearizing the system around equilibrium, and comparing nonlinear vs. linear predictions for real movement tasks.

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0" style="max-width: 650px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/biomechanics_og.jpeg" 
           caption="Two-link thigh–shank system used for dynamic modeling." 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Model Formulation

Using anthropometric parameters approximated from literature values, I modeled the thigh and shank as uniform cylinders and computed their masses, lengths, and moments of inertia. Passive joint stiffness was represented using torsional springs, and synovial/muscular damping was modeled via torsional dampers. These elements were assembled into nonlinear dynamic equations governing hip and knee motion.

Key modeling components included:

- Nonlinear gravitational torques using $\sin(\theta)$ and $\cos(\theta)$  
- Torsional spring-damper elements at both joints  
- Joint-angle constraints to prevent hyperextension  
- Forward-kinematics calculation of foot position  

The differential equation of motion for the thigh is given by Equation 1.

\begin{equation}
J_T \ddot{\theta}_T = -k_H \theta_T - k_S (\theta_T - \theta_S) - b_S (\dot{\theta}_T - \dot{\theta}_S) - b_T \dot{\theta}_T + \frac{1}{2} m_T g l_T \cos(\theta_T) + \tau_H + \tau_K
\label{eq:thigh}
\end{equation}

The differential equation of motion for the shank is given by Equation 2.

\begin{equation}
J_S \ddot{\theta}_S = -k_S (\theta_S - \theta_T) - b_S (\dot{\theta}_S - \dot{\theta}_T) + \frac{1}{2} m_S g l_S \cos(\theta_S) + \tau_K
\label{eq:shank}
\end{equation}

## Nonlinear Simulation of Human Movements

To evaluate the system’s behavior, I designed torque inputs representing three different sagittal-plane actions:

- **Karate front kick** – impulsive knee extension supported by stabilizing hip torque  
- **Soccer ball strike** – coordinated ramped torques across both joints  
- **Stationary cycling** – sinusoidal hip and knee torques over a 1-second cycle  

For each scenario, I simulated:

- Joint angles and angular velocities  
- Segment trajectories for thigh, shank, and foot  
- Sensitivity of motion to torque scaling and timing  

This project revealed the challenges of modeling biological systems with chaotic behavior, as the double-pendulum formulation occasionally produced unrealistic motion patterns. The resulting joint motion was highly sensitive to torque profiles, damping ratios, and initial conditions. 

### Karate Front Kick

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/karate_initialconfig.png" 
           caption="Initial configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/karate_finalconfig.png" 
           caption="Final configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/karate_xpos.png" 
           caption="X position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/karate_ypos.png" 
           caption="Y position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Soccer Ball Strike

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/soccer_initialconfig.png" 
           caption="Initial configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/soccer_finalconfig.png" 
           caption="Final configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/soccer_xpos.png" 
           caption="X position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/soccer_ypos.png" 
           caption="Y position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Stationary Cycling

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/cycle_initialconfig.png" 
           caption="Initial configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/cycle_finalconfig.png" 
           caption="Final configuration" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/cycle_xpos.png" 
           caption="X position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/cycle_ypos.png" 
           caption="Y position" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Linearization & Analysis

I linearized the system around the upright configuration $$(\theta_T = \theta_S = 0)$$, producing a 4-state representation suitable for classical control analysis. This enabled:

- **Eigenvalue-based stability assessment**  
- **Bode analysis** revealing natural frequencies and cross-coupling  
- **Impulse-response characterization** of damping and settling behavior  

The eigenvalues of the linearized system are:

$$\lambda_1 = -3.2312 + 9.5632i, \quad \lambda_2 = -3.2312 - 9.5632i, \quad \lambda_3 = -0.2609 + 3.3402i, \quad \lambda_4 = -0.2609 - 3.3402i$$

The linearized system is stable, as all eigenvalues have negative real parts. This stability analysis confirmed that small perturbations around the equilibrium configuration will decay over time.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/bode_thetat_th.png" 
           caption="Bode plot: $\theta_T$ response to $\tau_H$" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/bode_thetat_tk.png" 
           caption="Bode plot: $\theta_T$ response to $\tau_K$" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/bode_thetas_th.png" 
           caption="Bode plot: $\theta_S$ response to $\tau_H$" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/bode_thetas_tk.png" 
           caption="Bode plot: $\theta_S$ response to $\tau_K$" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The linear model accurately predicted behavior only for small perturbations. For large angular displacements, such as cycling or kicking, the nonlinear model diverged significantly, illustrating the limits of using linear approximations when modeling human motion.

<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/karate_linearization.png" 
           caption="Karate front kick" 
           class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0 plot-container">
        {% include figure.liquid loading="eager" path="assets/img/soccer_linearization.png" 
           caption="Soccer ball strike" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm-6 mt-3 mt-md-0 plot-container" style="max-width: 500px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/cycle_linearization.png" 
           caption="Stationary cycling" 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>

To analyze transient response to small perturbations, I applied a Dirac delta (impulse) function rather than a step input, as muscles generate force through rapid contractions rather than sustained constant torques. An impulse of 15 Nm over 0.01 seconds it thus more physiologically realistic. The system exhibited small-magnitude oscillations (peak displacement < 0.17°) with surprisingly long settling times of approximately 20 seconds, consistent with the slightly underdamped behavior expected from our damping ratios.

<div class="row">
    <div class="col-sm-12 mt-3 mt-md-0" style="max-width: 800px; margin: 0 auto;">
        {% include figure.liquid loading="eager" path="assets/img/transient.png" 
           caption="Transient response of the linearized system to an impulse input of 15 Nm over 0.01 s." 
           class="img-fluid rounded z-depth-1" %}
    </div>
</div>



