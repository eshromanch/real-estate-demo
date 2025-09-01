"use client";

import { motion } from 'motion/react';
import { 
  Building2, 
  PaintBucket, 
  Compass, 
  Hammer, 
  Shield, 
  TreePine,
  Calculator,
  Users
} from 'lucide-react';
import { Card } from './ui/card';

const services = [
  {
    icon: Building2,
    title: "Real Estate Development",
    description: "Complete residential and commercial development projects from concept to completion with modern architectural designs."
  },
  {
    icon: Compass,
    title: "Project Planning & Design",
    description: "Comprehensive planning and architectural design services ensuring optimal land utilization and aesthetic appeal."
  },
  {
    icon: Hammer,
    title: "Construction Management",
    description: "Expert construction management with quality materials, skilled workforce, and timely project delivery."
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Professional interior design services creating functional and beautiful living and working spaces."
  },
  {
    icon: Calculator,
    title: "Investment Consultation",
    description: "Strategic investment advice for real estate opportunities with market analysis and ROI projections."
  },
  {
    icon: Shield,
    title: "Property Management",
    description: "Comprehensive property management services including maintenance, security, and facility management."
  },
  {
    icon: TreePine,
    title: "Landscaping & Infrastructure",
    description: "Beautiful landscaping and robust infrastructure development for sustainable community living."
  },
  {
    icon: Users,
    title: "Customer Support",
    description: "Dedicated customer service throughout the entire journey from booking to handover and beyond."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-slate-900">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From initial planning to final handover, we provide comprehensive real estate development 
            services that ensure quality, innovation, and customer satisfaction at every step.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full text-center bg-white hover:shadow-lg transition-all duration-300 border border-slate-100 group">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300"
                  >
                    <IconComponent className="w-8 h-8 text-orange-600" />
                  </motion.div>
                  
                  <h3 className="mb-4 text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-slate-50 rounded-2xl p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-slate-900">
              Our Development Process
            </h3>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              A systematic approach to real estate development ensuring quality, 
              transparency, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Land Acquisition",
                description: "Strategic selection of prime locations with proper legal verification and documentation."
              },
              {
                step: "02", 
                title: "Planning & Design",
                description: "Architectural planning, engineering design, and obtaining necessary approvals and permits."
              },
              {
                step: "03",
                title: "Construction",
                description: "Quality construction with modern techniques, premium materials, and regular monitoring."
              },
              {
                step: "04",
                title: "Handover",
                description: "Final inspection, documentation completion, and keys handover to satisfied customers."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg mb-3 text-slate-900">{process.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl mb-4 text-slate-900">
              Why Choose LuxeEstates?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "We use premium materials and follow international construction standards to ensure durability and quality in every project."
              },
              {
                title: "Timely Delivery", 
                description: "Our proven track record shows consistent on-time project completion with transparent progress updates throughout development."
              },
              {
                title: "Customer-Centric Approach",
                description: "From initial consultation to after-sales support, we prioritize customer satisfaction and maintain long-term relationships."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <h4 className="text-xl mb-4 text-slate-900">{feature.title}</h4>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}