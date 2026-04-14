import { motion } from 'motion/react';
import { Linkedin, Mail, ArrowRight, Terminal, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-10 px-6 relative overflow-hidden">
      {/* Background glowing elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-panel text-indigo-600 dark:text-indigo-300 text-sm font-medium tracking-wide"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            IT Support & Programmer
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-[1.1]">
            Hi, I'm <br />
            <span className="text-gradient">Alexandro Nadio Hutajulu</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
            Lulusan Diploma III Teknik Informatika. Berorientasi pada pemecahan masalah dan siap berkontribusi dalam meningkatkan efisiensi layanan teknologi informasi melalui kode dan infrastruktur yang handal.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5">
            <a href="#contact" className="group relative px-8 py-4 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold overflow-hidden transition-all hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-2">
                Hubungi Saya <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/alexandro-nadio-hutajulu" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full glass-panel glass-panel-hover text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:alexandronadio057@gmail.com" className="p-4 rounded-full glass-panel glass-panel-hover text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
          className="flex-1 flex justify-center relative w-full max-w-md lg:max-w-none"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 mt-8 lg:mt-0">
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 z-20 glass-panel p-2 sm:p-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 will-change-transform"
            >
              <div className="p-1.5 sm:p-2 bg-cyan-500/20 rounded-lg text-cyan-600 dark:text-cyan-400"><Code2 className="w-4 h-4 sm:w-5 sm:h-5" /></div>
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white pr-1 sm:pr-2">Web Dev</span>
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 z-20 glass-panel p-2 sm:p-3 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 will-change-transform"
            >
              <div className="p-1.5 sm:p-2 bg-purple-500/20 rounded-lg text-purple-600 dark:text-purple-400"><Terminal className="w-4 h-4 sm:w-5 sm:h-5" /></div>
              <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-white pr-1 sm:pr-2">IT Support</span>
            </motion.div>

            {/* Orbiting Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-20px] sm:inset-[-30px] border border-slate-300 dark:border-white/10 rounded-full border-dashed will-change-transform"
            ></motion.div>
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-40px] sm:inset-[-60px] border border-indigo-500/20 rounded-full will-change-transform"
            >
              <div className="absolute top-0 left-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)] -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>
            
            {/* Profile Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-slate-200 dark:border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)] dark:shadow-[0_0_50px_rgba(79,70,229,0.3)] z-10 bg-white dark:bg-slate-900 p-2 transform-gpu">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                <img 
                  src="https://lh3.googleusercontent.com/d/14_I9s00ENudEr3uNoYKBHwgRCq_7gcbB" 
                  alt="Alexandro Nadio Hutajulu" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Alexandro+Nadio&background=030014&color=818cf8&size=512";
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
