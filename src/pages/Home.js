import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBookOpen, FaUsers, FaCalendarAlt, FaComments } from 'react-icons/fa';

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray;

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
      }
      draw() {
        const particleColor = getComputedStyle(document.body).getPropertyValue('--particle-color');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = particleColor;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      particlesArray = [];
      let numberOfParticles = (canvas.height * canvas.width) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * .4) - .2;
        let directionY = (Math.random() * .4) - .2;
        particlesArray.push(new Particle(x, y, directionX, directionY, size));
      }
    };

    const connect = () => {
        let opacityValue = 1;
        const particleColor = getComputedStyle(document.body).getPropertyValue('--particle-color');
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                               ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = `rgba(${parseInt(particleColor.slice(1,3),16)},${parseInt(particleColor.slice(3,5),16)},${parseInt(particleColor.slice(5,7),16)},${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
      }
      connect();
    };

    init();
    animate();

    const handleResize = () => {
      setCanvasSize();
      init();
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative text-center py-8 sm:py-16 animate-fadeInUp">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="gradient-text">A Hitchhiker's Guide to</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6">Physics at IISER Bhopal</h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-text-secondary mb-12 px-4">
          Your central hub for navigating the cosmos of the physics curriculum. Find course materials, helpful resources, and connect with peers and alumni.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
          <DashboardCard to="/courses" icon={<FaBookOpen />} title="Explore Courses" description="Dive into detailed guides for every course in the curriculum." />
          <DashboardCard to="/timetable" icon={<FaCalendarAlt />} title="Semester Timetable" description="View the weekly class schedule, venues, and instructors." />
          <DashboardCard to="/resources" icon={<FaRocket />} title="Interesting Resources" description="Discover curated papers, articles, and videos to fuel your curiosity." />
          <DashboardCard to="/contacts" icon={<FaUsers />} title="Connect with People" description="Find and connect with alumni and current students in the field." />
          <DashboardCard to="/chat" icon={<FaComments />} title="Physics Discussion Forum" description="Ask questions and chat with peers in a moderated, exclusive forum." />
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ to, icon, title, description }) => (
  <Link
    to={to}
    className="bg-background-secondary/80 backdrop-blur-sm p-8 rounded-xl border border-border-color transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center shadow-lg"
  >
    <div className="text-5xl text-accent-primary mb-5">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-text-primary">{title}</h3>
    <p className="text-text-secondary text-sm">{description}</p>
  </Link>
);

export default Home;

