import React, { useEffect, useRef } from "react";
import "../styles/ParticleBackground.css";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    // Check if device is mobile
    const isMobile = window.innerWidth <= 768;
    const isSmallMobile = window.innerWidth <= 480;

    if (isMobile) {
      canvas.classList.add("mobile");
    }

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        // Smaller particles on mobile
        if (isSmallMobile) {
          this.size = Math.random() * 1.5 + 0.5; // 0.5-2px on small mobile
        } else if (isMobile) {
          this.size = Math.random() * 2 + 0.5; // 0.5-2.5px on mobile
        } else {
          this.size = Math.random() * 3 + 1; // 1-4px on desktop
        }

        // Slower movement on mobile
        if (isMobile) {
          this.speedX = Math.random() * 0.5 - 0.25;
          this.speedY = Math.random() * 0.5 - 0.25;
        } else {
          this.speedX = Math.random() * 0.8 - 0.4;
          this.speedY = Math.random() * 0.8 - 0.4;
        }

        this.color = `rgba(${Math.random() * 100 + 155}, ${
          Math.random() * 100 + 155
        }, ${Math.random() * 100 + 155}, ${isMobile ? 0.6 : 0.8})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles function - defined before being used
    const createParticles = () => {
      particles = [];
      // Fewer particles on mobile
      const particleCount = isSmallMobile ? 50 : isMobile ? 80 : 150;

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Recreate particles when window is resized
      createParticles();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Draw connections between particles
    const drawConnections = () => {
      // Shorter connection distance on mobile
      const connectionDistance = isMobile ? 120 : 200;
      const connectionOpacity = isMobile ? 0.2 : 0.3;
      const lineWidth = isMobile ? 1 : 1.5;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${
              connectionOpacity * (1 - distance / connectionDistance)
            })`;
            ctx.lineWidth = lineWidth;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      animationFrameId = requestAnimationFrame(animate);
    };

    createParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-background" />;
}

export default ParticleBackground;
