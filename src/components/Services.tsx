
import React from 'react';
import { Globe, Smartphone, Database, Palette, MessageSquare, Cog } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom web applications built with React, Next.js, and modern frameworks for optimal performance and user experience.',
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps using React Native and Flutter to reach users on any device.',
    },
    {
      icon: Database,
      title: 'Backend/API Integration',
      description: 'Robust backend systems and API integrations using Node.js, Python, and cloud services for scalable solutions.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design and intuitive interfaces that convert visitors into customers and enhance user satisfaction.',
    },
    {
      icon: MessageSquare,
      title: 'Consulting',
      description: 'Technical consulting and architecture planning to help you make informed decisions about your tech stack.',
    },
    {
      icon: Cog,
      title: 'Maintenance & Support',
      description: 'Ongoing support, updates, and optimization to keep your applications running smoothly and securely.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Services
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I offer comprehensive development services to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
