import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Marco Antonucci",
      text: "Esperienza più che positiva. Mi sono legato a MyPos da più di 3 anni e devo dire di non aver avuto nessuna problematica importante e nelle piccole invece ho avuto una rapida soluzione.",
      rating: 5
    },
    {
      name: "Giuseppe",
      text: "Ottimo servizio, accredito immediato e terminale efficente. La gestione da pc o smartphone semplice ed intuitiva.",
      rating: 5
    },
    {
      name: "Valentina R.",
      text: "Facile da usare, veloce e affidabile. Lo consiglio a tutti i piccoli commercianti che cercano una soluzione pratica.",
      rating: 5
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            300 000+ esercenti si sono
            <br />
            <span className="text-blue-600">già affidati a noi</span>
          </h2>
          
          {/* Trustpilot-style rating */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-8 h-8 bg-emerald-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
              ))}
            </div>
            <span className="text-slate-600 font-medium">Trustpilot</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 fill-emerald-500" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <span className="font-semibold text-slate-900 text-sm sm:text-base">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}