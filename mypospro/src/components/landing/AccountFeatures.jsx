import React from 'react';
import { motion } from 'framer-motion';
import { Store, Smartphone, Link2, Shield } from 'lucide-react';

export default function AccountFeatures() {
  const features = [
    {
      icon: Store,
      title: "myPOS Online",
      description: "Crea il tuo negozio online gratuito e comincia a vendere in tutto il mondo",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop",
      color: "bg-blue-600"
    },
    {
      icon: Smartphone,
      title: "myPOS Glass",
      description: "Ricevi pagamenti con Carte Contactless sul tuo telefono Android",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=300&h=200&fit=crop",
      color: "bg-violet-600"
    },
    {
      icon: Link2,
      title: "Link per i pagamenti",
      description: "Genera, condividi e ricevi subito il pagamento. Semplicissimo!",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      color: "bg-emerald-600"
    },
    {
      icon: Shield,
      title: "Pre-autorizzazione",
      description: "Metti al sicuro i tuoi pagamenti e proteggi la tua attività nel lungo periodo",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      color: "bg-amber-600"
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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight px-4">
            Il tuo conto myPOS è pieno di
            <span className="text-blue-600"> funzioni preziose</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative h-32 sm:h-40 overflow-hidden">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 ${feature.color} rounded-lg flex items-center justify-center shadow-lg`}>
                    <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold text-slate-900 mb-1 sm:mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}