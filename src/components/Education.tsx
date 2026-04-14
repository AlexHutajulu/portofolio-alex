import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Education() {
  const { t } = useLanguage();
  const items = t('education.items');

  return (
    <section id="education" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            {t('education.title1')} <span className="text-gradient">{t('education.title2')}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="p-1 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-purple-500/10 to-pink-500/30 relative group"
        >
          {/* Inner Glass Card */}
          <div className="glass-panel rounded-[22px] p-6 sm:p-8 md:p-10 relative overflow-hidden h-full w-full bg-white/80 dark:bg-[#030014]/80">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/30 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/20 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(168,85,247,0.2)] group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-400" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">{t('education.degree')}</h3>
                <div className="text-purple-600 dark:text-purple-400 text-lg sm:text-xl font-medium mb-4">{t('education.school')}</div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-6 bg-slate-100 dark:bg-white/5 w-fit px-4 py-1.5 rounded-full border border-slate-200 dark:border-white/5">
                  <Calendar className="w-4 h-4" />
                  <span>{t('education.period')}</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
                      <BookOpen className="w-5 h-5 text-purple-500 dark:text-purple-400 shrink-0 mt-0.5" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
