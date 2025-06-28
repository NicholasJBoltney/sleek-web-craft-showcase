
import React from 'react';
import { Code, Lightbulb, Zap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience creating 
                digital solutions that make a real impact. I specialize in building scalable web 
                applications and mobile apps using modern technologies like React, Node.js, and React Native.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                What sets me apart is my focus on understanding your business goals first, then 
                crafting technical solutions that not only work flawlessly but also drive measurable 
                results. I believe in clean code, exceptional user experiences, and delivering projects 
                on time and within budget.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you'll find me exploring the latest tech trends, contributing to 
                open-source projects, or mentoring other developers in the community.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Clean Code</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Problem Solver</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-blue-600" />
                  <span className="text-gray-700">Quality Focus</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                  <Code className="w-32 h-32" />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
