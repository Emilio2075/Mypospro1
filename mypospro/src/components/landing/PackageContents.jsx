import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tag, Square, BookOpen, CreditCard, Smartphone, BatteryCharging } from 'lucide-react';

export default function PackageContents() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const items = [
    {
      icon: Tag,
      title: "Sticker dei circuiti accettati",
      description: "Fai sapere ai clienti che la tua attività accetta i pagamenti con carta.",
      color: "from-rose-400 to-rose-600"
    },
    {
      icon: Square,
      title: "Espositore dei circuiti accettati",
      description: "Mostra sul tuo tavolo i metodi di pagamento accettati, come Google Pay e Apple Pay.",
      color: "from-violet-400 to-violet-600"
    },
    {
      icon: BookOpen,
      title: "Guida all'uso",
      description: "Segui i passaggi per configurare e iniziare a usare il tuo dispositivo in pochi minuti.",
      color: "from-cyan-400 to-cyan-600"
    },
    {
      icon: CreditCard,
      title: "Carta di debito gratuita",
      description: "Ottieni la tua carta di debito gratuita senza canoni mensili e inizia a effettuare pagamenti fisici e online.",
      color: "from-amber-400 to-amber-600"
    },
    {
      icon: Smartphone,
      title: "myPOS Go 2",
      description: "Accetta pagamenti in tutta semplicità con un dispositivo tascabile.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: BatteryCharging,
      title: "Caricabatteria e cavo",
      description: "Ricarica il tuo dispositivo per far scorrere il flusso di pagamenti senza interruzioni.",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-12 sm:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Contenuto della confezione
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Tutto ciò che ti serve per iniziare ad accettare pagamenti pochi secondi.
          </p>
        </motion.div>

        {/* Central Package Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=500&h=400&fit=crop"
              alt="Package Contents"
              className="relative rounded-2xl shadow-2xl w-full max-w-md"
            />
          </div>
        </motion.div>

        {/* Items Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <div className={`relative p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'bg-slate-800 scale-105 shadow-2xl' 
                  : 'bg-slate-800/50'
              }`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}