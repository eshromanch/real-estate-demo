"use client";

import { motion } from 'motion/react';
import { PropertyCard } from './PropertyCard';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    location: "Beverly Hills, CA",
    price: "$3,450,000",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 6,
    baths: 5,
    sqft: "4,200 sq ft",
    type: "Villa",
    isNew: true
  },
  {
    id: 2,
    title: "Luxury Penthouse Suite",
    location: "Manhattan, NY",
    price: "$5,200,000",
    image: "https://images.unsplash.com/photo-1568115286680-d203e08a8be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZW50aG91c2UlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3NTY3NTI1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 4,
    baths: 3,
    sqft: "3,800 sq ft",
    type: "Penthouse",
    isNew: false
  },
  {
    id: 3,
    title: "Contemporary Mansion",
    location: "Malibu, CA",
    price: "$7,890,000",
    image: "https://images.unsplash.com/photo-1710330758934-865ce4e4f298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB2aWxsYSUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NTY2NzQ5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 8,
    baths: 7,
    sqft: "6,500 sq ft",
    type: "Mansion",
    isNew: true
  },
  {
    id: 4,
    title: "Designer Apartment",
    location: "SoHo, NY",
    price: "$2,100,000",
    image: "https://images.unsplash.com/photo-1687180498602-5a1046defaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU2Njc1MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 3,
    baths: 2,
    sqft: "2,200 sq ft",
    type: "Apartment",
    isNew: false
  },
  {
    id: 5,
    title: "Modern Kitchen Estate",
    location: "Austin, TX",
    price: "$1,850,000",
    image: "https://images.unsplash.com/photo-1620086464194-5127366b51ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwbHV4dXJ5JTIwaG9tZXxlbnwxfHx8fDE3NTY3NTI1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 5,
    baths: 4,
    sqft: "3,400 sq ft",
    type: "House",
    isNew: false
  },
  {
    id: 6,
    title: "Luxury Bedroom Suite",
    location: "Miami, FL",
    price: "$2,750,000",
    image: "https://images.unsplash.com/photo-1612301988752-5a5b19021f45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzU2NzAzODY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    beds: 4,
    baths: 3,
    sqft: "2,900 sq ft",
    type: "Condo",
    isNew: true
  }
];

export function PropertiesSection() {
  return (
    <section id="properties" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl mb-4 text-slate-900"
          >
            Featured Properties
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto"
          >
            Discover our carefully curated collection of exceptional properties 
            in the world's most desirable locations.
          </motion.p>
        </motion.div>

        {/* Property Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="villa">Villa</TabsTrigger>
              <TabsTrigger value="penthouse">Penthouse</TabsTrigger>
              <TabsTrigger value="apartment">Apartment</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="villa">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.filter(p => p.type === 'Villa').map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="penthouse">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.filter(p => p.type === 'Penthouse').map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="apartment">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {properties.filter(p => p.type === 'Apartment').map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PropertyCard {...property} />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full"
          >
            View All Properties
          </Button>
        </motion.div>
      </div>
    </section>
  );
}