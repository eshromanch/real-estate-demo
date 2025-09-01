"use client";

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Building, Users, Award, TrendingUp, ArrowRight, Target, Zap, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  {
    icon: Building,
    number: "50+",
    label: "Completed Projects",
    description: "Residential and commercial developments"
  },
  {
    icon: Users,
    number: "5000+",
    label: "Happy Families",
    description: "Satisfied homeowners across Bangladesh"
  },
  {
    icon: Award,
    number: "15+",
    label: "Years Experience",
    description: "Established expertise in real estate development"
  },
  {
    icon: TrendingUp,
    number: "10+",
    label: "Ongoing Projects",
    description: "Current developments in progress"
  }
];

const values = [
  {
    icon: Target,
    title: "Precision & Excellence",
    description: "Every project is executed with meticulous attention to detail, ensuring the highest standards of quality and craftsmanship in construction and design."
  },
  {
    icon: Zap,
    title: "Innovation & Sustainability",
    description: "We embrace cutting-edge architectural designs and eco-friendly construction practices that create sustainable communities for future generations."
  },
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Building long-term relationships with our clients through honest communication, transparent processes, and delivering on our commitments."
  }
];

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Animated geometric elements */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute top-20 right-20 w-32 h-32 border border-orange-200 rounded-3xl opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-40 left-20 w-24 h-24 border border-blue-200 rounded-full opacity-30"
      />

      {/* Floating dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-200 rounded-full"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
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
          initial={{ opacity: 0, y: 50 }}
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
            <Building className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600 text-sm uppercase tracking-wider">About LuxeEstates</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-slate-900 leading-tight">
            Building Bangladesh&apos;s
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text"
            >
              Tomorrow Today
            </motion.span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-slate-600 mb-8 leading-relaxed"
              >
                Since 2008, LuxeEstates has been at the forefront of Bangladesh&apos;s real estate revolution, 
                creating modern residential and commercial spaces that enhance urban living standards 
                across Dhaka, Chittagong, and other major cities.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg text-slate-600 mb-8 leading-relaxed"
              >
                Our experienced team of architects, engineers, and project managers brings innovative design, 
                quality construction, and timely delivery to every project, building trust with thousands 
                of satisfied families and businesses.
              </motion.p>
            </div>

            {/* Feature Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-6"
            >
              {['Quality Construction', 'Timely Delivery', 'Customer Satisfaction'].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  className="flex items-center group"
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-lg text-slate-700 group-hover:text-orange-600 transition-colors duration-300">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1NjY0MjgxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern architecture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100 backdrop-blur-sm"
              >
                <div className="text-3xl text-orange-500 mb-2">15+</div>
                <div className="text-sm text-slate-600">Years of Excellence</div>
                <div className="text-xs text-slate-500 mt-1">in Real Estate Development</div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-6 -right-6 w-20 h-20 border-2 border-orange-200 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-4 w-8 h-8 bg-orange-100 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300"
                  >
                    <IconComponent className="w-10 h-10 text-orange-600" />
                  </motion.div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-4xl text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300"
                  >
                    {stat.number}
                  </motion.div>
                  
                  <h4 className="text-lg text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {stat.label}
                  </h4>
                  
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl text-slate-900 mb-6">
            Our Core Values
          </h3>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            The principles that guide every project and drive our commitment to excellence in real estate development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-slate-100 overflow-hidden">
                  {/* Decorative background */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300 relative z-10"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h4 className="text-xl text-slate-900 mb-4 group-hover:text-orange-600 transition-colors duration-300 relative z-10">
                    {value.title}
                  </h4>
                  
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}