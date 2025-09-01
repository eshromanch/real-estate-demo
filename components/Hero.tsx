'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Play, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Floating particles component
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
          initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
          animate={{
            x: [`${particle.x}vw`, `${particle.x + 10}vw`, `${particle.x}vw`],
            y: [`${particle.y}vh`, `${particle.y - 20}vh`, `${particle.y}vh`],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated background grid
const BackgroundGrid = () => {
  return (
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const heroStats = [
    { number: "50+", label: "Projects Completed", delay: 1.2 },
    { number: "5K+", label: "Happy Families", delay: 1.4 },
    { number: "15+", label: "Years Experience", delay: 1.6 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      {/* Animated background elements */}
      <BackgroundGrid />
      <FloatingParticles />
      
      {/* Mouse follower gradient */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(251,146,60,0.1) 0%, transparent 70%)',
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Background image with parallax */}
      <motion.div 
        className="absolute inset-0 z-0" 
        style={{ y: y1 }}
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury Architecture"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </motion.div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 z-50 p-6 lg:p-8"
      >
        <div className="container mx-auto flex justify-between items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl text-white relative"
          >
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              LuxeEstates
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </motion.div>

          <div className="hidden md:flex space-x-8 text-white/90">
            {['About', 'Projects', 'Gallery', 'Services', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group cursor-pointer transition-colors duration-300"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -2 }}
              >
                <span className="group-hover:text-orange-400 transition-colors duration-300">
                  {item}
                </span>
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-orange-400 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button
              variant="outline"
              className="border-orange-400/30 text-orange-400 hover:bg-orange-400/10 backdrop-blur-sm"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main content */}
      <div className="container mx-auto px-6 lg:px-12 text-center z-30 relative">
        {/* Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          <span className="text-orange-400 text-sm">Leading Real Estate Developer in Bangladesh</span>
        </motion.div>

        {/* Main heading with staggered animation */}
        <div className="mb-8 relative">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-4"
          >
            {['Building', 'Bangladesh\'s', 'Future'].map((word, index) => (
              <motion.span
                key={word}
                className="inline-block mr-6"
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.2,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-4xl md:text-6xl lg:text-7xl text-transparent bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text leading-none"
            style={{ originX: 0 }}
          >
            Together
          </motion.div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Creating modern residential and commercial spaces across Bangladesh with 
          <span className="text-orange-400"> innovative design</span> and 
          <span className="text-orange-400"> quality construction</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                View Our Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="group border-white/20 text-white hover:bg-white/5 px-8 py-4 rounded-full backdrop-blur-sm relative overflow-hidden"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Our Story
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {heroStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="text-center group"
            >
              <motion.div
                className="text-4xl md:text-5xl text-white mb-2 group-hover:text-orange-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/60 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white/60 cursor-pointer hover:text-orange-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2 tracking-wider">SCROLL</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Parallax decorative elements */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 left-10 w-32 h-32 border border-orange-400/10 rounded-full z-20"
      />
      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-1/4 right-10 w-24 h-24 border border-orange-400/10 rounded-full z-20"
      />
    </section>
  );
}