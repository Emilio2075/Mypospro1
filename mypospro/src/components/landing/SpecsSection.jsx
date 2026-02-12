import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Battery, Wifi, Fingerprint, ChevronDown, ChevronUp, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SpecsSection() {
  const [expanded, setExpanded] = useState(false);

  const highlights = [
    {
      icon: Scale,
      text: "Con un peso di soli 180 g e dimensioni inferiori rispetto gli smartphone moderni"
    },
    {
      icon: Battery,
      text: "Batteria a lunga durata, in grado di accettare pagamenti per una intera giornata"
    },
    {
      icon: Wifi,
      text: "Approfitta della flessibilità di gestire la tua attività mentre sei in movimento grazie a una SIM dati gratuita"
    },
    {
      icon: Fingerprint,
      text: "I tasti in rilievo, resistenti e confortevoli, offrono un'elevata accessibilità"
    }
  ];

  const specs = [
    { label: "Dimensioni (L P A)", value: "136,6 x 67,6 x 21 mm" },
    { label: "Peso", value: "181,6 g batteria compresa" },
    { label: "Ingresso", value: "100~240V 50~60Hz 0.3A" },
    { label: "Uscita", value: "5 V / 1A" }
  ];

  const features = [
    { title: "Top-up", description: "Ottieni guadagni extra ricaricando i numeri di telefono e i servizi prepagati" },
    { title: "Richiesta di pagamento", description: "Richiedi denaro da tutto il mondo e pagamenti più rapidi che mai" },
    { title: "Pre-autorizzazione", description: "Metti al sicuro i tuoi pagamenti e proteggi la tua attività" },
    { title: "Tipping", description: "Ricevi le mance e dividile facilmente tra il tuo personale" },
    { title: "Modalità Multi-оperatore", description: "Tieni traccia delle prestazioni individuali del tuo staff" }
  ];

  const guides = [
    { title: "Modalità mance e multi-operatore", size: "643.59K" },
    { title: "Manuale d'uso Go 2", size: "4.73M" },
    { title: "Specifiche tecniche Go 2", size: "971.64K" }
  ];

  return (
    <section className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Specifiche e caratteristiche
          </h2>
        </motion.div>

        {/* Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Expandable Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 rounded-3xl overflow-hidden"
        >
          {/* Specs Table */}
          <div className="p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Caratteristiche</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {specs.map((spec, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-xl">
                  <span className="text-slate-600">{spec.label}</span>
                  <span className="font-semibold text-slate-900">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Collapsible Features */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? "auto" : 0 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-8 border-t border-slate-200 pt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Funzionalità</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="p-4 bg-white rounded-xl">
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-600 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-6">Guide</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {guides.map((guide, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-xl hover:bg-blue-50 transition-colors cursor-pointer group">
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{guide.title}</p>
                      <p className="text-slate-500 text-xs">{guide.size}</p>
                    </div>
                    <Download className="w-5 h-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Toggle Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full py-4 flex items-center justify-center gap-2 text-blue-600 font-medium hover:bg-slate-100 transition-colors border-t border-slate-200"
          >
            {expanded ? (
              <>
                Mostra di meno
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Mostra di più
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </motion.div>
      </div>
    </section>
  );
}