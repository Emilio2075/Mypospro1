import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Wifi, Smartphone } from 'lucide-react';

export default function FeaturesGrid() {
  const features = [
    {
      icon: CreditCard,
      title: "Carta Mastercard aziendale gratuita",
      color: "from-amber-400 to-orange-500"
    },
    {
      icon: Wifi,
      title: "SIM 4G gratuita e Wi-Fi",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Smartphone,
      title: "Terminale POS completamente autonomo",
      color: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="group"
            >
              <div className="relative p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/50 hover:border-blue-200 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 sm:mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-base sm:text-xl font-semibold text-slate-800 leading-tight">
                  {feature.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}