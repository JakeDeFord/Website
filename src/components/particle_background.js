// particle_background.js
import React from 'react';
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    detectsOn: "parent", // Limit interaction to the container element
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push"
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse"
                        },
                        resize: true
                    },
                    modes: {
                        push: {
                            quantity: 4
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        }
                    }
                },
                particles: {
                    color: {
                        value: "#00ff00"
                    },
                    links: {
                        color: "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce"
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800
                        },
                        value: 80
                    },
                    opacity: {
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        value: { min: 1, max: 5 }
                    }
                },
                detectRetina: true,
                /* Set width and height to 100% */
                width: "100%",
                height: "100%"
            }}
        />
    );
};

export default ParticleBackground;
