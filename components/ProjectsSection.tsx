'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MapPin, Calendar, Building, Users, ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "Dhaka Heights Residential Complex",
    location: "Dhanmondi, Dhaka",
    status: "Ongoing",
    completion: "December 2025",
    images: [
      "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    apartments: 120,
    floors: 15,
    investment: "$15M",
    description: "A premium residential complex offering modern amenities and luxury living in the heart of Dhanmondi.",
    highlights: ["Swimming Pool & Gym", "24/7 Security", "Rooftop Garden", "Smart Home Features"]
  },
  {
    id: 2,
    title: "Gulshan Commercial Tower",
    location: "Gulshan, Dhaka",
    status: "Completed",
    completion: "January 2024",
    images: [
      "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NTY3NTI1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybg%3D%3D&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1460472178825-e5240623afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMG1vZGVybg%3D%3D&ixlib=rb-4.1.0&q=80&w=1080"
            ],
    apartments: 80,
    floors: 20,
    investment: "$25M",
    description: "State-of-the-art commercial spaces designed for modern businesses in Gulshan's prime location.",
    highlights: ["Smart Building Technology", "Co-working Spaces", "Conference Halls", "Premium Parking"]
  },
  {
    id: 3,
    title: "Chittagong Waterfront Residency",
    location: "Panchlaish, Chittagong",
    status: "Planning",
    completion: "June 2026",
    images: [
      "https://images.unsplash.com/photo-1710330758934-865ce4e4f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NTY2NzQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRlcmZyb250JTIwaG91c2U%3D&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB2aWV3fGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    apartments: 200,
    floors: 25,
    investment: "$40M",
    description: "Luxury waterfront living with recreational facilities and commercial spaces in Chittagong.",
    highlights: ["Waterfront Views", "Private Marina", "Shopping Complex", "Resort-style Amenities"]
  }
];

const statusColors = {
  "Completed": "bg-emerald-500 text-white",
  "Ongoing": "bg-blue-500 text-white", 
  "Planning": "bg-orange-500 text-white"
};

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto advance carousel
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === projects[activeProject].images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [activeProject, autoPlay]);

  const nextImage = () => {
    setCurrentImageIndex(prev => 
      prev === projects[activeProject].images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? projects[activeProject].images.length - 1 : prev - 1
    );
  };

  const selectProject = (index: number) => {
    setActiveProject(index);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-orange-500/20"
          >
            <Building className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm uppercase tracking-wider">Our Projects</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
            Transforming
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
            >
              Urban Landscapes
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of groundbreaking developments that are reshaping Bangladesh&apos;s 
            architectural landscape with innovative design and sustainable construction practices.
          </motion.p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              onClick={() => selectProject(index)}
              className={`group relative px-6 py-4 rounded-2xl transition-all duration-500 backdrop-blur-sm border-2 ${
                activeProject === index
                  ? 'border-orange-500 bg-orange-500/20 text-white'
                  : 'border-white/20 bg-white/5 text-slate-300 hover:border-orange-400/50 hover:bg-orange-400/10'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm">{project.title}</span>
                  <Badge className={`text-xs ${statusColors[project.status as keyof typeof statusColors]} border-0`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="text-xs opacity-70 flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  {project.location}
                </div>
              </div>
              
              {activeProject !== index && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-2xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image Carousel */}
              <motion.div 
                className="relative group"
                onHoverStart={() => setAutoPlay(false)}
                onHoverEnd={() => setAutoPlay(true)}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-700">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activeProject}-${currentImageIndex}`}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <ImageWithFallback
                        src={projects[activeProject].images[currentImageIndex]}
                        alt={`${projects[activeProject].title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  <div className="absolute inset-0 flex items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      onClick={prevImage}
                      variant="outline"
                      size="sm"
                      className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 hover:border-white/40"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    
                    <Button
                      onClick={nextImage}
                      variant="outline"
                      size="sm"
                      className="w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 hover:border-white/40"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>

                  {/* Play Button Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Button
                      size="lg"
                      className="w-16 h-16 rounded-full bg-orange-500/90 hover:bg-orange-500 text-white backdrop-blur-sm"
                    >
                      <Play className="w-6 h-6 ml-1" />
                    </Button>
                  </motion.div>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {projects[activeProject].images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex
                            ? 'bg-orange-500 w-8'
                            : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Investment Badge */}
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-orange-500/90 text-white backdrop-blur-sm text-base px-4 py-2">
                      {projects[activeProject].investment}
                    </Badge>
                  </div>
                </div>
              </motion.div>

              {/* Project Details */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-4xl md:text-5xl text-white mb-4 leading-tight"
                  >
                    {projects[activeProject].title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex items-center gap-6 text-slate-300 mb-6"
                  >
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                      <span>{projects[activeProject].location}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-orange-400" />
                      <span>{projects[activeProject].completion}</span>
                    </div>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-lg text-slate-300 leading-relaxed mb-8"
                  >
                    {projects[activeProject].description}
                  </motion.p>
                </div>

                {/* Project Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="grid grid-cols-2 gap-8 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10"
                >
                  <div className="text-center">
                    <Building className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl text-white mb-1">{projects[activeProject].floors}</div>
                    <div className="text-sm text-slate-400">Floors</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                    <div className="text-3xl text-white mb-1">{projects[activeProject].apartments}</div>
                    <div className="text-sm text-slate-400">Units</div>
                  </div>
                </motion.div>

                {/* Project Highlights */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <h4 className="text-xl text-white mb-4">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {projects[activeProject].highlights.map((highlight, index) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                        className="flex items-center text-slate-300"
                      >
                        <div className="w-2 h-2 bg-orange-400 rounded-full mr-3" />
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    Explore Project Details
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-24 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Completed Projects" },
              { number: "5000+", label: "Happy Families" },
              { number: "15+", label: "Years Experience" },
              { number: "10+", label: "Ongoing Projects" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-4xl md:text-5xl text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}