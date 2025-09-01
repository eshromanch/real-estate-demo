"use client";

import { motion } from 'motion/react';
import { MapPin, Bed, Bath, Square, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

interface PropertyCardProps {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  type: string;
  isNew?: boolean;
}

export function PropertyCard({ 
  title, 
  location, 
  price, 
  image, 
  beds, 
  baths, 
  sqft, 
  type, 
  isNew = false 
}: PropertyCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0">
        <div className="relative overflow-hidden">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative h-64 overflow-hidden"
          >
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>

          {/* Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && (
              <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                New
              </Badge>
            )}
            <Badge variant="secondary" className="bg-white/90 text-slate-800">
              {type}
            </Badge>
          </div>

          {/* Like Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors duration-200"
          >
            <Heart 
              className={`w-4 h-4 transition-colors duration-200 ${
                isLiked ? 'fill-red-500 text-red-500' : 'text-slate-600'
              }`} 
            />
          </motion.button>

          {/* Price */}
          <div className="absolute bottom-4 left-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg"
            >
              <span className="text-orange-500 font-bold text-lg">{price}</span>
            </motion.div>
          </div>
        </div>

        <div className="p-6">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-2 group-hover:text-orange-500 transition-colors duration-200"
          >
            {title}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center text-slate-600 mb-4"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{location}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-between text-sm text-slate-600"
          >
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Bed className="w-4 h-4 mr-1" />
                <span>{beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="w-4 h-4 mr-1" />
                <span>{baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span>{sqft}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hover overlay with CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
          >
            View Details
          </motion.button>
        </motion.div>
      </Card>
    </motion.div>
  );
}