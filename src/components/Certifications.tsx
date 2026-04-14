import { motion } from 'motion/react';
import { Award, Sparkles } from 'lucide-react';

const certifications = [
  {
    title: "Programmer Software Development",
    issuer: "Badan Nasional Sertifikasi Profesi",
    highlight: true
  },
  {
    title: "Axioo Class Program Hardware Fundamental",
    issuer: "PT Tera Data Indonusa"
  },
  {
    title: "Axioo Class Program Hardware Maintenance-Basic Level",
    issuer: "PT Tera Data Indonusa"
  },
  {
    title: "Axioo Class Program Hardware Troubleshooting-Basic Level",
    issuer: "PT Tera Data Indonusa"
  },
  {
    title: "Test of English International communication",
    issuer: "Educational testing Service"
  },
  {
    title: "Basic life Support & Basic Fire Fighter",
    issuer: "PT Adaro Indonesia"
  },
  {
    title: "Praktik Kerja Lapangan",
    issuer: "PT Bukit Makmur Mandiri Utama"
  },
  {
    title: "Praktik Kerja Lapangan",
    issuer: "Dinas Komunikasi dan Informatika"
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Sertifikasi & <span className="text-gradient">Pelatihan</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden ${
                cert.highlight ? 'md:col-span-2 lg:col-span-2 bg-indigo-50 dark:bg-indigo-500/5 border-indigo-200 dark:border-indigo-500/20' : ''
              }`}
            >
              {cert.highlight && (
                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />
                </div>
              )}
              
              <div className="mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  cert.highlight ? 'bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400' : 'bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/10'
                } transition-colors duration-300`}>
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-slate-900 dark:text-white font-bold text-xl leading-tight mb-2 font-display">{cert.title}</h3>
              </div>
              
              <div className="relative z-10 flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm border-t border-slate-200 dark:border-white/10 pt-4 mt-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                {cert.issuer}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
