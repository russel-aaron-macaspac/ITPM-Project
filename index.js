tsParticles.load("tsparticles", {
  fullScreen: { enable: false },
  background: { color: "#0a0a0a" },
  particles: {
    number: { value: 50 },
    size: { value: 2.5 },
    move: { enable: true, speed: 1 },
    opacity: { value: 0.2 },
    shape: { type: "circle" },
    links: {
      enable: true,
      color: "#64748b",
      distance: 110,
      opacity: 0.2
    }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
    modes: { repulse: { distance: 80 } }
  }
});
