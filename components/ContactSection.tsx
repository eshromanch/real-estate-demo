"use client";

import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to find your dream property? Our expert team is here to guide you 
            through every step of your luxury real estate journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+1 (555) 123-4567",
                  subtitle: "Available 24/7 for urgent inquiries"
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "luxury@luxeestates.com",
                  subtitle: "We respond within 2 hours"
                },
                {
                  icon: MapPin,
                  title: "Office",
                  content: "123 Luxury Ave, Beverly Hills, CA 90210",
                  subtitle: "Visit us Monday - Friday, 9AM - 6PM"
                }
              ].map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg mb-1">{contact.title}</h4>
                      <p className="text-orange-400 mb-1">{contact.content}</p>
                      <p className="text-sm text-slate-400">{contact.subtitle}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12"
            >
              <Card className="bg-slate-800 border-slate-700 p-6">
                <h4 className="text-lg mb-4 text-white">Office Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Monday - Friday</span>
                    <span className="text-orange-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Saturday</span>
                    <span className="text-orange-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Sunday</span>
                    <span className="text-slate-400">By Appointment</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-slate-800 border-slate-700 p-8">
              <h3 className="text-2xl mb-6 text-white">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <Input
                      placeholder="First Name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <Input
                      placeholder="Last Name"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Input
                    placeholder="Phone Number"
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Textarea
                    placeholder="Tell us about your dream property..."
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 focus:border-orange-500 resize-none"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    size="lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </Button>
                </motion.div>
              </form>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="text-sm text-slate-400 mt-4 text-center"
              >
                We respect your privacy and will never share your information.
              </motion.p>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl mb-4">Ready to Start Your Journey?</h3>
          <p className="text-slate-300 mb-8">
            Schedule a private consultation with our luxury real estate experts today.
          </p>
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
          >
            Schedule Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}