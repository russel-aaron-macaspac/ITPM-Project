console.log("Welcome to the IT Project Management homepage!");

// Initialize particles
tsParticles.load("particles-js", {
  background: {
    color: { value: "#0c0c0c" },
  },
  particles: {
    number: { value: 80 },
    size: { value: 2 },
    color: { value: "#ffffff" },
    links: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
    },
    modes: {
      repulse: { distance: 80 },
    },
  },
});
