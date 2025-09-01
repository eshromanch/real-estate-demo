'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Users, Building, Heart } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Avatar } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: "Dr. Rashid Ahmed",
    title: "Medical Director",
    company: "Dhaka Medical Center",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk1MjMwNzh8MA&ixlib=rb-4.0.3&q=80&w=300",
    content: "LuxeEstates exceeded all our expectations. The quality of construction, attention to detail, and timely delivery made our investment decision worthwhile. Our family has been living happily in Dhaka Heights for over two years now.",
    rating: 5,
    project: "Dhaka Heights Residential Complex",
    location: "Dhanmondi, Dhaka",
    category: "residential"
  },
  {
    id: 2,
    name: "Sarah Khan",
    title: "CEO",
    company: "TechVenture BD",
    image: "https://images.unsplash.com/photo-1494790108755-2616c68e9a99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.0.3&q=80&w=300",
    content: "The Gulshan Commercial Tower has been the perfect headquarters for our growing tech company. The modern infrastructure, smart building features, and prime location have significantly boosted our business operations.",
    rating: 5,
    project: "Gulshan Commercial Tower",
    location: "Gulshan, Dhaka",
    category: "commercial"
  },
  {
    id: 3,
    name: "Mohammad Hasan",
    title: "Senior Partner",
    company: "Hasan & Associates Law Firm",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk1MjMwNzh8MA&ixlib=rb-4.0.3&q=80&w=300",
    content: "Working with LuxeEstates has been a remarkable experience. Their professionalism, transparency, and commitment to excellence are unmatched in Bangladesh's real estate sector. Highly recommended for serious investors.",
    rating: 5,
    project: "Multiple Projects Investment",
    location: "Dhaka & Chittagong",
    category: "investment"
  },
  {
    id: 4,
    name: "Fatima Rahman",
    title: "Interior Designer",
    company: "Rahman Design Studio",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.0.3&q=80&w=300",
    content: "The architectural design and space planning in LuxeEstates projects are exceptional. As an interior designer, I appreciate the attention to natural lighting, room proportions, and overall flow. It makes my job so much easier!",
    rating: 5,
    project: "Uttara Family Homes",
    location: "Uttara, Dhaka",
    category: "residential"
  },
  {
    id: 5,
    name: "Ahmed Karim",
    title: "Business Owner",
    company: "Karim Textiles Ltd",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk1MjMwNzh8MA&ixlib=rb-4.0.3&q=80&w=300",
    content: "The customer service team at LuxeEstates is outstanding. They guided us through every step of the purchasing process and continue to provide excellent after-sales support. Our office space in Sylhet IT Park is perfect for our needs.",
    rating: 5,
    project: "Sylhet IT Park",
    location: "Sylhet City",
    category: "commercial"
  },
  {
    id: 6,
    name: "Dr. Nasreen Sultana",
    title: "Physician",
    company: "City Heart Clinic",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTUyMzA3OHww&ixlib=rb-4.0.3&q=80&w=300",
    content: "Investing in LuxeEstates was one of the best decisions we made. The appreciation in property value, coupled with the excellent build quality and location, has exceeded our investment expectations significantly.",
    rating: 5,
    project: "Chittagong Waterfront Residency",
    location: "Panchlaish, Chittagong",
    category: "investment"
  }
];

const companyLogos = [
  { name: "Dhaka Medical Center", logo: "🏥" },
  { name: "TechVenture BD", logo: "💻" },
  { name: "Hasan & Associates", logo: "⚖️" },
  { name: "Rahman Design Studio", logo: "🎨" },
  { name: "Karim Textiles Ltd", logo: "🏭" },
  { name: "City Heart Clinic", logo: "❤️" },
  { name: "Bangladesh Bank", logo: "🏦" },
  { name: "Green Energy BD", logo: "🔋" },
  { name: "Future Tech Solutions", logo: "🚀" },
  { name: "Dhaka Chamber", logo: "🏢" },
  { name: "National University", logo: "🎓" },
  { name: "Prime Hospital", logo: "🏥" }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentTestimonial]);

  const handleNext = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentTestimonial ? 1 : -1);
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
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
            className="inline-flex items-center space-x-2 bg-orange-500/10 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-orange-500/20"
          >
            <Heart className="w-4 h-4 text-orange-400" />
            <span className="text-orange-400 text-sm uppercase tracking-wider">Client Stories</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-white leading-tight">
            What Our
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text"
            >
              Clients Say
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover why thousands of families and businesses trust LuxeEstates 
            for their real estate needs. Here are some stories from our satisfied clients.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative max-w-6xl mx-auto mb-20"
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20">
            <Button
              onClick={handleNext}
              variant="outline"
              size="sm"
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:border-white/40"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Testimonial Card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ 
                  opacity: 0, 
                  x: direction > 0 ? 100 : -100,
                  rotateY: direction > 0 ? 45 : -45
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  rotateY: 0
                }}
                exit={{ 
                  opacity: 0, 
                  x: direction > 0 ? -100 : 100,
                  rotateY: direction > 0 ? -45 : 45
                }}
                transition={{ 
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="w-full"
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 p-12 text-white relative overflow-hidden">
                  {/* Background Quote */}
                  <Quote className="absolute top-8 right-8 w-20 h-20 text-orange-400/10 rotate-12" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                      {/* Avatar */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                      >
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-orange-400/30 p-1">
                          <ImageWithFallback
                            src={testimonials[currentTestimonial].image}
                            alt={testimonials[currentTestimonial].name}
                            className="w-full h-full object-cover rounded-full"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                          <Quote className="w-4 h-4 text-white" />
                        </div>
                      </motion.div>

                      {/* Client Info */}
                      <div className="flex-1 text-center md:text-left">
                        <motion.h4
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-2xl mb-2"
                        >
                          {testimonials[currentTestimonial].name}
                        </motion.h4>
                        
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                          className="text-orange-400 mb-1"
                        >
                          {testimonials[currentTestimonial].title}
                        </motion.p>
                        
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                          className="text-slate-300 text-sm"
                        >
                          {testimonials[currentTestimonial].company}
                        </motion.p>

                        {/* Stars */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6, delay: 0.7 }}
                          className="flex items-center gap-1 mt-3 justify-center md:justify-start"
                        >
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                          ))}
                        </motion.div>
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="mb-6"
                    >
                      <p className="text-lg md:text-xl leading-relaxed text-center md:text-left italic">
                        "{testimonials[currentTestimonial].content}"
                      </p>
                    </motion.div>

                    {/* Project Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1 }}
                      className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-300"
                    >
                      <div className="flex items-center">
                        <Building className="w-4 h-4 mr-2 text-orange-400" />
                        <span>{testimonials[currentTestimonial].project}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-1 h-1 bg-slate-400 rounded-full mx-2 hidden md:block" />
                        <span>{testimonials[currentTestimonial].location}</span>
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-orange-500 scale-125'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Client Companies Logo Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl text-white mb-4">
              Trusted by Leading Organizations
            </h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We're proud to serve a diverse range of clients from healthcare, 
              technology, education, and business sectors across Bangladesh.
            </p>
          </div>

          {/* Animated Logo Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:bg-white/10 transition-colors duration-300 border border-white/10">
                  <span className="text-2xl">{company.logo}</span>
                </div>
                <p className="text-xs text-slate-400 group-hover:text-white transition-colors duration-300">
                  {company.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl md:text-4xl text-white mb-6">
            Join Our Growing Family
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Experience the LuxeEstates difference. Let us help you find your perfect 
            property or investment opportunity in Bangladesh's thriving real estate market.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}