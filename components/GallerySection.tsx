"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Camera, Grid, Maximize2, X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "exterior",
    title: "Modern Residential Facade",
    location: "Dhaka Heights, Dhanmondi",
    type: "Residential",
    size: "large"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU2Njc1MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "interior",
    title: "Luxury Living Space",
    location: "Uttara Family Homes",
    type: "Interior Design",
    size: "medium"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NTY3NTI1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "commercial",
    title: "Commercial Tower Night View",
    location: "Gulshan Commercial Tower",
    type: "Commercial",
    size: "large"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGJlZHJvb218ZW58MXx8fHwxNzU2Njc1MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "interior",
    title: "Master Bedroom Suite",
    location: "Banani Luxury Suites",
    type: "Interior Design",
    size: "medium"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1710330758934-865ce4e4f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NTY2NzQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "amenities",
    title: "Resort-style Swimming Pool",
    location: "Chittagong Waterfront",
    type: "Amenities",
    size: "large"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhsdXh1cnklMjBvZmZpY2UlMjBidWlsZGluZyUyMG1vZGVybg%3D%3D&ixlib=rb-4.1.0&q=80&w=1080",
    category: "commercial",
    title: "Modern Office Complex",
    location: "Sylhet IT Park",
    type: "Commercial",
    size: "medium"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "exterior",
    title: "Contemporary Architecture",
    location: "Dhaka Heights",
    type: "Residential",
    size: "medium"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1460472178825-e5240623afd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBvZmZpY2UlMjBpbnRlcmlvciUyMG1vZGVybg%3D%3D&ixlib=rb-4.1.0&q=80&w=1080",
    category: "interior",
    title: "Modern Office Interior",
    location: "Gulshan Commercial Tower",
    type: "Interior Design",
    size: "small"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRlcmZyb250JTIwaG91c2U%3D&ixlib=rb-4.1.0&q=80&w=1080",
    category: "exterior",
    title: "Waterfront Development",
    location: "Chittagong Waterfront",
    type: "Residential",
    size: "large"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjB2aWV3fGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "amenities",
    title: "Rooftop Garden Terrace",
    location: "Uttara Family Homes",
    type: "Amenities",
    size: "medium"
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MHx8fHwxNzA5NTIzMDc4fDA&ixlib=rb-4.0.3&q=80&w=1080",
    category: "exterior",
    title: "Glass Facade Excellence",
    location: "Gulshan Commercial Tower",
    type: "Commercial",
    size: "small"
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1600607688960-47d65fdc3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBraXRjaGVufGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.0.3&q=80&w=1080",
    category: "interior",
    title: "Designer Kitchen Space",
    location: "Banani Luxury Suites",
    type: "Interior Design",
    size: "small"
  }
];

const categories = [
  { id: 'all', name: 'All Photos', count: galleryImages.length },
  { id: 'exterior', name: 'Exterior', count: galleryImages.filter(img => img.category === 'exterior').length },
  { id: 'interior', name: 'Interior', count: galleryImages.filter(img => img.category === 'interior').length },
  { id: 'commercial', name: 'Commercial', count: galleryImages.filter(img => img.category === 'commercial').length },
  { id: 'amenities', name: 'Amenities', count: galleryImages.filter(img => img.category === 'amenities').length }
];

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setSelectedImage(filteredImages[index].id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (lightboxIndex + 1) % filteredImages.length;
    setLightboxIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex].id);
  };

  const prevImage = () => {
    const prevIndex = (lightboxIndex - 1 + filteredImages.length) % filteredImages.length;
    setLightboxIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex].id);
  };

  const getImageHeight = (size: string) => {
    switch(size) {
      case 'large': return 'row-span-2';
      case 'medium': return 'row-span-1';
      case 'small': return 'row-span-1';
      default: return 'row-span-1';
    }
  };

  return (
    <section id="gallery" className="py-32 bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-64 h-64 bg-orange-100 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-200 rounded-full"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
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
            className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-6 py-2 mb-8"
          >
            <Camera className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm uppercase tracking-wider">Project Gallery</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-slate-900 leading-tight">
            Visual
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text"
            >
              Excellence
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore the architectural beauty and design excellence of our completed and ongoing projects. 
            Each image tells a story of innovation, quality, and attention to detail.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'border-orange-500 bg-orange-500 text-white shadow-lg'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-orange-300 hover:text-orange-600 hover:shadow-md'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center">
                <Grid className="w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 text-sm opacity-75">({category.count})</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer ${getImageHeight(image.size)}`}
                onClick={() => openLightbox(index)}
                whileHover={{ y: -8 }}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Hover Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-between p-6 text-white opacity-0 group-hover:opacity-100"
                  >
                    <div className="flex justify-between items-start">
                      <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm border-0">
                        {image.type}
                      </Badge>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 p-0"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div>
                      <h3 className="text-lg mb-2 line-clamp-2">{image.title}</h3>
                      <div className="flex items-center text-sm opacity-90">
                        <MapPin className="w-4 h-4 mr-2" />
                        {image.location}
                      </div>
                    </div>
                  </motion.div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-r-[30px] border-t-orange-500 border-r-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-6xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <Button
                  onClick={closeLightbox}
                  variant="outline"
                  size="sm"
                  className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 z-10 p-0"
                >
                  <X className="w-5 h-5" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  onClick={prevImage}
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 z-10 p-0"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  onClick={nextImage}
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50 z-10 p-0"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900">
                  <ImageWithFallback
                    src={filteredImages[lightboxIndex].src}
                    alt={filteredImages[lightboxIndex].title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  
                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className="bg-orange-500 text-white">
                        {filteredImages[lightboxIndex].type}
                      </Badge>
                      <span className="text-sm opacity-75">
                        {lightboxIndex + 1} / {filteredImages.length}
                      </span>
                    </div>
                    <h3 className="text-2xl mb-2">{filteredImages[lightboxIndex].title}</h3>
                    <div className="flex items-center text-slate-300">
                      <MapPin className="w-4 h-4 mr-2" />
                      {filteredImages[lightboxIndex].location}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">
            Inspired by Our Work?
          </h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Discover how we can bring your vision to life with the same attention to detail 
            and architectural excellence showcased in our portfolio.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
}