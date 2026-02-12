import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, CreditCard, Mail, Users } from 'lucide-react';

export default function SolutionSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const solutions = [
    {
      icon: MapPin,
      title: "Porta con te la tua attività ovunque",
      description: "La scheda SIM dati integrata consente una connettività 3G/4G gratuita per accettare pagamenti in qualunque luogo, senza costi aggiuntivi.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      icon: Zap,
      title: "Piena autonomia",
      description: "Non è necessario collegarsi a un telefono per iniziare ad accettare pagamenti.",
      image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&h=400&fit=crop"
    },
    {
      icon: CreditCard,
      title: "Accetta tutti i metodi di pagamento",
      description: "Dalle carte standard ai mobile wallet, myPOS Go 2 accetta Visa, Mastercard, Maestro, AMEX, Apple Pay, Google Pay e altri ancora.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop"
    },
    {
      icon: Mail,
      title: "Invia ricevute digitali",
      description: "Via email o SMS direttamente dal terminale POS.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Modalità Multi-operatore",
      description: "Tieni traccia delle prestazioni individuali dello staff e dividi le mance facilmente.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight">
            La tua soluzione completa
            <br />
            <span className="text-blue-600">di pagamenti mobile</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={solutions[activeIndex].image}
                alt={solutions[activeIndex].title}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            {/* Active title overlay */}
            <motion.div 
              key={`title-${activeIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2">
                {solutions[activeIndex].title}
              </h3>
              <p className="text-white/90 text-xs sm:text-sm lg:text-base max-w-md leading-snug">
                {solutions[activeIndex].description}
              </p>
            </motion.div>
          </motion.div>

          {/* Feature List */}
          <div className="space-y-2 sm:space-y-3">
            {solutions.map((solution, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-blue-600 border-blue-600 shadow-lg shadow-blue-600/25' 
                    : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${
                    activeIndex === index 
                      ? 'bg-white/20' 
                      : 'bg-blue-100'
                  }`}>
                    <solution.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${
                      activeIndex === index ? 'text-white' : 'text-blue-600'
                    }`} />
                  </div>
                  <span className={`font-semibold text-sm sm:text-base lg:text-lg ${
                    activeIndex === index ? 'text-white' : 'text-slate-800'
                  }`}>
                    {solution.title}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}