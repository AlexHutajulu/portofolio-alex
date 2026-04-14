import { motion } from 'motion/react';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: "Programmer",
    company: "Dinas Komunikasi dan Informatika",
    period: "Sep 2023 - Jan 2024",
    description: [
      "Mengembangkan dan mengimplementasikan website SOHIB (Sistem Online Hibah Banjarbaru) untuk bagian Kesra Setda Kota Banjarbaru.",
      "Mendesain dan mengembangkan tampilan antarmuka (UI) agar responsif dan user-friendly.",
      "Berkolaborasi dengan tim dalam proses analisis kebutuhan sistem, pengembangan fitur, hingga pengujian aplikasi."
    ]
  },
  {
    title: "IT Support",
    company: "PT Bukit Makmur Mandiri Utama",
    period: "Feb 2020 - Apr 2020",
    description: [
      "Menangani troubleshooting hardware dan software untuk pengguna internal sehingga meningkatkan efisiensi kerja operasional.",
      "Melakukan maintenance rutin pada perangkat komputer untuk memastikan kinerja normal.",
      "Melakukan instalasi dan konfigurasi sistem operasi windows serta aplikasi pendukung kerja."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Pengalaman <span className="text-gradient">Kerja</span>
          </h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-cyan-500/50 before:via-indigo-500/50 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full glass-panel border-cyan-500/50 text-cyan-600 dark:text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <Briefcase className="w-4 h-4" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-3.5rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover relative overflow-hidden">
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col gap-2 mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-display">{exp.title}</h3>
                    <div className="text-cyan-600 dark:text-cyan-400 font-medium text-base sm:text-lg">{exp.company}</div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mt-1 bg-slate-100 dark:bg-white/5 w-fit px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
